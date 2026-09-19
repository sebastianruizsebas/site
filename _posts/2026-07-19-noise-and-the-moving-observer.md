---
title: "Noise, and the observer who moves"
tags:
  - predictive coding
  - active inference
  - Monty
  - Thousand Brains Theory
  - computational psychiatry
  - notes
excerpt: "Perception is a decision made under noise, and precision is the knob the brain turns to handle it. Notes on that knob, on the psychiatric accounts built from it, and on my honors thesis: making active inference testable inside Monty."
keyloop: true
---

Your senses deliver a noisy signal. The brain still has to commit to one account of what is out there, and that commitment is the problem I think cognition is mostly solving.

Under noise you weight each piece of evidence by its reliability. Add visual noise to a size judgment and people shift weight toward touch (Ernst & Banks, 2002). A statistician calls that weight precision. An engineer calls it signal-to-noise.

Predictive coding treats the brain as predicting its own input and reacting mainly to what it got wrong. Precision sets how hard a prediction error pushes the estimate. Lower it and priors carry more weight. Feldman and Friston (2010) argue that attention is mostly the brain turning this knob. The idea is hard to falsify, so I treat it as one view, not settled fact.

A system can mis-set its own precision on clean input, which is where this reaches psychiatry. These are hypotheses about mechanism. They say nothing about anyone's worth or character. Adams and colleagues (2013) describe psychosis as aberrant precision: sensory errors weighted too heavily, or priors too little. Autism has parallel accounts that disagree on direction (Pellicano & Burr, 2012). Behavior alone cannot separate them (Sterzer et al., 2018).

A still observer can weight its cues and lean on priors, but it cannot go get more information. It has to move. Active inference treats action as inference: the system updates its beliefs to match the world, and acts so the input matches its predictions (Friston, 2010).

<figure class="keyfig" id="k-fig">
<p class="k-sr">A first-person kitchen search for car keys. A gaze reticle checks the hooks, a left drawer, a right drawer, and a dish. A thought bubble holds a top-down map; before each look a red question mark marks the model's prediction of where the keys are. Empty spots are ruled out and the guess narrows until the keys turn up in the dish, then the loop repeats.</p>
<svg viewBox="0 0 680 380" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Searching a kitchen for keys, with predictions on an internal map</title>
<desc>A schematic first-person kitchen with window, cabinets, counter, two drawers, a mug, a bowl, a dish, and a hook rail. A teal gaze reticle moves between spots. A purple thought-bubble map shows shaded circles for how likely the keys are at each spot, and a red question mark for the current prediction. Ruled-out spots grey and the belief concentrates until a gold key appears in the dish.</desc>
<line x1="20" y1="300" x2="662" y2="300" stroke="var(--line)" stroke-width="0.5"/>
<rect x="252" y="44" width="176" height="76" rx="4" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="340" y1="44" x2="340" y2="120" stroke="var(--line)" stroke-width="0.5"/>
<line x1="252" y1="82" x2="428" y2="82" stroke="var(--line)" stroke-width="0.5"/>
<rect x="36" y="44" width="192" height="72" rx="6" fill="var(--cab)" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="132" y1="44" x2="132" y2="116" stroke="var(--line)" stroke-width="0.5"/>
<rect x="452" y="44" width="192" height="72" rx="6" fill="var(--cab)" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="548" y1="44" x2="548" y2="116" stroke="var(--line)" stroke-width="0.5"/>
<rect x="24" y="176" width="632" height="20" rx="3" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<rect x="24" y="196" width="632" height="104" rx="3" fill="var(--cab)" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="230" y1="196" x2="230" y2="300" stroke="var(--line)" stroke-width="0.5"/>
<line x1="452" y1="196" x2="452" y2="300" stroke="var(--line)" stroke-width="0.5"/>
<rect x="40" y="206" width="176" height="32" rx="3" fill="none" stroke="var(--line2)" stroke-width="0.5"/>
<rect x="466" y="206" width="174" height="32" rx="3" fill="none" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="112" y1="222" x2="144" y2="222" stroke="var(--fg3)" stroke-width="2" stroke-linecap="round"/>
<line x1="330" y1="222" x2="352" y2="222" stroke="var(--fg3)" stroke-width="2" stroke-linecap="round"/>
<line x1="537" y1="222" x2="569" y2="222" stroke="var(--fg3)" stroke-width="2" stroke-linecap="round"/>
<rect x="88" y="140" width="84" height="6" rx="3" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<line x1="102" y1="146" x2="102" y2="156" stroke="var(--fg3)" stroke-width="1.5" stroke-linecap="round"/>
<line x1="130" y1="146" x2="130" y2="156" stroke="var(--fg3)" stroke-width="1.5" stroke-linecap="round"/>
<line x1="158" y1="146" x2="158" y2="156" stroke="var(--fg3)" stroke-width="1.5" stroke-linecap="round"/>
<rect x="230" y="152" width="20" height="24" rx="4" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<path d="M250 158 q8 0 8 6 t-8 6" fill="none" stroke="var(--line2)" stroke-width="0.5"/>
<ellipse cx="300" cy="172" rx="32" ry="11" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<rect x="346" y="160" width="68" height="16" rx="4" fill="var(--surf)" stroke="var(--line2)" stroke-width="0.5"/>
<g id="k-povkey"><circle cx="372" cy="168" r="4" fill="none" stroke="var(--gk)" stroke-width="2"/><line x1="376" y1="168" x2="394" y2="168" stroke="var(--gk)" stroke-width="2" stroke-linecap="round"/><line x1="388" y1="168" x2="388" y2="174" stroke="var(--gk)" stroke-width="2" stroke-linecap="round"/><line x1="393" y1="168" x2="393" y2="173" stroke="var(--gk)" stroke-width="2" stroke-linecap="round"/></g>
<g id="k-ret" style="transform:translate(110px,150px)">
<g id="k-rpulse"><circle cx="0" cy="0" r="22" fill="none" stroke="var(--aa)" stroke-width="1.2"/><circle cx="0" cy="0" r="22" fill="none" stroke="var(--aa)" stroke-width="1.2"/></g>
<circle cx="0" cy="0" r="22" fill="none" stroke="var(--aa)" stroke-width="1.5"/>
<line x1="0" y1="-22" x2="0" y2="-29" stroke="var(--aa)" stroke-width="1.5"/>
<line x1="0" y1="22" x2="0" y2="29" stroke="var(--aa)" stroke-width="1.5"/>
<line x1="-22" y1="0" x2="-29" y2="0" stroke="var(--aa)" stroke-width="1.5"/>
<line x1="22" y1="0" x2="29" y2="0" stroke="var(--aa)" stroke-width="1.5"/>
<circle cx="0" cy="0" r="1.6" fill="var(--aa)"/>
<g id="k-rx"><line x1="-6" y1="-6" x2="6" y2="6" stroke="var(--fg2)" stroke-width="1.6" stroke-linecap="round"/><line x1="6" y1="-6" x2="-6" y2="6" stroke="var(--fg2)" stroke-width="1.6" stroke-linecap="round"/></g>
</g>
<g id="k-bubble">
<rect x="424" y="20" width="234" height="172" rx="16" fill="var(--card)" stroke="var(--pp)" stroke-width="1"/>
<text x="541" y="42" text-anchor="middle" font-size="12" font-weight="500" fill="var(--pt)">where are the keys?</text>
<rect x="440" y="50" width="202" height="118" rx="4" fill="none" stroke="var(--pp)" stroke-width="0.8"/>
<rect x="440" y="50" width="202" height="10" fill="var(--surf)"/>
<rect x="440" y="50" width="12" height="118" fill="var(--surf)"/>
<circle id="k-mhi" cx="470" cy="72" r="14" fill="none" stroke="var(--pp)" stroke-width="1.5" stroke-dasharray="5 4"/>
<circle class="belief" data-s="hooks" cx="470" cy="72" r="8" fill="var(--pp)" stroke="var(--pp)" stroke-width="0.5" fill-opacity="0.5"/>
<circle class="belief" data-s="ldrawer" cx="486" cy="130" r="7" fill="var(--pp)" stroke="var(--pp)" stroke-width="0.5" fill-opacity="0.43"/>
<circle class="belief" data-s="rdrawer" cx="596" cy="130" r="7" fill="var(--pp)" stroke="var(--pp)" stroke-width="0.5" fill-opacity="0.4"/>
<circle class="belief" data-s="dish" cx="612" cy="72" r="6" fill="var(--pp)" stroke="var(--pp)" stroke-width="0.5" fill-opacity="0.35"/>
<g id="k-mapkey"><circle cx="606" cy="72" r="3" fill="none" stroke="var(--gk)" stroke-width="1.6"/><line x1="609" y1="72" x2="621" y2="72" stroke="var(--gk)" stroke-width="1.6" stroke-linecap="round"/><line x1="617" y1="72" x2="617" y2="76" stroke="var(--gk)" stroke-width="1.6" stroke-linecap="round"/></g>
<text id="k-qmark" x="470" y="72" text-anchor="middle" dominant-baseline="central" font-size="15" font-weight="500" fill="var(--qc)">?</text>
<text x="470" y="92" text-anchor="middle" font-size="11" fill="var(--fg2)">hooks</text>
<text x="486" y="150" text-anchor="middle" font-size="11" fill="var(--fg2)">left drawer</text>
<text x="596" y="150" text-anchor="middle" font-size="11" fill="var(--fg2)">right drawer</text>
<text x="612" y="94" text-anchor="middle" font-size="11" fill="var(--fg2)">dish</text>
</g>
</svg>
<div class="controls">
<button id="k-pp" class="ctl" aria-label="Play or pause"></button>
<button id="k-stepb" class="ctl">Step <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12 H17 M12 7 L17 12 L12 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
<div class="chips">
<span class="chip" data-ph="sense">sense</span>
<span class="chip" data-ph="interpret">interpret</span>
<span class="chip" data-ph="act">act</span>
</div>
</div>
<div id="k-phlabel">Looking</div>
<div id="k-phdesc">the model bets on the hooks, go look</div>
<figcaption>The same sense, interpret, act loop, shown as a kitchen search for car keys. Before each look the internal model posts a prediction (the red '?') of where the keys are, and checking an empty spot rules it out so the belief concentrates until it lands on the dish. Teal is looking and moving; purple is the mental map.</figcaption>
</figure>

Monty is where I test that. It implements the Thousand Brains framework: the cortex learns objects by moving over them (Clay, Leadholm & Hawkins, 2024). To recognize one it keeps an "evidence" score per guess, updated as the sensor moves. That score is a heuristic and never becomes a probability. On clearly different objects it takes around 28 touches. With noise on similar objects, closer to 170.

My honors thesis makes one change. Monty's matching tolerance, how close a sensed feature must be to count as a match, is a fixed number the author chose. I treat it as precision and let the system estimate it from experience. That turns the stored model into a real probability distribution, and belief, precision, and free energy become numbers I can check and break.

Then I can miscalibrate precision on purpose. Push trust too far toward the prediction and the loop stops learning. An empty spot rules nothing out, and the guess returns to where it expected the keys.

Monty recognizes objects. It is not a model of hallucination or delusion, and I have no clean result yet. But it has potential to model psychiatric conditions, bridging that gap is the work I want to do.

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
