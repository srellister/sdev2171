# Lesson 06 Screen Flow Reference

Use this guide during class and while completing the exercise.

## The lesson-06 route pattern

| File | Meaning |
| --- | --- |
| `src/app/_layout.tsx` | wraps the routes in a stack |
| `src/app/index.js` | the first screen a user sees |
| `src/app/details.js` | the second screen reached from the first |

## Core idea
- In Expo Router, route files become screens.
- The stack layout controls how those screens are shown and moved.
- A navigation action changes which screen is visible.
- In this lesson, `<Stack />` is enough to create the basic stack flow.
- `Stack.Screen` is optional and is used only for simple options such as titles.

## The two-screen lesson flow
1. The user opens the app and sees `index.js`.
2. The user triggers one action such as a button press.
3. The app pushes `details.js` onto the stack, placing it on top of `index.js`.
4. The user triggers a back action.
5. The app returns to `index.js` because the top screen is removed from the stack.

## Why the split matters
- The first screen keeps the main overview.
- The second screen focuses on one section or task.
- The app structure becomes easier to extend in later lessons.

## What happens to `App.js`
- The old lesson-05 `src/app/App.js` is source content for migration.
- For this lesson, the finished route structure is `index.js` plus `details.js`.
- Students should not treat `App.js` as the final navigation output.

## How screen registration works here
- In this lesson, screen registration happens through the route files plus the stack layout.
- `index.js` and `details.js` become screens because they exist in `src/app/`.
- `<Stack />` wraps those files into the navigation flow.
- `Stack.Screen` is optional and only adds simple options such as titles.

## Simple comparison rule
- Lesson 05 asked: “How can one screen become clearer?”
- Lesson 06 asks: “Which parts should stay on the first screen, and which part deserves its own route?”
