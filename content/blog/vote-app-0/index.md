---
title: "Ranked Voting App: Part 0"
date: "2020-10-06T21:30:00.000Z"
description: "Plotting to build a Ranked Choice Voting web app with VanillaJS and Firebase"
tags: "vote-app, programming"
---

## Indecision and Voting

At my house, we have a strange tradition of indecision.
We will debate the merits of five movies, games, or dinner choices for half an hour or more.
Everyone knows that no one really minds any of the options. But we stress about it anyway.
Putting it up to a vote feels overly stressful: none of us want to force anyone else into something they don't want.
So eventually, we cautiously agree on something to do together. 
It's all very silly, but it's what we do.

One day we realized - wait, there are many different voting methods!
Maybe one of them will be a good option for resolving these disputes. I did some investigating...

Oh by the way, if you already know all about all kinds of voting methods? Skip to [The Project](#the-project).

The simplest voting method is the first one most think of: "First Past the Post".
Everyone votes for one candidate, and whichever candidate gets the most votes wins.
This method is very easy to do, but produces some social stress from not wanting to choose something someone in the group doesn't want.

The next up option, so to speak, is Ranked Choice voting.
With Ranked Choice, voters rank the candidates from most desireable to least desirable.
Determinging the result actually involves multiple rounds.
First you tally up the votes for everyone's first choice. Then eliminate whichever candidate got the fewest "first choice" votes.
Then do a re-count, but any time you see the candidate who has been eliminated, you count that voter's second choice instead.
Continue eliminating the least popular candidate and counting those voters' next choice until one candidate has more than half the votes.
That candidate wins!

Ranked Choice voting is much fairer - it considers people's second, third etc. options -
but it is not very convenient for a casual vote. Let's write some code and make it easier:

```
TODO write ranked choice code
```

In certain scenarios, a Ranked Choice Voting outcome can still feel unfair. Let's look at an example:

It's game night and the candidates are Risk, Bang, Pictionary, and Munchkin.
The voters are Fen, Van, Nima, Raj, and May.

The ballots are:
Fen: Risk, Bang, Munchkin
Van: Risk, Bang, Munchkin
Nima: Munchkin, Bang, Risk
Raj: Munchkin, Bang, Pictionary
May: Bang, Pictionary, Risk

In this example, Bang is everyone's first or second choice. It's clearly the best option. But Bang gets eliminated in the first round.
The win goes to Pizza, even though it clearly is not as preferred by the whole group as salad.

There are many other voting strategies. This video explains various voting methods in quite a bit more detail.
There's a whole fascinating field of voting methods out there to nerd out with!

## The Project

I'll be building a webapp with the following features:

 - Create a poll/election (I can't decide what I want to call them)
 - Send a url for the poll/election to others
 - Everyone ranks their preferred candidates
 - Display the results to everyone
 - Make sure it is really convenient to use

There are loads more bonuses that I think would be interesting to add on, but those items are what I'm gonna focus on to start.
No scope creep allowed until after!

## Plans

I want the frontend to behave as a client application, interfacing with a client-agnostic backend service.
This will allow me the most flexibility to build this app into multiple different platforms down the line:
Web, mobile, CLI, Slack, and Discord apps can all interface with the same API.
To start though, I will just be building a webapp.

I will use modern ECMAScript and browser APIs directly, without a build process, without libraries in-between.
The idea is to simply write the code that gets delivered to the browser.
Modern browser standards are so well supported now, and my hypothesis is that you don't actually need additional tools to get the job done.
I'm going to use this project to test that idea.

I'm going to use Firebase for data storage, real-time updates, authentication, and access control.
Firebase is one of the better designed "backend as a service" options out there,
but I haven't yet used it in-depth yet so we'll see how that goes.
I'd also be interested in open-source, self-hosted options that serve the same role as Firebase.

I will document the process via a series of posts, published here. This will be fun!
