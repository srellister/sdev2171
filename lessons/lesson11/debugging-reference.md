# Lesson 11 Debugging Reference

Use this guide when you need a plain-language reminder of how to approach debugging in this lesson.

## Plain-Language Definitions
- **bug**: behaviour that does not match what the app should do
- **symptom**: the visible result of the bug
- **runtime value**: the actual value the app has while it is running
- **hypothesis**: your best current explanation of the bug
- **retest**: run the app or action again after one small change

## The lesson-11 debugging loop
Use this mental model:
1. reproduce the bug
2. describe the symptom clearly
3. inspect the most relevant value
4. make one small hypothesis
5. change one small thing
6. retest

## Main tools for this lesson
### `console.log`
- use it to inspect state and runtime values
- give each log a short label

### LogBox
- use it when warnings or errors appear in the app
- read the exact text before changing code

### React Native DevTools
- use it to inspect logs and runtime behaviour during development
- treat it as a source of evidence, not as a random button to click

## How to open the main tools
### Developer menu
- if Expo CLI is already running with a connected emulator, simulator, or USB device, try pressing `m` in the terminal
- on Android emulator, try `Cmd` + `M` on macOS or `Ctrl` + `M` on Windows or Linux
- on iOS simulator, try `Ctrl` + `Cmd` + `Z`

### React Native DevTools
- open it from the Developer menu, or
- press `j` in the terminal where Expo is running

### LogBox
- watch the running app screen
- if a warning or error appears, read the exact text before editing code

## Important tooling note
- The course runtime standard from lesson 03 onward is the development-build path.
- In current Android Bridgeless setups, Expo Go can leave React Native DevTools panels unavailable or unreliable.
- Use your lesson project's development build when this lesson asks you to inspect DevTools.
- Terminal logs, the DevTools `Console` tab, the Developer menu, and LogBox are the expected tool set for this lesson.

## Where your logs appear
- after you save the file, watch the terminal where Expo is running first
- if React Native DevTools is open, also check its Console tab
- if you do not see your log, confirm that the code path actually ran
- read the label and value together, not just the raw number or object

## Good debugging habits
- start from one known symptom
- inspect the value most closely tied to that symptom
- compare working and broken behaviour
- keep fixes small
- retest immediately after each change

## One worked example
### Symptom
- the row number appears, but the label text is blank

### First check
- log one `item` object inside `renderStep`

### What you might learn
- the object has `label`, but the JSX is trying to show `item.text`

### Small fix
- change the JSX back to `item.label`

### Retest
- rerun the same screen action and confirm the label text now appears

## One warning or error example
### Symptom
- the screen stops working after a refactor and a runtime error appears

### First check
- read the full LogBox or terminal error message

### What you might learn
- the error points to a missing `FlatList` import in `src/app/details.js`

### Small fix
- restore `FlatList` in the React Native import line

### Retest
- reload the screen and confirm the list section appears again

## Poor debugging habits
- editing several things before retesting
- logging everything without a question in mind
- ignoring exact warning or error text
- assuming the first guess is correct

## Comparison rule
If your own project is too broken:
1. compare your file to the known-good reference app
2. compare imports first
3. compare state and handlers next
4. compare render output last

## Scope boundary
This lesson is not about:
- advanced performance profiling
- native-code debugging
- production-build debugging
- network debugging yet

This lesson is about:
- reproducing bugs
- reading symptoms
- logging targeted values
- using Dev Menu, LogBox, and DevTools
- retesting systematically
