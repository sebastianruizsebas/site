---
title: "Three rules, no boss"
tags:
  - boids
  - collective behavior
  - Thousand Brains Theory
  - notes
excerpt: "The fish behind this site follow three local rules and nobody is in charge of them. Behavior with no central controller is also how I think about brains, and about the flies I work on."
---

If you move your cursor across this page, the fish scatter away from it, and once you hold still they slowly regroup.

The fish are a boids simulation, which is a model of flocking that Craig Reynolds published in 1987. Each fish follows three rules, and each rule only looks at the neighbors within a short distance of it. The first rule is separation (do not crowd the fish next to you), the second is alignment (steer roughly the way your neighbors are steering), and the third is cohesion (drift toward the average position of the neighbors you can see). There is no leader fish and nothing coordinating the group from above, and the code really only has three parts: a perception radius, a weight for each rule, and the cursor, which the fish treat as a threat.

The word for this is emergence, where simple local interactions repeated many times add up to complex group behavior. Tamás Vicsek and colleagues showed the bare version of this with particles that move at a fixed speed and take on the average heading of their neighbors, plus some noise (Vicsek et al. 1995). Once the noise drops past a certain point, the whole population starts moving together. However, a model like this only shows that a mechanism can produce flock-like behavior, which is a reason to take the mechanism seriously but not proof that real fish work this way (Sumpter 2006).

In real fish, those rules are senses wired to movement. Brian Partridge and Tony Pitcher went through them one sense at a time (Partridge and Pitcher 1980). Vision tracks where a neighbor is and which way it is pointing, while the lateral line (the row of flow sensors running down a fish's side) tracks speed and holds spacing. When the fish could not see, the school spread out, and when the lateral line was knocked out, the school packed in tighter.

Because of this, behavior can look coordinated and even smart with nothing in the middle deciding anything. Rodney Brooks built robots on that premise, using simple processes wired straight from sensing to acting with no central model of the world in between, and the robots still worked (Brooks 1991). The Thousand Brains Theory that I work with (Jeff Hawkins' account of the neocortex as thousands of cortical columns that each learn a model of the world and then vote) has no headquarters either. However, this is only an analogy, and a school of fish is not a brain.

So why would fish end up this way in the first place? Mostly because of predators. Christos Ioannou, Vishwesha Guttal, and Iain Couzin had bluegill sunfish hunt virtual prey, and the prey that got caught least often were the ones moving in a coordinated, schooling-like way (Ioannou et al. 2012). The cursor on this page is a pretty crude predator, so feel free to go poke at them.

I work on these same kinds of loops, but in flies instead of fish. In one project, through CompNeuroSociety, our team is replicating a published model of the fly escape response (the fast swerve a fly makes away from something looming toward it). In another, at the Howard Hughes Medical Institute's Janelia Research Campus, I am using reinforcement learning to teach a fly-like agent with a simulated body how to move. Both projects have the same shape as one fish fleeing your cursor, where something senses a threat nearby and turns it into an action.

The fish on this page are only following three rules, which gets you most of what you see, and I do not want to claim more than that.

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
