---
title: "Ranked Voting App: Part 0"
date: "2020-10-06"
description: "Plotting to build a Ranked Choice Voting web app with VanillaJS and Firebase"
tags: "programming"
series: "vote-app"
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

A common alternative to First Past the Post is Ranked Choice voting.
With Ranked Choice, voters rank the candidates from most desireable to least desirable.
This system is designed to find a candidate that more than half the voters find "acceptable".
You can safely vote for your favorite candidate first, and your less-favorites second, while avoiding a spoiler effect.
Determinging the result actually involves multiple rounds.
First you tally up the votes for everyone's first choice.
Then eliminate whichever candidate got the fewest "first choice" votes.
Then do a re-count, but any time you see the candidate who has been eliminated, you count that voter's second choice instead.
Continue eliminating the least popular candidate and counting those voters' next choice until one candidate has more than half the votes.
That candidate wins!

```
TODO write ranked choice code
```

In certain scenarios, a Ranked Choice Voting outcome can still lead to non-optimal results. Let's look at an example:

It's game night and the candidates are Risk, Bang, Pictionary, Hearts, and Munchkin.
The voters are Fen, Van, Nima, Raj, Wash, and May.

The ranked voter preferences are:

Fen: Risk, Bang, Munchkin

Van: Risk, Bang, Munchkin

Nima: Munchkin, Bang

Raj: Munchkin, Bang, Pictionary

Wash: Pictionary, Bang, Risk

May: Bang, Hearts, Risk

Looking at this, I think you'll agree the clear egalitarian choice is Bang. It is everyone's first or second choice, and there is no clear consensus on first choices. But let's look at how things get counted

Round 1: Bang and Pictionary are tied for last place. How this gets resolved depends on the details of your algorithm. We'll say that Bang arbitrarily gets eliminated first.

Round 2: Recount! May's second choice of Hearts is counted this time, since Bang has been eliminated. Now Pictionary and Hearts are tied for last place. Let's say Pictionary gets eliminated this time.

Round 3: Recount again! Wash's first and second choices have both been eliminated, so now his third choice of Risk is counted. Hearts is in last place and gets eliminated. Risk now has exactly 50% of the vote, not quite enough to win.

Round 4: Last recount! This time May's third choice is counted, which again is Risk. Risk has four votes and wins the election.

The issue here is that our Ranked Choice algorithm eliminates candidates without considering how that candidate might perform after other candidates' eliminations. If May had ranked Bang second instead of first, it might have won. This is annoying! How can we fix this?

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
