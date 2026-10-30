# Lesson 15 Take-Home Exercise

## Title
Local State Versus Shared State Review

## Purpose
This exercise reinforces lesson 15 by asking you to explain when screen-level state is still correct and when one shared source of truth is needed across screens.

## Which App Flow To Write About
Write about the lesson-15 multi-screen state-sharing example you used during class.

Use:
- your own lesson-15 analysis app, or
- the instructor-guided reference path if your own project was not ready

Do not invent a different state-management example for this exercise.

## Before You Start
Use these lesson-15 reference files:
- [state-sharing-analysis-checklist.md](state-sharing-analysis-checklist.md)
- [navigation-parameter-limitations.md](navigation-parameter-limitations.md)
- [scenario-map.md](scenario-map.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-15 terms:
- **local state**: data that belongs to one screen or component
- **duplicated state**: the same changing data stored in more than one place
- **shared state**: one source of truth used in more than one place
- **navigation parameter copy**: a value sent to another screen as a snapshot, not as live shared state

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, comparisons, or code notes were your own work
- include one sentence naming the next step for getting your own project ready for lesson 16

## Tasks
### Part 1: One Value That Can Stay Local
Write 3 to 5 sentences explaining:
- one value from this lesson that can stay local
- which screen owns it
- why another screen does not need to stay synchronized with it

### Part 2: One Value That Should Become Shared
Write 4 to 6 sentences explaining:
- one value from this lesson that should become shared
- which screens care about it
- what goes wrong when each screen keeps its own copy

### Part 3: Navigation Parameter Limitation
Describe one limitation of using navigation parameters for changing shared data.

Include:
- what the second screen received
- what changed after navigation
- why the first screen did not update automatically

### Part 4: Next Lesson Prediction
Explain why a shared-state solution is the right next step after this lesson.

Include:
- what problem the next shared-state lesson is expected to solve
- what kind of state should still stay local

### Part 5: Screenshot Evidence
Include one screenshot of:
- the details screen selection count, or
- the copied plan screen after one item was removed

Label or caption:
- the screen shown
- the mismatch clue or state-location clue you used

## Success Criteria
Strong submissions will:
- use local state, duplicated state, shared state, and navigation parameter copy terms accurately at a beginner level
- explain one real cross-screen mismatch clearly
- distinguish one local-only value from one shared-later value
- connect the mismatch to the need for one future shared source of truth
- include one required screenshot with a short label or caption
