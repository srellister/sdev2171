# Lesson 13 Take-Home Exercise

## Title
Request States Review

## Purpose
This exercise reinforces lesson 13 by asking you to explain how your screen represents loading, success, and error states while using the local lesson backend.

## Which screen to write about
Write about the lesson-13 detail screen you used during class.

Use:
- your own lesson-13 request-state screen, or
- the instructor-guided reference path if your own project was not ready

Do not invent a different backend screen for this exercise.

## Before You Start
Use these lesson-13 reference files:
- [loading-error-build-checklist.md](loading-error-build-checklist.md)
- [local-backend-reference.md](local-backend-reference.md)
- [request-states-reference.md](request-states-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-13 terms:
- **loading state**: what the user sees while the request is still running
- **success state**: what the user sees when the request works
- **error state**: what the user sees when the request fails
- **retry**: starting the request again after a failure

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, logs, code comparisons, or repairs were your own work
- include one sentence naming the next step for getting your own project ready for lesson 14

## Tasks
### Part 1: Request Lifecycle
Write 4 to 6 sentences explaining:
- what the user sees while the local backend request is loading
- what the user sees when the request succeeds
- what the user sees when the request fails
- why showing those states is better than leaving the screen blank

### Part 2: State And Logic
Describe one request-state flow from your screen.

Include:
- which state value controls loading
- which state value stores the failure message
- what makes the loading state stop

### Part 3: Error And Recovery
Explain one failure and recovery flow.

Include:
- how you triggered or tested the error path
- what the user-visible error branch showed
- what the retry action did

### Part 4: Local Backend Reflection
Explain one reason the local backend was useful in this lesson instead of depending on an external demo API.

### Part 5: Screenshot Evidence
Include one screenshot of:
- the loading state, or
- the error state, or
- the recovered success list after retry

Label or caption:
- the visible request state
- one clue you used during testing

## Success Criteria
Strong submissions will:
- use loading state, success state, error state, and retry terms accurately at a beginner level
- explain one clear request-state lifecycle from start to recovery
- connect the stored state values to the visible UI branches
- explain one useful reason for the local backend path
- include one required screenshot with a short label or caption
