# Lesson 06 Starting State Reference

Use this reference if you are unsure what “start from the lesson-05 project” means.

## Expected shared baseline
Before lesson 06, the student project should already have:
- a working Expo app from lesson 05
- one styled screen that still runs
- at least two visible content areas that could become separate screens
- a working `src/app/` folder on the Expo Router course scaffold
- lesson-05 content that still mainly lives in `src/app/App.js`

## Mental model
Lesson 05 established:
- one readable styled screen
- clear sections and grouping
- a stable baseline for change

Lesson 06 adds:
- separate route files
- a stack layout
- forward and back navigation actions
- a split of the old lesson-05 `App.js` screen into route-based screens

## Realistic baseline example
This is not a full copy target. It is only a reminder of the kind of lesson-05 state students are starting from:

```js
<ScrollView>
  <View>
    <Text>Styled home heading</Text>
    <Text>Intro text for the main screen</Text>

    <View>
      <Text>Section one</Text>
      <Text>Summary or card content</Text>
    </View>

    <View>
      <Text>Section two</Text>
      <Text>Detail content that could move to another screen</Text>
    </View>
  </View>
</ScrollView>
```

This baseline matters because lesson 06 asks you to:
- keep one route as the home screen
- move one logical section into a second route
- define the stack layout for both screens
- test one forward action and one back action

## If your project is not in this state
- If your app runs and has a clear styled screen, keep working in your own project.
- If the project is broken, restore your last working lesson-05 version by using your saved copy, manual undo, or the instructor-provided last-known-good file.
- If the project will not recover in time for class progress, switch to the instructor-guided reference path and inspect the known-good route files instead of starting another setup attempt.
- Record which project you used and what your next step is before lesson 07.
