---
title: "Noise, and the observer who moves"
tags:
  - predictive coding
  - active inference
  - Monty
  - Thousand Brains Theory
  - notes
excerpt: "Perception is a decision made under noise. You can weight your cues and lean on good priors, but the other way to deal with noise is to move. Some notes on precision, psychiatry, and what I do to Monty."
---

<!-- DRAFT (Claude-assisted, grounded in a verified-citation research pass, aimed at your voice).
     Science is hedged on purpose: "the brain is Bayesian" is a hypothesis, precision is not
     literally input noise, the psychiatry is framed as contested computational models. Keep what
     rings true and put the Monty paragraph in your own words since it's your work. Refs at the bottom. -->

We usually talk about perception like it is reading the world off a screen. Light comes in, the picture shows up. But the signal your senses deliver can be noisy: how do you know what you're perceiving is the truth? The brain still has to commit to some account of what is out there. That commitment, made under noise, is the problem I think cognition is mostly solving.

Signal detection theory describes it. When you decide whether you heard a faint sound, your performance separates into two things: how well your senses pull apart the "nothing there" case from the "something there" case, and where you set the line between them. So a "threshold" works as a decision boundary you can move, set by what you expect and by what a miss or a false alarm costs you (Green & Swets, 1966).

Under noise, you weight each piece of evidence by how reliable it is. When people judge the size of an object using sight and touch at once, the estimate they settle on matches what you get by combining the two cues in proportion to their reliability, and the combined estimate varies less than either sense alone. Add visual noise and people shift weight toward touch, in about the proportion the math predicts (Ernst & Banks, 2002). The ventriloquist effect works the same way. The dummy's mouth moves, the voice comes from the person beside it, and you hear the voice at the mouth. Vision is usually the more reliable cue for location, so it gets more weight. Blur the visual scene and the voice moves back toward its source (Alais & Burr, 2004).

One quantity runs through all of these under different names. A statistician calls it precision, the inverse of variance. An engineer calls it signal-to-noise. A neuroscientist calls it reliability. It is the same measure: how much to trust a given stream of evidence.

Predictive coding, and the free-energy accounts around it, treat the brain as predicting its own input and responding mainly to what it failed to predict. In those models precision sets how strongly a prediction error affects the estimate. Raise it on a channel and that channel's errors move the estimate more; lower it and the same errors move it less, so prior expectations carry more weight. Feldman and Friston (2010) argue that attention is largely the brain adjusting this setting. Predictive coding is widely used and also hard to falsify, so I am treating it as one way to look at this rather than as settled fact.

Lower the signal-to-noise of the input and a system like this leans on what it already expected. As the senses become less reliable, the priors weigh more. That is the knob the rest of this rests on.

Precision in these models is a learned, context-dependent estimate the system sets for itself, so adding noise to a signal is only a rough stand-in for it, and a system can mis-set its own precision even with clean input. That last case is where the idea reaches psychiatry.

What follows are computational hypotheses about mechanism, argued at the level of an inference model and at the level of groups. They say nothing about anyone's worth, ability, or character. The positive symptoms of psychosis have been described as one disturbance in how prediction errors update beliefs, rather than several separate faults (Fletcher & Frith, 2009), and formalized as aberrant precision, with sensory errors weighted too heavily or priors too little (Adams et al., 2013). In one study, people who hear voices could be conditioned to report a tone that was not playing, and the degree to which they did it tracked how heavily they weighted expectation over evidence (Powers, Mathys & Corlett, 2017). Autism has a parallel set of accounts, some describing weaker priors, others describing sensory errors held at inflexibly high precision (Pellicano & Burr, 2012; Van de Cruys et al., 2014). The field has not settled which direction, or which level of the hierarchy, the difference sits at, and behavior alone often cannot separate the competing accounts (Sterzer et al., 2018). These are open hypotheses.

Everything so far pictures the observer sitting still and receiving. A still receiver can only do so much with a noisy signal. It can weight its cues and lean on good priors, but it cannot go get more information. The other option is to move.

O'Regan and Noë (2001) described seeing as an activity, where what you experience comes from having learned how your input changes as you move. Turn your head and the scene shifts in a lawful way, and that lawfulness carries much of the content. The mechanism is old and specific. When the brain sends a motor command it keeps a copy of it, an efference copy, and uses that to predict the sensory result of its own movement, which is how it separates "the world moved" from "I moved" (von Holst & Mittelstaedt, 1950). It is why the room stays put when your eyes move across it. Forward models of this kind have psychophysical support (Wolpert, Ghahramani & Jordan, 1995). Active inference extends the idea and treats action as inference: alongside updating its beliefs to match the world, the system acts on the world so the input matches its predictions (Friston, 2010).

The experiment I keep in mind is from 1963 (Held & Hein). Two kittens get nearly the same visual input through an apparatus, but one walks and steers while the other is carried along the same path. Only the kitten producing its own movement develops normal vision; the carried one, with matched input, does not. It is a small, old study that has since been reinterpreted, so I hold it loosely. The carried kitten does not learn to see.

This connects to what I do. The Thousand Brains framework holds that the cortex learns objects by moving over them. Each cortical column pairs a sensed feature with a location on the object and builds a model from those feature-and-location pairs as the sensor moves (Hawkins et al., 2019), with roughly one algorithm repeated across the cortex, which is an older idea of Vernon Mountcastle's. Monty is the first implementation of it, a set of repeating sensorimotor modules that sense and act (Clay, Leadholm & Hawkins, 2024).

I degrade the sensory signal-to-noise in Monty and watch what happens. That is the same knob from earlier: lowering the precision of the senses on an observer that can move, and asking whether movement resolves the object anyway. The clinical accounts turn that knob and can mostly only observe. In a model I can turn it on something that moves, and check whether action recovers what the noise removed.

I do not have a clean result yet, and I am wary of how tidy this reads once it is lined up in one essay. Monty is an early prototype, the Bayesian-brain account is a hypothesis, and "add noise to the input" is a crude version of precision. The question still seems worth asking in this form: what a receiver can do about a noisy signal by moving through the world.

---

### References

- Green, D. M., & Swets, J. A. (1966). *Signal Detection Theory and Psychophysics.* Wiley. [archive.org](https://archive.org/details/signaldetectiont0000gree)
- Ernst, M. O., & Banks, M. S. (2002). Humans integrate visual and haptic information in a statistically optimal fashion. *Nature*, 415, 429–433. [pubmed](https://pubmed.ncbi.nlm.nih.gov/11807554/)
- Alais, D., & Burr, D. (2004). The ventriloquist effect results from near-optimal bimodal integration. *Current Biology*, 14(3), 257–262.
- Feldman, H., & Friston, K. J. (2010). Attention, uncertainty, and free-energy. *Frontiers in Human Neuroscience*, 4, 215. [doi](https://doi.org/10.3389/fnhum.2010.00215)
- Fletcher, P. C., & Frith, C. D. (2009). Perceiving is believing: a Bayesian approach to explaining the positive symptoms of schizophrenia. *Nature Reviews Neuroscience*, 10, 48–58.
- Adams, R. A., Stephan, K. E., Brown, H. R., Frith, C. D., & Friston, K. J. (2013). The computational anatomy of psychosis. *Frontiers in Psychiatry*, 4, 47. [doi](https://doi.org/10.3389/fpsyt.2013.00047)
- Powers, A. R., Mathys, C., & Corlett, P. R. (2017). Pavlovian conditioning–induced hallucinations result from overweighting of perceptual priors. *Science*, 357, 596–600. [doi](https://doi.org/10.1126/science.aan3458)
- Pellicano, E., & Burr, D. (2012). When the world becomes "too real": a Bayesian explanation of autistic perception. *Trends in Cognitive Sciences*, 16(10), 504–510.
- Van de Cruys, S., et al. (2014). Precise minds in uncertain worlds: predictive coding in autism. *Psychological Review*, 121(4), 649–675.
- Sterzer, P., et al. (2018). The predictive coding account of psychosis. *Biological Psychiatry*, 84(9), 634–643.
- von Holst, E., & Mittelstaedt, H. (1950). Das Reafferenzprinzip. *Naturwissenschaften*, 37, 464–476.
- Wolpert, D. M., Ghahramani, Z., & Jordan, M. I. (1995). An internal model for sensorimotor integration. *Science*, 269, 1880–1882.
- O'Regan, J. K., & Noë, A. (2001). A sensorimotor account of vision and visual consciousness. *Behavioral and Brain Sciences*, 24(5), 939–973. [doi](https://doi.org/10.1017/S0140525X01000115)
- Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11, 127–138.
- Held, R., & Hein, A. (1963). Movement-produced stimulation in the development of visually guided behavior. *J. Comparative and Physiological Psychology*, 56(5), 872–876.
- Hawkins, J., et al. (2019). A framework for intelligence and cortical function based on grid cells in the neocortex. *Frontiers in Neural Circuits*, 12, 121.
- Clay, V., Leadholm, N., & Hawkins, J. (2024). The Thousand Brains Project. arXiv:2412.18354. [arxiv](https://arxiv.org/abs/2412.18354)
