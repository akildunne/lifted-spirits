# Project Overview

## Lifted Spirits

## Project Description

Lifted spirits is a mood tracking app created to help the user become more aware of their everyday triggers. Each day, the user signs into the app and records what they are feeling that day and what activities took place. The app records that information so the user can look back and find patters with mood related to activities and any other notes they log about each day. 

## API and Data Sample

```
{
    "records": [
        {
            "id": "recv9u6TwTGO7ksDt",
            "fields": {
                "Name": "Ashley",
                "Happy Mood": true
            },
            "createdTime": "2020-09-03T21:50:42.000Z"
        },
        {
            "id": "recJaBjWQMa4f0cdC",
            "fields": {
                "Name": "Jessica",
                "Angry Mood": true
            },
            "createdTime": "2020-09-03T21:50:42.000Z"
        },
        {
            "id": "recnV1ui4qdkzskmX",
            "fields": {
                "Name": "Drew",
                "Happy Mood": true
            },
            "createdTime": "2020-09-03T21:50:42.000Z"
        }
    ],
    "offset": "recnV1ui4qdkzskmX"
}

{
    "records": [
        {
            "id": "recs3BFZ6y4Y5Mi5K",
            "fields": {
                "Name": "Ashley",
                "Work": true,
                "Family Time": true,
                "Meditate": true,
                "Journal": "Today was a great day. I felt really productive but not rushed.",
                "Date Entry": "2020-09-03"
            },
            "createdTime": "2020-09-04T03:08:21.000Z"
        },
        {
            "id": "recRUbRdZgEG6HQrc",
            "fields": {
                "Name": "Jessica",
                "Family Time": true,
                "Clean": true,
                "Errands": true,
                "Journal": "Family time was really stressful today and I just felt too busy to relax. I'm going to try to take more breaks tomorrow.\n",
                "Date Entry": "2020-09-03"
            },
            "createdTime": "2020-09-04T03:08:21.000Z"
        },
        {
            "id": "rec2CSqI9AJz8ZC6T",
            "fields": {
                "Name": "Drew",
                "Work": true,
                "Exercise": true,
                "Read": true,
                "Meditate": true,
                "Journal": "Work went so well today, I got such positive reviews on my presentation!\n",
                "Date Entry": "2020-09-03"
            },
            "createdTime": "2020-09-04T03:08:21.000Z"
        }
    ],
    "offset": "rec2CSqI9AJz8ZC6T"
}

```

## Component Hierarchy

			  App.js
			/       \
		   App.css   Components
			      /  |   | \
			 Mood	 |   |	Activities
			Input Section|
				     |
				Dashboard


## Wireframes

Mobile Version - 
Mood - https://imgur.com/5EJ7KJG  Activities - https://imgur.com/sp2Kihh  Input - https://imgur.com/iEWBzcB

Ipad Version -
Mood - https://imgur.com/zxxqs18

Desktop Version -
Mood - https://imgur.com/uICdXuc


### MVP/PostMVP  

#### MVP 

- Create and use external api. 
- Create clickable buttons for user to choose mood and options.
- Render data on dashboard page. 
- Allow user to move from current page back to home.

#### PostMVP  

- Provide donut graph of moods overview and progress on dashboard.
- Add a calendar tracker so the user can look for patterns in mood throughout months and see progress.
- Use local storage to save user specific activity options.
- Update API for multi-user sign-in.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|September 4| Proposal / Wireframes / Priority Matrix / Timeframes / Project Approval | Incomplete
|September 5| Core Application Structure (React, JS, CSS, etc.) | Incomplete
|September 6| Set up API and Compile Icons | Incomplete
|September 7| Initial Clickable Model | Incomplete
|September 8| Testing / Bug Fixes / CSS  | Incomplete
|September 9| MVP | Incomplete
|September 10| Additional CSS  Styling | Incomplete
|September 11| Presentations | Incomplete

## Priority Matrix

https://imgur.com/5HdyGXu


## SWOT Analysis

- Strengths : Planning and styling are my strengths, so I already have a clear vision in mind to expedite the CSS process.
- Weaknesses : I usually struggle with getting started and knowing how to begin. My worry is that I will also lose a lot of time this weekend on working out the functionality of the app.
- Opportunities : My plan is to just get as far as I possibly can over the weekend and take time to rewatch lab videos as needed so that I can do as much on my own as possible. I’d really like to get better about being able to work more independently.
- Threats : Losing time being stuck is my biggest threat in this project so far, so I’m going to try to work out problems as best I can. 


## Timeframes

I plan to work on functionality as quickly as possible to make sure I am able to meet my MVPs early. I would like to take more time to style this app to make sure all three screen layouts are how they should be. Given that this is a mood tracker, I want the user to have their mood instantly brightened just by looking at the app.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Core Application | H | 18hrs| hrs | hrs |
| API Set-up | H | 7hrs| hrs | hrs |
| Icon and Styling CSS | H | 12hrs| hrs | hrs |
| Input Form | H | 2hrs| hrs | hrs |
| Working with API / Use State | H | 6hrs| hrs | hrs |
| Fine-tuning CSS / Flexbox | H | 8hrs| hrs | hrs |
| Total | H | 53hrs| hrs | hrs |

## Code Snippet
 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
