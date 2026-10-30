# Lesson 18 Worked Example

Use this file to anchor the exact workflow this lesson expects.

## The Baseline Workflow
The target is the same integrated flow built across lessons 16 and 17:

1. the details screen fetches the study-step list
2. the user selects one or more steps into shared Context
3. the form route opens
4. the form keeps draft text local while the user types
5. invalid submit shows one visible validation clue
6. valid submit saves one committed result into shared state
7. the summary screen displays that saved result

## Default File Anchors
- `src/app/details.js`
  Fetches data, updates shared selected steps, and launches the form route.
- `src/app/session-form.js`
  Owns local draft state, validation, and submit logic.
- `src/context/StudyPlanContext.js`
  Owns shared selected steps plus the committed saved session result.
- `src/app/plan.js`
  Displays the committed shared result after submit. This is the summary route or summary screen named elsewhere in this lesson.
- `src/app/_layout.tsx`
  Keeps the shared provider around the routes that need it.

## Preferred Test Loop
Use this exact loop unless the instructor gives a narrower repair target:

1. load the details screen
2. confirm fetched data appears
3. add at least one study step
4. open the form route
5. try invalid submit once
6. enter a valid title
7. submit and confirm the summary screen updates

## Visible Clues
- details screen shows fetched `study-steps`
- selected-step count changes before the form opens
- invalid submit shows one error message
- summary screen shows the saved session title

## If Your Project Is Still `partial`
Repair the narrowest break first:

- route registration
- provider placement
- controlled input wiring
- validation branch
- summary read path

Do not expand scope until one of those five areas is stable again.
