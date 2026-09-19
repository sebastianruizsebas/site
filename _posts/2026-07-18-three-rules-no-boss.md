---
title: "Three rules, no boss"
tags:
  - boids
  - collective behavior
  - Thousand Brains Theory
  - notes
excerpt: "The fish behind this site follow three local rules and nobody is in charge. Behavior with no central controller is also how I think about brains, and about the flies I work on."
---

Move your cursor and the fish scatter. They regroup once you hold still.

The fish are a boids simulation, which Craig Reynolds published in 1987. Each fish follows three rules, and each rule only looks at its nearby neighbors:

- separation: don't crowd the fish next to you
- alignment: steer roughly the way your neighbors steer
- cohesion: drift toward the average position of the neighbors you can see

There is no leader fish and nothing coordinating the group. The code has three parts: a perception radius, a weight per rule, and the cursor, which the fish treat as a threat.

The word for this is emergence: simple local interactions, repeated many times, add up to complex group behavior. Vicsek and colleagues (1995) showed the bare version, where particles move at fixed speed and take their neighbors' average heading, plus noise. Lower the noise past a point and the whole population moves together. These are models that produce flock-like behavior, which is a reason to take the mechanism seriously and not proof that real fish work this way (Sumpter, 2006).

In real fish those rules are senses wired to movement. Partridge and Pitcher (1980) went through them sense by sense. Vision tracks where a neighbor is and which way it points, while the lateral line (the row of flow sensors down a fish's side) tracks speed and holds spacing. Blind the fish and the school spreads out. Knock out the lateral line and it packs in tighter.

Because of this, behavior can look coordinated, even smart, with nothing in the middle deciding anything. Rodney Brooks (1991) built robots on that premise: simple processes wired straight from sensing to acting, no central model in between. The robots still worked.

The Thousand Brains idea I work in (Jeff Hawkins' account of the cortex as thousands of columns that each model the world and vote) has no headquarters either. That is an analogy, and a school is not a brain.

Why would fish end up this way? Predators. Ioannou, Guttal and Couzin (2012) had bluegill sunfish hunt virtual prey. The prey caught least often moved in a coordinated, schooling-like way. The cursor on this page is a crude predator, so go poke them.

I work on these same loops in flies instead of fish. One project replicates a fly's escape response, the fast swerve away from something looming. Another, at Janelia, puts a fly-like agent in a body and teaches it to move through reinforcement. Both have the shape of one boid fleeing your cursor: something senses a threat nearby and turns it into an action.

The fish are following three rules, which gets you most of what you see, and I don't want to claim more.

---

### References

- Reynolds, C. W. (1987). Flocks, herds, and schools: a distributed behavioral model. *Computer Graphics (SIGGRAPH '87)*, 21(4), 25–34. [doi](https://doi.org/10.1145/37401.37406)
- Reynolds, C. W. (1999). Steering behaviors for autonomous characters. *Game Developers Conference 1999.* [red3d.com](https://www.red3d.com/cwr/papers/1999/gdc99steer.html)
- Vicsek, T., et al. (1995). Novel type of phase transition in a system of self-driven particles. *Physical Review Letters*, 75(6), 1226–1229.
- Couzin, I. D., Krause, J., James, R., Ruxton, G. D., & Franks, N. R. (2002). Collective memory and spatial sorting in animal groups. *Journal of Theoretical Biology*, 218(1), 1–11. [doi](https://doi.org/10.1006/jtbi.2002.3065)
- Partridge, B. L., & Pitcher, T. J. (1980). The sensory basis of fish schools: relative roles of lateral line and vision. *Journal of Comparative Physiology A*, 135(4), 315–325. [doi](https://doi.org/10.1007/BF00657647)
- Brooks, R. A. (1991). Intelligence without representation. *Artificial Intelligence*, 47(1–3), 139–159. [doi](https://doi.org/10.1016/0004-3702(91)90053-M)
- Braitenberg, V. (1984). *Vehicles: Experiments in Synthetic Psychology.* MIT Press.
- Couzin, I. D., Krause, J., Franks, N. R., & Levin, S. A. (2005). Effective leadership and decision-making in animal groups on the move. *Nature*, 433, 513–516.
- Couzin, I. D. (2009). Collective cognition in animal groups. *Trends in Cognitive Sciences*, 13(1), 36–43. [doi](https://doi.org/10.1016/j.tics.2008.10.002)
- Ioannou, C. C., Guttal, V., & Couzin, I. D. (2012). Predatory fish select for coordinated collective motion in virtual prey. *Science*, 337(6099), 1212–1215. [doi](https://doi.org/10.1126/science.1218919)
- Krakauer, D. C. (1995). Groups confuse predators by exploiting perceptual bottlenecks. *Behavioral Ecology and Sociobiology*, 36, 421–429.
- Handegard, N. O., et al. (2012). The dynamics of coordinated group hunting and collective information transfer among schooling prey. *Current Biology*, 22(13), 1213–1217.
- Sumpter, D. J. T. (2006). The principles of collective animal behaviour. *Philosophical Transactions of the Royal Society B*, 361(1465), 5–22.
