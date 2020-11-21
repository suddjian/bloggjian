---
title: "Building a Voting App from Scratch"
date: "2020-10-10"
description: "In which I embark on a journey to build a web-app for ranked-choice decision making, using Firebase and Vanilla JS"
tags: "programming"
series: "vote-app"
---

## Motivation: Social Indecision

At my house, we have a strange tradition of long, drawn-out indecision.
Do we want to watch an action movie? horror? drama? comedy? Which one?
After ages of deliberation, we eventually agree on something to do together.
Everyone involved acknowledges that no one really minds any of the options.
But indecision reigns, regardless. It's all very silly.

I've learned a lot about voting systems, and there's one that may be
a good option for resolving these disputes (details down the page). But it's complicated to administer:
You have to build a matrix of votes and do pairwise evaluation of each permutation of choices.
Nobody wants to do that by hand.

So in true programmer fashion, I've decided to build us an app!
I can create something useful while honing my craft, experimenting with a new tech stack, and writing about it.

## The Project

I'll be building a web app with the following features:

- Create a poll/election (I can't decide what I want to call them)
- Generate a link for the poll/election to send to others
- Everyone ranks their preferred candidates
- Calculate a winner
- Display the results to everyone
- Make it really convenient to use

There are loads more bonus features that would be interesting to add on, but these are the items I'm gonna focus on to start.
No scope creep allowed until after!

I will document this project in a detailed series of articles.
Since I'm doing this as an open-source project on GitHub, I'll be able to open a PR for each article.

## Technology Choices

I want a client-agnostic backend service.
This will allow me the most flexibility to build this app into multiple different platforms down the line:
Web, mobile, CLI, and Slack apps could all interface with the same API.
To start though, I will just be building a web app.

### Frontend Client: [Vanilla JS](http://vanilla-js.com/)

I'm planning to build the client in Javascript directly, without a build step, without a framework between me and the browser.
My hypothesis is that modern JS has advanced enough to get the job done without additional tools.
As long as you don't care too much about compatibility with legacy browsers, that is.
I'm going to use this project to test that hypothesis.

### Backend: [Firebase](https://firebase.google.com/)

I've chosen Firebase for data storage, hosting, real-time updates, authentication, and access control.
Firebase is one of the better designed "backend as a service" options out there,
but I haven't used it in-depth yet so we'll see how that goes.

Ideally I won't have to write any code for the backend, except for access rules and maybe a couple cloud functions!
And thanks to Firebase's generous free tier, this should be completely free for me to run.

The only thing I'm not thrilled about with Firebase is that it's not open source.
If Google decides to "alter the deal", I'll be stuck with their decision.

## Voting Methodologies

Before getting into engineering, I'll spend the rest of this preliminary article
discussing how exactly the voting app will tabulate votes.

The first voting method that comes to mind for most people is "First Past the Post".
Each voter chooses one candidate, and whichever candidate gets the most votes wins.
But the candidate receiving the most votes could be a candidate that everyone else really doesn't want.
There isn't a way to express "I want this, but I would also be okay with this".
This won't work for us.

Enter [Ranked Choice](https://en.wikipedia.org/wiki/Instant-runoff_voting) voting.
Each voter ranks the candidates from most preferred to least.
When tallying up ballots, you eliminate the least-preferred candidate from the pack.
You then count voters' second, third, etc. preferences instead of any eliminated candidates, until one candidate has a majority.
This method works better than FPTP but can have... unintuitive results.

Let's say we are deciding what to eat. Everyone in the group has a different first choice,
but everyone's second choice is Pizza. Pizza is the clear best choice for a winner. It will make everyone happy.
But Pizza gets eliminated in the first round since it is nobody's first choice.
Ranked Choice voting is designed for elections on a national scale, where this isn't as much of a problem.

We need something a little different. And so we come to Condorcet Voting.

[Condorcet Voting](https://en.wikipedia.org/wiki/Condorcet_method) is a method of ranked-choice election
simulating individual 1v1 elections between each pair of candidates.
There are actually many methods to determine the winner, all with slightly different properties.
It can get quite complicated, but the gist is that the candidate preferred the most overall is the winner.
A wealth of election nerditude awaits on the other side of the link above, for the daring reader.

This method is quite egalitarian and will work very well for my app.
I have selected the [Ranked Pairs](https://en.wikipedia.org/wiki/Ranked_pairs) Condorcet Method,
for various desirable properties including polynomial runtime complexity.

More on that in the next post, where I'll implement the vote counting algorithm and publish it to npm. Let's gooooo!
