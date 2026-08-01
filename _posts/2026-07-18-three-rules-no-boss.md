---
title: "Emergent collective fish behavior from three general rules"
tags:
  - boids
  - collective behavior
  - Thousand Brains Theory
  - notes
excerpt: "The fish drifting behind this site follow three local rules and nobody is in charge. That same idea, behavior with no central controller, is a real way to think about brains, and about the flies I work on."
---

If you move your cursor around this site, the school of fish drifting in the background scatters away from it and regroups once you hold still. Here is how that works, because the mechanism is simpler than it looks, and it lines up with how I think about brains.

The fish are a "boids" simulation, the one Craig Reynolds published in 1987. Each fish follows three rules, and each rule only looks at its nearby neighbors:

- separation: don't crowd the fish right next to you
- alignment: steer roughly the way your neighbors are steering
- cohesion: drift toward the average position of the neighbors you can see

There is no leader fish and nothing coordinating the group. (One pedantic note: Reynolds' 1987 paper called these collision avoidance, velocity matching, and flock centering. The tidier "separation, alignment, cohesion" names came later, in his 1999 write-up.) You can read the code on this site. There is a perception radius, a weight for each rule, and the cursor, which the fish treat as a threat.

The word for this is emergence, and it is worth being precise instead of mystical about it. Emergence means you get complicated group behavior out of simple interactions repeated locally, many times over. The stripped-down version comes from physics: Vicsek and colleagues (1995) simulated particles that do nothing but move at a fixed speed and adopt the average heading of their neighbors, plus some random noise. Lower the noise past a point and the whole population starts moving together, coherently, with nobody coordinating it. Add a little biology and one local parameter, like how wide a band around itself each animal tries to align within, flips the whole group between a disordered swarm, a rotating mill, and a marching formation. Those groups also show a history-dependence the authors call collective memory (Couzin et al., 2002). Keep the caveat running underneath: these are models. They produce behavior that resembles a flock, which is a reason to take the mechanism seriously and not a demonstration that real animals compute it this way (Sumpter, 2006).

A boid is more than an animation trick because in real fish those rules are senses wired to movement. Partridge and Pitcher (1980) went through schooling fish sense by sense. Vision mostly tracks where a neighbor is, which way it points, and how far off it sits, while the lateral line, the row of flow sensors down a fish's side, tracks a neighbor's speed and holds minimum spacing. Blind the fish and the school spreads out. Knock out the lateral line and it packs in tighter. Each fish runs a loop from sensing to movement, and the school is what a few hundred of those loops do at once.

That is the part that connects to neuroscience, and the reason I put fish on the page and not, say, snow. The lesson boids teaches is old and a little deflating: behavior can look coordinated, purposeful, even smart, with nothing in the middle deciding anything. Rodney Brooks built robots on this premise (1991), lots of simple processes each wired straight from sensing to acting, no central model of the world in between, and the robots still did sensible things. Braitenberg made the same point with a thought experiment: a "vehicle" that is a light sensor wired to a motor will veer away from light and look, to you, afraid. He called the trap the law of uphill analysis and downhill invention, meaning behavior tends to look like it needs more machinery than it does.

My field takes the group version of this seriously. Couzin (2009) argues that the way animal groups reach decisions is analogous to how populations of neurons do, and in an earlier result a small informed minority can steer a whole school toward a target with no signaling at all, and without any fish knowing which ones are informed (Couzin et al., 2005). The framework I work in, the Thousand Brains idea, has the same shape: a cortex of thousands of columns, each building its own model of the world and voting, with no headquarters. I will put that down as an analogy and then distrust it, the same way I distrust every analogy that lines up this cleanly, because a school is not a brain and the mapping is only suggestive.

So why would fish end up this way? Predators punish the alternative. Ioannou, Guttal and Couzin (2012) had real bluegill sunfish hunt virtual prey, moving dots they could tune, and the prey caught least often were the ones with coordinated, schooling-like motion, at an intermediate balance of attraction and alignment rather than the maximum of either. Two things make grouping pay off. One is the confusion effect: many near-identical moving targets overload a predator's ability to lock onto a single one, and the individual that gets singled out tends to be the odd one that stands out (Krakauer, 1995). The other is the geometry of coordinated escape, which you can watch break down in the wild when several predators attack together and split the school apart (Handegard et al., 2012). The cursor on this page is a crude predator, and the fish scattering from it is a rough version of what those studies measured. Go poke them.

The reason this sits close to me is that I spend my time on these same loops, in flies instead of fish. One project replicates a fly's escape response, the fast swerve away from something looming toward it. Another, at Janelia, puts a fly-like agent in a body and has it learn to move through reinforcement. Both have the same shape as one boid fleeing your cursor: something senses a threat locally and reads it straight out into an action, with no inner executive weighing options in between. (That fly work is mine, so I am describing it from experience and not citing it. The flocking papers above are about fish and models, and I do not want to borrow their authority for claims about flies.)

The line from the fish on this page to the fly on the rig is that a lot of what looks like coordination or evasion or intelligence can come out of many simple loops running at once with nobody in charge. I try not to push that into something mystical. The fish are following three rules, and that gets you most of what you see.

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
