# Lesson 10 Take-Home Exercise

## Title
Dynamic List Review

## Purpose
This exercise reinforces lesson 10 by asking you to explain how your screen stores repeated items in an array, renders those items into UI, and switches to an empty-state message when needed.

## Before You Start
Use these lesson-10 reference files:
- [list-build-checklist.md](list-build-checklist.md)
- [list-rendering-reference.md](list-rendering-reference.md)
- [starter-snippets.md](starter-snippets.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

Helpful lesson-10 terms:
- **array**: data that stores multiple items
- **render**: show UI from data
- **renderItem**: the function that explains one list row in `FlatList`
- **empty state**: the message shown when a list has no items

## Submission Format
Submit a short Markdown or PDF response. Aim for 1 to 2 pages total plus one screenshot.

If you used the instructor-guided reference path because your own project was not ready:
- you may still complete this exercise
- clearly state that you used the reference path
- identify which observations, code comparisons, or repairs were your own work
- include one sentence naming the next step for getting your own project ready for lesson 11

## Tasks
### Part 1: Array And List Data
Write 4 to 6 sentences explaining:
- which state value stores the repeated items
- what one item object looks like
- why an array is more appropriate than one single value for this screen

### Part 2: Rendering Flow
Describe one list-rendering flow from your screen.

Include:
- what data was already in the array or how the array changed
- what `renderItem` displayed for one row
- what made the full list appear on screen

### Part 3: Empty-State Reasoning
Explain one case where your screen should show the empty-state message instead of the list.

Include:
- what condition the screen checks
- what the user would see
- why that message helps more than a blank area

### Part 4: Troubleshooting Reflection
Choose one issue from [troubleshooting-checklist.md](troubleshooting-checklist.md).

Explain:
- the likely cause
- one small fix you would try first
- what result would show that the fix worked

### Part 5: Screenshot Evidence
Include one screenshot of your list screen or empty-state screen.

Label or caption:
- the visible list area or empty-state area
- one repeated row or the empty-state message
- the part of the screen that shows the current data condition

## Success Criteria
Strong submissions will:
- use array, `renderItem`, and empty-state terms accurately at a beginner level
- clearly explain how repeated data becomes repeated UI
- describe one condition that switches the screen from list view to empty-state view
- explain troubleshooting as a small-step process
- include one required screenshot of the list or empty-state screen
- label the screenshot using one of these two acceptable formats
- option A: short text callouts on the image
- option B: short caption lines directly below the image
