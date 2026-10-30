# Lesson 07 Interaction Build Checklist

Use this checklist during class. Move in order and test after each small interaction change instead of rewriting the whole screen at once.

## Plain-Language Definitions
- **input**: information entered by the user
- **event**: something the app responds to, such as typing or pressing
- **visible behaviour**: what the screen shows after the interaction happens
- **handler**: the code that responds to an event

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [input-pattern-reference.md](input-pattern-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Step 1: Confirm your lesson-06 baseline
- open the same Expo Router project from lesson 06
- run the app
- confirm the home screen, detail screen, and back navigation still work

If the project does not run:
- stop here
- follow the lesson-06 remediation steps first using:
- `../lesson-06/navigation-build-checklist.md`
- `../lesson-06/navigation-status-tracker.md`
- if the project will not recover in time for class progress, switch to the instructor-guided reference path
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)
- if you switch to the reference path, compare your own `src/app/details.js` to `example/input-handling-reference/src/app/details.js` and repair one part at a time

Canonical starting state:
- a working lesson-06 project with `configured` navigation
- a home route and a detail route
- a clear detail screen in `src/app/details.js` where input can be added

## Step 2: Add a `TextInput`
- open `src/app/details.js`
- place one `TextInput` on the detail screen
- add a clear placeholder
- keep the input area visually readable

You should see:
- the input field appears
- the field is clearly meant for typing

## Step 3: Connect the text-change event
- import `useState` from React if it is not already there
- add `onChangeText`
- connect it to the changing text value used by the screen
- keep this as a small lesson detail, not the main concept

You should see:
- typing can now affect the screen logic
- you can explain which event reacts to typing
- you understand that the screen temporarily remembers the typed text so it can use it later

## Step 4: Add one `Pressable`
- add one press target with a clear label
- connect `onPress` to a simple screen action

You should see:
- the button looks intentional
- the screen has one obvious action to test

## Step 5: Add one visible response
- show a short response area after the press action
- keep the response simple and readable
- make it obvious when the interaction worked

You should see:
- the screen changes visibly after the action
- the user can tell what happened

## Step 6: Test the full interaction flow
- type a short value
- trigger the press action
- confirm the visible response appears or updates
- test the back navigation once more

## Step 7: Record your interaction status
- `configured`: input works, press works, and the visible response is clear
- `partial`: the interaction exists, but one part still fails
- `blocked`: the interaction flow cannot be completed during class

Record:
- your current status
- the failing step, if any
- the next action to try before lesson 08

## Step 8: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- the navigation flow still works
- you can point to the input area, the press action, and the visible response
- you can explain which event handles typing and which event handles the press
- the visible response actually changes after the interaction

## Step 9: Leave a lesson-08-ready baseline
- keep the working navigation structure from lesson 06
- keep one working interaction on the detail screen
- save a known current state before class ends
- if you used the reference path, record the next step for restoring your own project
- `configured` is lesson-08-ready
- `partial` and `blocked` require remediation before lesson 08
