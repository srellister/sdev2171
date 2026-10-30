# Lesson 14 Worked Example And File Anchors

Use this guide to remind yourself what the stable lesson-14 target looks like. This is not a separate app idea. It is the same local-backend request-state workflow from lesson 13, checked more deliberately.

## Minimum Working Scope
A stable lesson-14 screen should:

- fetch the local `study-steps` data
- show a visible loading state
- show a success list when the request works
- show a visible error state when the request fails
- let the user retry after failure

## Default File Anchors
- `src/app/index.js`
  Home screen and route launch point.
- `src/app/details.js`
  Main request-state screen.
- `src/lib/apiBaseUrl.js`
  Base URL helper for emulator, simulator, or device path.
- `example/backend/server.js`
  Local backend endpoints and test query parameters.
- `example/backend/study-steps.json`
  Stable `{ id, label }` data shape.

## Example Request-State Questions
Use these questions while reading your own files:

- where does the request start
- where does `isLoading` become `true`
- where does the error message get stored
- what stops the loading branch
- what visible UI proves success
- what visible UI proves failure

## Preferred Testing Method
Use the same testing loop from lesson 13 unless your instructor tells you otherwise:

1. run the normal fetch with a visible delay such as `?delay=1200`
2. trigger failure through the existing request helper pattern, such as `loadRemoteSteps({ simulateError: true })`
3. use the retry action to return to success

This lesson is not asking you to invent a different testing strategy.

## Instructor-Guided Reference Path
If you are blocked, the instructor may direct you to inspect:

- `example/request-states-practice-reference/src/app/index.js`
- `example/request-states-practice-reference/src/app/details.js`
- `example/request-states-practice-reference/src/lib/apiBaseUrl.js`

Blocked students should compare and repair. They should not jump straight into copying the whole reference app unless the instructor explicitly chooses that path.
