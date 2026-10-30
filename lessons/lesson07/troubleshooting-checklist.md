# Lesson 07 Troubleshooting Checklist

Use this guide when `TextInput`, `Pressable`, or the visible response do not behave the way you expect.

## Issue 1: The input field appears, but typing seems to do nothing
Likely cause:
- `onChangeText` is missing
- the changing text is not connected to the screen behaviour

Try first:
- confirm the input field has `onChangeText`
- confirm `useState` is imported if your screen uses `note` or `setNote`
- confirm the screen uses the updated text later
- test with one short input value

Evidence of improvement:
- you can explain what text changed and where it is used

## Issue 2: The button appears, but pressing it changes nothing
Likely cause:
- `onPress` is missing
- the press handler is not connected to the visible response

Try first:
- confirm `Pressable` has `onPress`
- confirm the response value exists if your screen uses `responseText` or `setResponseText`
- confirm the press action changes the response area
- retest with one short input

Evidence of improvement:
- the screen changes visibly after the press

## Issue 3: The response area is confusing
Likely cause:
- the screen does not clearly show what changed
- the action result is too subtle or not near the interaction area

Try first:
- use a short, obvious response message
- place the response close to the input and action
- retest after one press

Evidence of improvement:
- the user can tell what happened after the action

## Issue 4: Navigation broke while adding input
Likely cause:
- the interaction work replaced or broke the existing lesson-06 navigation flow

Try first:
- confirm the home screen still opens the detail screen
- confirm the back action still exists
- restore the lesson-06 navigation path before adding more interaction code

Evidence of improvement:
- the app still moves between screens correctly

## Issue 5: Too many interaction changes happened at once
Likely cause:
- input, press, and response changes were added before retesting

Try first:
- stop and identify the last known-good version
- recheck the input field first
- then recheck the press action
- then recheck the response area

Evidence of improvement:
- you can identify which step caused the issue

## Issue 6: Your own project is too broken to continue
Likely cause:
- the lesson-06 baseline was not ready before input work started

Try first:
- stop editing the broken project
- compare your `src/app/details.js` to `example/input-handling-reference/src/app/details.js`
- trace the input field, press action, and response area in that order
- repair one section at a time instead of rewriting the whole screen
- record the next step for restoring your own project

Evidence of improvement:
- you can still explain the interaction flow and continue the lesson
