# Lesson 16 Take-Home Exercise

## Title
Context Shared State Review

## Purpose
This exercise reinforces lesson 16 by asking you to explain how Context solved the lesson-15 mismatch and how shared state now flows across screens.

## Which App Flow To Write About
Write about the lesson-16 Context refactor you used during class.

Use:
- your own lesson-16 Context app, or
- the instructor-guided reference path if your own project was not ready

Do not invent a different Context example for this exercise.

## Before You Start
Use these lesson-16 reference files:
- [context-build-checklist.md](context-build-checklist.md)
- [provider-placement-reference.md](provider-placement-reference.md)
- [context-flow-reference.md](context-flow-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-16 terms:
- **Context**: a React tool for sharing one value across multiple components or screens
- **provider**: the component that supplies the shared value
- **consumer**: a screen or component that reads or updates the shared value
- **shared source of truth**: one value used by more than one place instead of separate copies

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, comparisons, or code notes were your own work
- include one sentence naming the next step for getting your own project ready for lesson 17

## Tasks
### Part 1: Provider Placement
Write 3 to 5 sentences explaining:
- where the provider lives in this lesson
- why it must wrap both screens
- what would break if it were placed too low

### Part 2: Shared Feature Flow
Write 4 to 6 sentences explaining:
- which value moved into shared state
- which screens consume that value
- what visible clue proves the screens now stay synchronized

### Part 3: One Value That Stayed Local
Describe one value that should still stay local in this lesson.

Include:
- which screen owns it
- why it does not need to become shared

### Part 4: Lesson-15 Problem Solved
Explain how lesson 16 fixed the lesson-15 copied-parameter mismatch.

Include:
- what the old copied pattern was
- what the new shared pattern is
- why the new pattern is more reliable

### Part 5: Screenshot Evidence
Include one screenshot of:
- the details screen showing the shared selection count, or
- the plan screen after one removal, or
- both counts matching after the update

Label or caption:
- the screen shown
- the shared-state clue you used

## Success Criteria
Strong submissions will:
- use Context, provider, consumer, and shared source of truth terms accurately at a beginner level
- explain where the provider belongs and why
- explain one real cross-screen synchronization clue clearly
- distinguish one shared feature from one local-only value
- include one required screenshot with a short label or caption
