---
title: 'Future Blog Post'
date: 2199-01-01
permalink: /posts/2026-02-26/
tags:
  - Monty
  - Thousand Brains Theory
  - Active Inference
  - Predictive Coding
---

# Reducing Monty's Dimensions

Partha recently sent a very well thought out proposal for Monty-HAPTIC

In his proposal, he mentions using two LMs in a one dimensional space. The current Monty framework utilizes a 3D space, but I can definitely understand from the complexity of the 1D space that extending it to 3D would be quite difficult.

Maybe we can start with 1D and work to extend it to 3D. I am trying to connect the 1D of height to Monty's 3D structure. In Monty, I think it may even be considered 4D (features, 3D poses: (x,y,z))

From the [Monty FAQ page](https://thousandbrainsproject.readme.io/docs/faq-monty):

> Active inference and the Free Energy Principle are frameworks for understanding brains as systems designed to reduce "surprise". The importance of reducing surprise, either through sampling the environment to improve learned models, or acting based on learned models to reduce uncertainty, are entirely compatible with the Thousand Brains Theory, as well as how we are implementing Monty. However, concrete mathematical implementations of active inference typically struggle to operate in real-world settings, 
>> **due to issues with modeling high-dimensional properties in the world, and the use of Gaussian distributions in modeling noise.**

## Questions I'm Thinking About:

How can the formula that Partha provided be extended to 4D? In his formulation, what interested me was that he mentioned height of tactile stimulus, which could translate to the SM's sensed depth in Monty. When running the updated tutorial, an image of sensed depth appears. Maybe we could do some analyses with each sensed depth images and connect it to active inference this way. 

  - So I checked and if we want to do analyses with the sensed depth images, we should change the default logging handlers to use Detailed_StatsJSON, because it saves each observation, according to the docs:
  > The detailed JSON logs save very detailed information for every step and episode. This includes for example the pixel observations at every step.

### Potential Connection to Agency

Maybe we can invoke random changes in the agent's position to test 'sensory attenuation' 

### I am also wondering

How can we connect active inference to models that Monty generates? From my understanding of Monty, it compares prior learned models of objects to infer what it's sensing. For active inference, we might have to represent these prior learned models with a specific quantity/probability between 0 and 1 as I learned from the active inference workbook.

Maybe we could train the model on some objects and then take away one or more of those objects during eval to represent a biased probability flip. In this way maybe we could calculate (before running) the prior belief of the probability of sensing any given object, then see how this belief updates in the posterior.

### What constitutes a sequential update in Monty compared to active inference?

In Monty's documentation, they state that the agent performs matching steps where it performs inference (inferring what it is currently sensing against prior learned models) until it reaches a threshold of confidence or max matching steps (as defined in configs). After performing matching steps, the agent just explores the object to continue building this graph but it no longer performs inference. I think this means that after a certain amount of matching steps, even if the agent is unsure or completely wrong about it's guess about what it's observing, it will update the model based on observations from exploration steps. This means that if it has a wrong guess, the final learned model (when visualized) may be different from any of the actual possible models it was evaluated on.