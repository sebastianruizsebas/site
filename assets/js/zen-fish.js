/*! zen-fish.js — fish-school background for sebasruiz.site.
 * Adapted from "interactive-koi-pond" by Rezaye Rabbi (RzX) — segment-chain
 * koi rendering and pointer-evade behavior —
 * https://github.com/rzrabbi/interactive-koi-pond (MIT License).
 * Flocking (separation/alignment/cohesion) pattern after "BoidsCanvas" by
 * Mike Christensen — https://github.com/mschristensen/BoidsCanvas (MIT
 * License) — and Craig Reynolds' boids model. Full license texts ship in
 * /LICENSE-third-party at the site root.
 *
 * Behavior: evade — fish inside the flee radius dart away from the pointer;
 * explore — distant fish drift gently toward a pointer at rest.
 * Renders into the fixed, pointer-events:none <canvas class="zen-fish">
 * behind all content. Sits out entirely under prefers-reduced-motion or
 * data-saver, pauses on hidden tabs, themes itself off html[data-theme].
 */
(function () {
  "use strict";

  var canvas = document.querySelector("canvas.zen-fish");
  if (!canvas || !canvas.getContext) return;
  if (navigator.connection && navigator.connection.saveData) return;

  var ctx = canvas.getContext("2d");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var W = 0, H = 0;

  /* ── Tuning ── */
  var PERCEPTION = 64;        /* neighbor radius for alignment/cohesion (px) */
  var SEPARATION = 26;        /* personal-space radius (px) */
  var MAX_SPEED = 85;         /* px/s */
  var MIN_SPEED = 30;         /* px/s — fish never stall */
  var MAX_FORCE = 110;        /* steering accel cap, px/s^2 */
  var FLEE_RADIUS = 150;      /* evade the pointer inside this distance */
  var SEEK_RADIUS = 520;      /* explore toward a resting pointer inside this */
  var W_SEP = 1.6, W_ALI = 0.9, W_COH = 0.7, W_FLEE = 3.2, W_SEEK = 0.22;
  var POINTER_STILL_MS = 900; /* pointer must rest this long to attract */
  var WANDER = 0.28;          /* rad/s of idle meander */
  var SEGS = 7;               /* trailing body segments per fish */
  var SPACING = 2.3;          /* segment spacing at size 1 (px) */

  /* Tapered body: per-segment radii at size 1 (head drawn separately). */
  var SEG_R = [2.6, 2.8, 2.5, 2.1, 1.7, 1.3, 0.9];

  var fish = [];
  var pointer = { x: -1e9, y: -1e9, movedAt: 0, active: false };
  var running = false, rafId = 0, lastT = 0;

  function fishCount() {
    return Math.max(20, Math.min(56, Math.round((W * H) / 30000)));
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = fishCount();
    while (fish.length < n) fish.push(spawn());
    if (fish.length > n) fish.length = n;
  }

  function spawn() {
    var a = Math.random() * Math.PI * 2;
    var sp = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
    var size = 0.8 + Math.random() * 0.7;
    var f = {
      x: Math.random() * W, y: Math.random() * H,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      size: size,
      phase: Math.random() * Math.PI * 2,
      segs: []
    };
    /* chain trails behind the head, opposite the heading */
    for (var k = 0; k < SEGS; k++) {
      f.segs.push({
        x: f.x - Math.cos(a) * SPACING * size * (k + 1),
        y: f.y - Math.sin(a) * SPACING * size * (k + 1)
      });
    }
    return f;
  }

  function themeColor() {
    return document.documentElement.getAttribute("data-theme") === "dark"
      ? "oklch(78% 0.05 350 / 0.34)"   /* pale plum, moonlit */
      : "oklch(36% 0.06 250 / 0.30)";  /* deep water-blue shadow */
  }

  /* Steering vector: head toward direction (tx,ty) at MAX_SPEED, capped. */
  function steer(f, tx, ty) {
    var mag = Math.hypot(tx, ty);
    if (mag < 0.0001) return [0, 0];
    var dx = (tx / mag) * MAX_SPEED - f.vx;
    var dy = (ty / mag) * MAX_SPEED - f.vy;
    var dm = Math.hypot(dx, dy);
    if (dm > MAX_FORCE) { dx = (dx / dm) * MAX_FORCE; dy = (dy / dm) * MAX_FORCE; }
    return [dx, dy];
  }

  /* Follow-the-leader chain (the koi-pond body): each segment closes up
     to a fixed spacing behind the one ahead of it. */
  function settleChain(f) {
    var space = SPACING * f.size;
    var px = f.x, py = f.y, k, seg, dx, dy, d;
    for (k = 0; k < SEGS; k++) {
      seg = f.segs[k];
      dx = px - seg.x; dy = py - seg.y;
      d = Math.hypot(dx, dy);
      if (d > space) {
        var t = (d - space) / d;
        seg.x += dx * t; seg.y += dy * t;
      }
      px = seg.x; py = seg.y;
    }
  }

  function step(dt, now) {
    var i, j, f, o, dx, dy, d2;
    var perc2 = PERCEPTION * PERCEPTION, sep2 = SEPARATION * SEPARATION;
    var flee2 = FLEE_RADIUS * FLEE_RADIUS, seek2 = SEEK_RADIUS * SEEK_RADIUS;
    var pointerStill = pointer.active && (now - pointer.movedAt) > POINTER_STILL_MS;

    for (i = 0; i < fish.length; i++) {
      f = fish[i];
      var sepX = 0, sepY = 0, aliX = 0, aliY = 0, cohX = 0, cohY = 0, n = 0;

      for (j = 0; j < fish.length; j++) {
        if (j === i) continue;
        o = fish[j];
        dx = o.x - f.x; dy = o.y - f.y;
        d2 = dx * dx + dy * dy;
        if (d2 > perc2) continue;
        n++;
        aliX += o.vx; aliY += o.vy;
        cohX += dx; cohY += dy;
        if (d2 < sep2 && d2 > 0.0001) {
          var inv = 1 / d2;               /* push away, weighted by closeness */
          sepX -= dx * inv; sepY -= dy * inv;
        }
      }

      var ax = 0, ay = 0;
      if (n > 0) {
        var ali = steer(f, aliX / n, aliY / n);
        var coh = steer(f, cohX / n, cohY / n);
        ax += ali[0] * W_ALI + coh[0] * W_COH;
        ay += ali[1] * W_ALI + coh[1] * W_COH;
        var sm = Math.hypot(sepX, sepY);
        if (sm > 0) {
          ax += (sepX / sm) * MAX_FORCE * W_SEP;
          ay += (sepY / sm) * MAX_FORCE * W_SEP;
        }
      }

      /* pointer: evade when close; drift toward it when far and at rest */
      if (pointer.active) {
        dx = pointer.x - f.x; dy = pointer.y - f.y;
        d2 = dx * dx + dy * dy;
        if (d2 < flee2 && d2 > 0.0001) {
          var dist = Math.sqrt(d2);
          var urgency = 1 - dist / FLEE_RADIUS;      /* closer = stronger */
          ax -= (dx / dist) * MAX_FORCE * W_FLEE * (0.3 + 0.7 * urgency);
          ay -= (dy / dist) * MAX_FORCE * W_FLEE * (0.3 + 0.7 * urgency);
        } else if (pointerStill && d2 < seek2 && d2 > flee2 * 4) {
          var seek = steer(f, dx, dy);
          ax += seek[0] * W_SEEK; ay += seek[1] * W_SEEK;
        }
      }

      f.vx += ax * dt; f.vy += ay * dt;

      /* clamp speed */
      var sp = Math.hypot(f.vx, f.vy) || 0.001;
      var cl = Math.max(MIN_SPEED, Math.min(MAX_SPEED, sp)) / sp;
      f.vx *= cl; f.vy *= cl;

      /* idle meander: rotate velocity by a small wrap-safe angle */
      f.phase += dt * (0.9 + 0.4 * f.size);
      var da = Math.sin(f.phase) * WANDER * dt;
      var ca = Math.cos(da), sa = Math.sin(da);
      var nvx = f.vx * ca - f.vy * sa;
      f.vy = f.vx * sa + f.vy * ca;
      f.vx = nvx;

      f.x += f.vx * dt; f.y += f.vy * dt;

      /* wrap around the viewport; shift the whole chain so it stays intact */
      var m = 30, sx = 0, sy = 0;
      if (f.x < -m) sx = W + 2 * m; else if (f.x > W + m) sx = -(W + 2 * m);
      if (f.y < -m) sy = H + 2 * m; else if (f.y > H + m) sy = -(H + 2 * m);
      if (sx || sy) {
        f.x += sx; f.y += sy;
        for (j = 0; j < SEGS; j++) { f.segs[j].x += sx; f.segs[j].y += sy; }
      }

      settleChain(f);
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = themeColor();
    for (var i = 0; i < fish.length; i++) {
      var f = fish[i];
      var s = f.size;

      /* one path per fish: head + segment circles + fins + tail united in a
         single fill, so the translucent color never double-darkens */
      ctx.beginPath();

      /* head */
      ctx.moveTo(f.x + 2.9 * s, f.y);
      ctx.arc(f.x, f.y, 2.9 * s, 0, 6.2832);

      /* tapered body segments */
      for (var k = 0; k < SEGS; k++) {
        var seg = f.segs[k], r = SEG_R[k] * s;
        ctx.moveTo(seg.x + r, seg.y);
        ctx.arc(seg.x, seg.y, r, 0, 6.2832);
      }

      /* pectoral fins off the second segment, perpendicular to the body */
      var s1 = f.segs[1], s0 = f.segs[0];
      var bdx = s0.x - s1.x, bdy = s0.y - s1.y;
      var bl = Math.hypot(bdx, bdy) || 1;
      bdx /= bl; bdy /= bl;                    /* along body, toward head */
      var nx = -bdy, ny = bdx;                 /* body normal */
      var finLen = 3.4 * s, finBack = 2.4 * s;
      ctx.moveTo(s1.x + nx * 1.6 * s, s1.y + ny * 1.6 * s);
      ctx.lineTo(s1.x + nx * finLen - bdx * finBack, s1.y + ny * finLen - bdy * finBack);
      ctx.lineTo(s1.x + nx * 0.4 * s - bdx * finBack * 0.6, s1.y + ny * 0.4 * s - bdy * finBack * 0.6);
      ctx.closePath();
      ctx.moveTo(s1.x - nx * 1.6 * s, s1.y - ny * 1.6 * s);
      ctx.lineTo(s1.x - nx * finLen - bdx * finBack, s1.y - ny * finLen - bdy * finBack);
      ctx.lineTo(s1.x - nx * 0.4 * s - bdx * finBack * 0.6, s1.y - ny * 0.4 * s - bdy * finBack * 0.6);
      ctx.closePath();

      /* tail fin: extends past the last segment, with a gentle wag */
      var tipA = f.segs[SEGS - 1], tipB = f.segs[SEGS - 2];
      var tdx = tipA.x - tipB.x, tdy = tipA.y - tipB.y;
      var tl = Math.hypot(tdx, tdy) || 1;
      tdx /= tl; tdy /= tl;                    /* along body, toward tail */
      var tnx = -tdy, tny = tdx;
      var wag = Math.sin(t * 0.008 + f.phase * 4) * 1.1 * s;
      var tailLen = 4.6 * s, tailHalf = 2.4 * s;
      ctx.moveTo(tipA.x, tipA.y);
      ctx.lineTo(
        tipA.x + tdx * tailLen + tnx * (tailHalf + wag),
        tipA.y + tdy * tailLen + tny * (tailHalf + wag)
      );
      ctx.lineTo(
        tipA.x + tdx * tailLen - tnx * (tailHalf - wag),
        tipA.y + tdy * tailLen - tny * (tailHalf - wag)
      );
      ctx.closePath();

      ctx.fill();
    }
  }

  function frame(t) {
    if (!running) return;
    var dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0.016;
    lastT = t;
    step(dt, performance.now());
    draw(t);
    rafId = window.requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion.matches) return;
    running = true; lastT = 0;
    rafId = window.requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    if (rafId) window.cancelAnimationFrame(rafId);
    rafId = 0;
  }

  window.addEventListener("pointermove", function (e) {
    pointer.x = e.clientX; pointer.y = e.clientY;
    pointer.movedAt = performance.now();
    pointer.active = true;
  }, { passive: true });
  window.addEventListener("pointerup", function (e) {
    if (e.pointerType === "touch") pointer.active = false;
  }, { passive: true });
  window.addEventListener("pointercancel", function () { pointer.active = false; });
  window.addEventListener("pointerleave", function () { pointer.active = false; });
  window.addEventListener("blur", function () { pointer.active = false; });

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", function (e) {
      if (e.matches) { stop(); ctx.clearRect(0, 0, W, H); } else start();
    });
  }

  resize();
  start();
})();
