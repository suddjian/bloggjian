---
title: "Svelte, a new paradigm?"
date: "2019-06-30T04:01:28Z"
description: "Exploring the Svelte framework and finding hope for frontend development"
---

The [Svelte](https://svelte.dev/) framework is like balm for my front-end-dev wounds.

I decided to use Svelte to build the [eventually.run](https://eventually.run) website, and it has been a joy. I feel the way I did when I was learning for the first time, dropping little HTML4.01 creations into my community college's ftp server. After just minutes of development I had built -- from scratch -- a modal and a firebase-enabled signup form, complete with failure and success messages and a submit button that goes into "loading" mode while the form is being submitted.

The Svelte compiler feels like magic. After compilation, variables aren't really just Javascript variables anymore. They're supercharged. When you change a variable that is used in your HTML, the HTML just... updates. On its own. You get the benefits of Reactive Programming, but with zero boilerplate, so the code stays clear and expressive. And so far I haven't had to write a single lifecycle method.

Svelte feels free and exciting and simple, the way the web should be. The bindings are so intuitive I didn't even look at any docs past the first few basic examples. Components are easy to understand. Logic can be read at a glance. Boilerplate is almost unheard of. State management is simple. Compiling is a breeze. I don't know if I can go back after this.
