# Lesson 08 Worked Example

Use this page when the instructor reviews one completed example at the start of the work period.

## Example scenario
A student has a two-screen app from lessons 06 and 07.

### Styling improvement
- the home screen sections now have clearer spacing
- the heading is easier to distinguish from the body text

### Navigation improvement
- the home screen opens the details screen
- the details screen returns to the home screen

### Input improvement
- the details screen includes one input field
- one press action triggers one visible response

## Default file anchors
- styling cleanup usually starts in `src/app/index.js`
- navigation flow usually depends on `src/app/_layout.tsx`, `src/app/index.js`, and `src/app/details.js`
- input-driven interaction usually starts in `src/app/details.js`

## Key review terms
- **route**: a screen file in the navigation structure
- **event**: something the app responds to, like a press or text change
- **handler**: the code that responds to that event
- **visible response**: what the screen shows after the interaction happens

## What “complete” looks like
- one readable styled screen
- one working forward navigation path plus one working return path
- one input interaction with one visible result

## What “still repairing” looks like
- one of those three areas still fails
- the exact blocker is named
- the next repair step is recorded
