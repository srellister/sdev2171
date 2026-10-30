# Lesson 07 Starting State Reference

Use this reference if you are unsure what “start from the lesson-06 project” means.

## Expected shared baseline
Before lesson 07, the student project should already have:
- a working Expo app from lesson 06
- a home route and a detail route
- working forward and back navigation
- ideally, a `configured` lesson-06 status
- if not yet configured, a documented remediation path already in progress before adding lesson-07 interaction work

## Mental model
Lesson 06 established:
- a simple two-screen navigation flow
- route files and a stack layout
- one known project structure

Lesson 07 adds:
- text input on a screen
- press-triggered actions
- a visible response area
- two temporary screen-memory values used by the example code

## Realistic baseline example
This is not a full copy target. It is only a reminder of the kind of lesson-06 state students are starting from:

```js
<View>
  <Text>Details Screen</Text>
  <Text>Focused content goes here</Text>
  <Pressable>
    <Text>Go back</Text>
  </Pressable>
</View>
```

This baseline matters because lesson 07 asks you to:
- keep the navigation flow working
- add one input field to the detail screen
- add one press-triggered action
- show one visible behaviour after the interaction

## If your project is not in this state
- If your app already has working navigation, keep using your own project.
- If your lesson-06 navigation is still incomplete, return first to:
- [lesson-06/navigation-build-checklist.md](../lesson-06/navigation-build-checklist.md)
- [lesson-06/navigation-status-tracker.md](../lesson-06/navigation-status-tracker.md)
- If the project will not recover in time for class progress, use the instructor-guided reference path and inspect the known-good interaction flow.
- If you are repairing your own project, compare your `src/app/details.js` to `example/input-handling-reference/src/app/details.js` one section at a time.
- Record which project you used and what your next step is before lesson 08.
