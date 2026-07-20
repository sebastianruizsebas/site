---
title: "Noise, and the observer who moves"
tags:
  - predictive coding
  - active inference
  - Monty
  - Thousand Brains Theory
  - computational psychiatry
  - notes
excerpt: "Perception is a decision made under noise, and precision is the knob the brain turns to deal with it. Notes on that knob, on reading some psychiatric differences through it, and on my honors thesis: making active inference testable by computing it inside Monty."
---

<!-- DRAFT (Claude-assisted). The front half (noise -> precision -> psychiatry -> embodiment)
     is unchanged; the back half now folds in your honors-thesis plan (making active inference
     falsifiable in Monty) and the fit-to-data / computational-psychiatry direction from your
     personal statement. I kept the personal medical detail OUT of the public text; an optional,
     compact version is flagged inline below. Put the Monty specifics in your own words. -->

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

This connects to what I do. The Thousand Brains framework holds that the cortex learns objects by moving over them. Each cortical column pairs a sensed feature with a location on the object and builds a model from those feature-and-location pairs as the sensor moves (Hawkins et al., 2019), with roughly one algorithm repeated across the cortex, an older idea of Vernon Mountcastle's. Monty is the first implementation of it, a set of repeating sensorimotor modules that sense and act (Clay, Leadholm & Hawkins, 2024). To recognize an object it keeps a running "evidence" score for each guess and updates it as the sensor moves. That score is a heuristic and is never normalized into a probability. On clearly different objects it works fast, around 28 touches; on similar objects with sensor noise it can take closer to 170. That slowdown is the weak spot I care about, and noise is the lever.

My honors thesis uses that setup to take a shot at active inference. Active inference is one of the broad normative accounts of the brain: perception and action both fall out of one principle, reducing surprise. It is influential and also criticized as hard to test, because stated loosely it can seem to explain almost any behavior after the fact. The thesis takes that criticism at face value. Monty is already most of the way to an active-inference agent, and the missing piece is naming one probability, the likelihood, which is really just its stored 3D model read as "if this guess is right, what should I expect to sense here?" Once that is named, belief, precision, and free energy stop being metaphors and become numbers I can compute, and once they are numbers the predictions can be checked and possibly broken. I set it up so a negative result is still useful: either the active-inference reading of Monty earns some real support, or I map where it breaks on a concrete system.

The one change under all of this is small. Monty's matching tolerance, how close a sensed feature has to be to count as a match, is a fixed number the author chose. I treat it as precision and let the system estimate it from its own experience. That single move turns the stored model into a real probability distribution and shifts Monty a measurable step, from a hand-built heuristic toward something fit to data. I like it as a way to work: rather than argue about whether brain models should be normative, mechanistic, or fit to recordings, I take one transparent heuristic system and measure how far it sits from the ideal.

This is where the psychiatry from earlier comes back. Precision is the knob computational psychiatry reaches for first, especially in the precision-based account of psychosis (Adams et al., 2013), and the field works in two styles: fitting models to clinical data, and building a mechanism and asking what breakage reproduces a symptom (Huys, Maia & Frank, 2016). My work is the second kind. In a model this transparent I can miscalibrate precision on purpose, over- or under-trusting the senses, and watch whether behavior degrades in the direction the theory predicts. I want to be careful about scope. Monty recognizes objects and is not a model of hallucination, delusion, or the sense of agency, which is where those accounts actually live. The most a positive result shows is that the precision mechanism moves with the sign the theory predicts, in a system where I can trace every step from the miscalibration to the behavior.

<!-- OPTIONAL personal thread (from your personal statement, omitted here for privacy):
     you could ground the "why" below in navigating care for a neurological condition, and
     how a precise, mechanistic account of a disorder can change a person's life. Add only
     if you want that public. -->

The longer direction is to push models like this toward the data-constrained end, close enough to real measurements to say something true about mental illness: fit the parameters, perturb them, and read them out at both the neural and behavioral level. That end already exists in pieces, like connectome-constrained models of the fly visual system (Lappalainen et al., 2024), or patient-specific "digital twin" brain models used to plan epilepsy treatment (Jirsa et al., 2017). Monty is nowhere near either, and turning one hand-set number into an estimated one is only the first rung. I care about the direction because most psychiatric diagnosis still leans on description more than on computation, and closing that gap is the work I want to do.

I do not have a clean result yet, and I am wary of how tidy this reads once it is lined up in one essay. Monty is an early prototype, the Bayesian-brain account is a hypothesis, and "add noise to the input" is a crude stand-in for precision. The reason I keep at it is that the same knob keeps showing up, in cue integration, in attention, in the clinical accounts, and finally in one system I can take apart and move. What a receiver can do about a noisy signal by moving through the world is a question I can now actually run.

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
- Huys, Q. J. M., Maia, T. V., & Frank, M. J. (2016). Computational psychiatry as a bridge from neuroscience to clinical applications. *Nature Neuroscience*, 19(3), 404–413.
- Lappalainen, J. K., et al. (2024). Connectome-constrained networks predict neural activity across the fly visual system. *Nature*, 634. [doi](https://doi.org/10.1038/s41586-024-07939-3)
- Jirsa, V. K., et al. (2017). The Virtual Epileptic Patient: individualized whole-brain models of epilepsy spread. *NeuroImage*, 145, 377–388. [doi](https://doi.org/10.1016/j.neuroimage.2016.04.049)
