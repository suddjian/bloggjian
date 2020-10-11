---
title: "Building a Ranked Voting App from Scratch"
date: "2020-10-06"
description: "Building a web-app to run fair elections between friends, using Firebase and Vanilla JS"
tags: "programming"
series: "vote-app"
---

## Motivation: Social Indecision

At my house, we have a strange tradition of indecision.
Come game night, movie night, or any other group activity, we will sit and browse and debate the options for what feels like ages.
Do we want to watch an action movie, horror, drama, comedy? Which one?
Everyone knows that no one really minds any of the options. But indecision reigns, regardless.
Eventually, after much deliberation, we finally agree on something to do together.
It's all very silly.

Sometimes we consider putting it up to a vote, but that always feels overly beuraucratic.
There are so many options that even if we did, the vote would likely be split.
But I've learned a lot about alternative voting systems, and I think one of them may be
a good option for resolving these disputes.

So I've decided to build a web app for us!
I can create something useful while honing my craft, experimenting with a new app stack, and writing about it.

## Voting Methodologies

The first voting method that comes to mind for most people is "First Past the Post".
Each voter chooses one candidate, and whichever candidate gets the most votes wins.
But the candidate receiving the most votes could be a candidate that everyone else really doesn't want.
There isn't a way to express "I want this, but I would also be okay with this".

Enter [Ranked Choice](https://en.wikipedia.org/wiki/Instant-runoff_voting) voting.
Each voter ranks the candidates from most preferred to least.
When counting, you iteratively eliminate the least-preferred candidate from the pack;
You then take voters' second, third, etc. preferences into account until one candidate has a majority.
This method can have... unintuitive results.
Let's say we are deciding what to eat. Everyone in the group has a different first choice,
but everyone's second choice is Pizza. Pizza is the clear best choice for a winner.
But Pizza will get eliminated in the first round since it's nobody's first choice.
Ranked Choice voting is designed for elections on a national scale, where this isn't as much of a problem.

And so we come to Condorcet Voting.

A [Condorcet Method](https://en.wikipedia.org/wiki/Condorcet_method) is a ranked-choice election
designed to find an egalitarian "most-preferred" candidate.
This is done by taking all voters' ranked preferences, and simulating 1v1 elections between each pair of candidates.
There are actually many methods to determine the winner, all with slightly different properties.
It can get quite complicated, but the gist is that the candidate preferred the most overall is the winner.
This will work very well for my app.
A wealth of election nerditude awaits on the other side of the link above, for the daring reader.

I have selected the [Ranked Pairs](https://en.wikipedia.org/wiki/Ranked_pairs) method,
for its polynomial runtime complexity and various other desirable properties.

A Condorcet algorithm will allow the app to be as fair as possible to everyone when counting the ranked votes.

## The Project

I'll be building a webapp with the following features:

- Create a poll/election (I can't decide what I want to call them)
- Generate a link for the poll/election to send to others
- Everyone ranks their preferred candidates
- Calculate a Condorcet Winner (using Ranked Pairs)
- Display the results to everyone
- Make sure it is really convenient to use

There are loads more bonuses that I think would be interesting to add on, but those items are what I'm gonna focus on to start.
No scope creep allowed until after!

I want to build the frontend as a client application, interfacing with a client-agnostic backend service.
This will allow me the most flexibility to build this app into multiple different platforms down the line:
Web, mobile, CLI, Slack, and Discord apps can all interface with the same API.
To start though, I will just be building a webapp.

I will use modern JS and browser APIs directly, without a build process, without libraries in-between.
The idea is to simply write the code that gets delivered to the browser.
Modern browser standards are so well supported now, my hypothesis is that you don't actually need additional tools to get the job done.
I'm going to use this project to test that idea.

I'm going to use Firebase for data storage, real-time updates, authentication, and access control.
Firebase is one of the better designed "backend as a service" options out there,
but I haven't yet used it in-depth yet so we'll see how that goes.
Ideally I won't have to code any backend services, except for maybe a couple cloud functions!
I'd also be interested in open-source, self-hosted options that serve the same role as Firebase, but I haven't found any yet.

I will document the process via a series of posts, published here.
In the next post we'll be implementing the vote counting library. Let's gooooo!
