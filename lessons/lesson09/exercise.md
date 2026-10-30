# Lesson 09 Take-Home Exercise

## Title
State And Props Review

## Purpose
This exercise reinforces lesson 09 by asking you to explain which values your screen owns as state and which values your child component receives as props.

## Before You Start
Use these lesson-09 reference files:
- [state-props-build-checklist.md](state-props-build-checklist.md)
- [state-props-reference.md](state-props-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-09 terms:
- **state**: data a component owns and can update
- **props**: data passed from a parent component into a child component
- **parent component**: the component that owns the current values
- **child component**: the component that receives values and renders them

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, code comparisons, or repairs were your own work
- include one sentence naming the next step for getting your own project ready for lesson 10

## Tasks
### Part 1: State Versus Props
Write 4 to 6 sentences explaining:
- which values on your detail screen count as state
- which values your child component received as props
- why those two categories are not the same thing

### Part 2: Parent-Child Flow
Describe one parent-child flow from your screen.

Include:
- what action the user took
- which parent state changed
- which prop value the child received next
- what changed on screen

### Part 3: Debugging Reflection
Choose one issue from [troubleshooting-checklist.md](troubleshooting-checklist.md).

Explain:
- the likely cause
- one small fix you would try first
- what result would show that the fix worked

### Part 4: Screenshot Evidence
Include one screenshot of your state-and-props screen.

Label or caption:
- the input or button area that belongs to the parent component flow
- the preview card area that shows the child component output
- the visible UI area that changed after the update

Important clarification:
- the parent-owned state value and the child-received prop value may show the same final text on screen
- if that happens, label the parent-side control area on the screenshot and explain in one caption line that the preview card is showing the same value after it was passed down as a prop

## Success Criteria
Strong submissions will:
- use state and props terms accurately at a beginner level
- clearly distinguish parent-owned values from child-received values
- describe one UI update as a step-by-step flow
- explain troubleshooting as a small-step process
- include one required screenshot of the screen
- label the state area and child output area using one of these two acceptable formats
- option A: short text callouts on the image
- option B: short caption lines directly below the image
