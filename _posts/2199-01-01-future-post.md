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
>> due to issues with modeling high-dimensional properties in the world, and the use of Gaussian distributions in modeling noise.

## Question I'm Thinking About:

How can the formula that Partha provided be extended to 4D? In his formula: