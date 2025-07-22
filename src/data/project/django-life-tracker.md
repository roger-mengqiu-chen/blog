---
title: "Django Life Tracker"
description: "Django Life Tracker is a web app that tracks my life. I can record important life events and all of my financial transactions in this app. It is a good way to practice Django and web development."
category: "project"
tags: 
    - Python
    - Django
time: "2025-02-16 13:00:00"
thumbnail: "/images/django-life-tracker/django-life-tracker.png"
---

# Idea

I like writing down everything important in my life, including where I meet people, what I spent money for etc. To make it easier, I used to use Microsoft Excel to record them. 2 months ago, Microsoft told me that they're going to raise the price of Microsoft 365, so I decided to build a web app to track my life. 

The app should have the following features:

- Record important life events
  - Events should have a type, time, location, name, notes and people
  - Events can be searched by name and filtered by type
- Record financial transactions
  - A transaction should have amount, type, merchant, and category
  - The app can generate a report for last month's transactions
  - Transactions can be imported from a csv file

# Used Tech Stack

- Django
- Chart.js
- SQLite

# Demo
Below is the screen shot of adding an event:

![demo-1](django-life-tracker/demo-1.png)

Below is the header part of transactions page. It demonstrate the pie charts of last month's expenses and incomes:

![demo-2](django-life-tracker/demo-2.png)

Below is the screen shot of importing transactions:

![demo-3](django-life-tracker/demo-3.png)

# Future work

Currently, the app is using a super long list to extract merchant. User still needs to type the category manually. It would be nice to have category detected based on the merchant. 

# Repo

The repo is [here](https://github.com/roger-mengqiu-chen/life)