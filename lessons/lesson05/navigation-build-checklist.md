# Lesson 06 Navigation Build Checklist

Use this checklist during class. Move in order and test after each small routing change instead of rewriting the whole project at once.

## Plain-Language Definitions
- **route**: a file-based screen in the app navigation structure
- **stack**: a navigation flow where one screen is layered on top of another
- **layout**: the file that defines how related screens are wrapped and shown
- **navigation action**: the code that moves to another screen or back

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [screen-flow-reference.md](screen-flow-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Step 1: Confirm your lesson-05 baseline
- open the same Expo project from lesson 05
- run the app
- confirm the styled screen still renders before you change the route structure

If the project does not run:
- stop here
- if the screen code is broken, restore the last working lesson-05 version by using your saved copy, manual undo, or the instructor-provided last-known-good file
- if the project will not recover in time for class progress, switch to the instructor-guided reference path instead of starting a second setup attempt
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)

Canonical starting state:
- a working lesson-05 project with one styled screen
- at least two clear content areas that can be split into separate screens
- a known current state before route changes begin

## Step 2: Set up the route structure
- keep `src/app/_layout.tsx`
- use the old lesson-05 `src/app/App.js` screen as the content source you are splitting
- create or update `src/app/index.js`
- create `src/app/details.js`
- after you move the content you need, treat `App.js` as old source material, not as the finished lesson-06 output
- do not create a route named `App.js` for this lesson

You should see:
- the project still has a clear route folder structure
- the screen names are easy to match to route paths

## Step 3: Define the stack layout
- import `Stack` from `expo-router`
- return `<Stack />` from `_layout.tsx`
- optionally name the two screens with simple titles

You should see:
- the app still runs
- the route files now belong to a stack flow
- you understand that the files create the screens, while `Stack.Screen` only adds options such as titles
- you understand that screen registration in this lesson happens through the route files plus the stack layout

## Step 4: Build the first screen
- move the lesson-05 home content into `index.js`
- keep the styling readable
- add one action that moves to `'/details'`

You should see:
- the first screen renders
- one clear navigation action is available

## Step 5: Build the second screen
- create a simpler detail screen in `details.js`
- move one logical section from the first screen into the second screen
- add one action that returns to the first screen

You should see:
- the second screen renders
- both screens have a clear purpose

## Step 6: Test the flow
- open the first screen
- trigger the forward action
- confirm the second screen appears
- trigger the back action
- confirm the first screen returns

## Step 7: Record your navigation status
- `configured`: both screens and both actions work
- `partial`: the route structure exists, but one part still fails
- `blocked`: the navigation flow cannot be completed during class

Record:
- your current status
- the failing step, if any
- the next action to try before lesson 07
- whether you worked in your own project or used the instructor-guided reference path

## Step 8: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- you can point to `_layout.tsx`, `index.js`, and `details.js`
- you can explain one forward action and one back action
- you know whether your current status is `configured`, `partial`, or `blocked`

## Step 9: Leave a lesson-07-ready baseline
- keep a working route structure in `src/app/`
- keep one readable home screen and one readable second screen
- save a known current state before class ends
- if you used the recovery app, record the next step for restoring your own project
- if your status is `partial` or `blocked`, do not treat that as lesson-07-ready; record the exact remediation steps needed before the next class
