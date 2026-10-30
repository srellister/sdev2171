# Lesson 12 Take-Home Exercise

## Title
Remote Data Fetch Review

## Purpose
This exercise reinforces lesson 12 by asking you to explain one API request flow you built, the trigger you used, the response data you stored, and the result of your test or retest.

## Which screen to write about
Write about the lesson-12 detail screen you used during class.

Use:
- your own lesson-12 fetch screen, or
- the instructor-guided reference path if your own project was not ready

Do not invent a different API screen for this exercise.

## Before You Start
Use these lesson-12 reference files:
- [remote-data-build-checklist.md](remote-data-build-checklist.md)
- [api-fetch-reference.md](api-fetch-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-12 terms:
- **API**: a service that gives data to your app
- **trigger**: the reason the request runs
- **response**: the returned data
- **JSON**: the text-based data format returned by many APIs

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, logs, code comparisons, or repairs were your own work
- include one sentence naming the next step for getting your own project ready for lesson 13

## Tasks
### Part 1: Request Description
Write 3 to 5 sentences explaining:
- which endpoint your screen requested
- when the request ran
- what kind of data the screen expected back
- why the app needed that API data instead of relying only on local hard-coded values

### Part 2: Response And State
Describe one response-handling flow from your screen.

Include:
- one clue that showed what the response data looked like
- how you turned the returned data into the list item shape your screen needed
- which state value stored the fetched items

### Part 3: Trigger Reasoning
Explain why your request trigger was safe for this lesson.

Include:
- where the trigger lived
- why it did not run after every render
- one way a repeated-request loop could happen if the trigger were not controlled

### Part 4: Debugging Or Recovery Reflection
Explain one troubleshooting step you used or would use if the request or rendered list did not work.

### Part 5: Screenshot Evidence
Include one screenshot of:
- the fetched list screen, or
- one logged response clue and the related screen result

Label or caption:
- the part of the screen showing the remote data
- one clue you used during debugging

## Success Criteria
Strong submissions will:
- use API, trigger, response, and JSON terms accurately at a beginner level
- explain one clear request flow from trigger to rendered data
- connect one real clue to the stored state or rendered output
- explain one repeated-request risk in plain language
- include one required screenshot with a short label or caption
