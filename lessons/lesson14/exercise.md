# Lesson 14 Exercise Set

Use this exercise set during the lesson work period. Complete the required tasks in order unless your instructor directs you to repair a blocked foundation first.

## Before You Start
Use these lesson-14 files first:
- [work-session-checklist.md](work-session-checklist.md)
- [worked-example.md](worked-example.md)
- [success-criteria.md](success-criteria.md)
- [progress-tracker.md](progress-tracker.md)

Use [recovery-paths.md](recovery-paths.md) if your request-state workflow is still partial or blocked.

## Assessment Rule For Today
- if you are on the `verify` path, the goal is to complete all three required tasks
- if you are on the `repair` path, the goal is to restore one blocked area first, then return to the required tasks if time allows
- a documented repair path is acceptable as incomplete progress, but it is not the same as a fully complete robust screen

## Required Task 1: Baseline And Backend Verification
Confirm that your screen is still using the assigned lesson flow.

Your verification must include:
- the local backend is running from the lesson-14 `example/backend` folder
- the request still targets the `study-steps` endpoint
- the returned data shape is still `{ id, label }`
- you can identify what starts the request

Default file anchors:
- `src/app/details.js`
- `src/lib/apiBaseUrl.js`
- `example/backend/server.js`

Evidence of completion:
- you can name the exact endpoint your screen calls
- you can explain what triggers the request

## Required Task 2: Request-State Testing
Test each visible request branch on purpose.

Your testing must include:
- one delayed request that makes the loading state visible
- one successful request that renders the returned list
- one simulated failure that shows the error branch
- one retry action that returns the screen to success

Helpful reminder:
- the local backend supports `?delay=...`
- the local backend supports `?error=1`

Preferred method:
- if your screen already has the lesson-13 style helper, keep using `loadRemoteSteps()` for the normal path
- keep using `loadRemoteSteps({ simulateError: true })` for the failure path
- use the existing retry action to recover
- only change the endpoint string directly if your instructor tells you to inspect that exact problem

Evidence of completion:
- you have seen all three request states on screen
- you can explain which action or URL condition produced each state

## Required Task 3: Repair Or Explain One Weak Spot
Choose one weak spot from your own project and make it clearer or more stable.

Choose one:
- fix a request trigger issue
- fix a loading-state issue
- fix an error-message or retry issue
- fix a route or base-URL issue
- if no fix was needed, write a short explanation of the most important thing you confirmed instead

Evidence of completion:
- one real improvement or one precise explanation is recorded
- you can point to the file or logic area involved

## Optional Challenge
Only start this task if all three required tasks are already stable.

Choose one:
- improve the empty-state wording
- improve the loading-state wording so it is more helpful
- improve the error-state wording so the retry action is clearer
- add one short testing note to your own project comments or class notes

Evidence of completion:
- the screen or notes are easier to understand than before
- you can explain why the change improved the flow

## End-Of-Class Checkpoint
Before class ends, be ready to show:
- if you are on the `verify` path:
- your current working request-state screen
- if you are on the `repair` path:
- the repaired area or one clearly documented blocker and one next action

Also be ready to answer:
- which request state you verified first
- which part of the workflow still needed the most attention, if any
