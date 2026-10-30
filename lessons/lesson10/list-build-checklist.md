# Lesson 10 List Build Checklist

Use this checklist during class. Move in order and test after each small change instead of rewriting the whole screen at once.

## Plain-Language Definitions
- **array**: data that stores multiple items
- **render**: show UI from data
- **list row**: one repeated UI item
- **empty state**: the message shown when there are no list items

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [list-rendering-reference.md](list-rendering-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Step 1: Confirm your lesson-09 baseline
- open the same Expo Router project from lesson 09
- run the app
- confirm the home screen, detail screen, and back navigation still work
- confirm the detail screen still updates based on state

If the project does not run:
- stop here
- repair the lesson-09 state flow first
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)
- if the project will not recover in time for class progress, switch to the instructor-guided reference path

Canonical starting state:
- a working lesson-09 project
- a home route and a detail route
- a clear detail screen in `src/app/details.js`
- one working state-driven screen

## Bridge from lesson 09
- look for the old lesson-09 single preview flow in `src/app/details.js`
- that usually includes `draftName`, `profileName`, `statusText`, and any `StatePreviewCard` output
- for lesson 10, that old single preview output should be removed or replaced
- the new target is one `draftStep` input, one `studySteps` array, one list area, and one empty-state message

## Step 2: Replace the single-value target with array state
- open `src/app/details.js`
- remove or comment out the old lesson-09 single preview output
- keep the input area only if you want to reuse it for `draftStep`
- identify which repeated items belong in an array
- create one small starting array with 2 or 3 objects
- keep each object shape simple

You should see:
- the screen now stores repeated items in one array
- you can point to which state value holds the list data

## Step 3: Test one simple repeated output
- render the array once with a very simple pattern
- if needed, use `map` first so you can see the repetition logic clearly
- confirm each item becomes one visible row

You should see:
- the screen repeats one row pattern for multiple items
- the output count matches the array count

## Step 4: Switch to `FlatList`
- replace the temporary repetition pattern with `FlatList`
- update your React Native import so `FlatList` is included
- pass the array into `data`
- define `renderItem`
- define `keyExtractor`

Copy-safe list scaffold:
```js
import { FlatList, Text } from 'react-native';

<FlatList
  data={studySteps}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.label}</Text>}
/>
```

You should see:
- the list still renders correctly
- each row comes from one item object

## Step 5: Add one empty-state condition
- decide what message should appear when the array has no items
- add one condition that switches between the list and the empty-state message
- keep the message short and obvious

Copy-safe add and clear scaffold:
```js
const [draftStep, setDraftStep] = useState('');
const [studySteps, setStudySteps] = useState([
  { id: '1', label: 'Charge laptop' },
  { id: '2', label: 'Pack notebook' },
]);

function handleAddStep() {
  const trimmedStep = draftStep.trim();

  if (trimmedStep.length === 0) {
    return;
  }

  setStudySteps((currentSteps) => [
    ...currentSteps,
    { id: String(Date.now()), label: trimmedStep },
  ]);
  setDraftStep('');
}

function handleClearSteps() {
  setStudySteps([]);
}
```

You should see:
- the list appears when items exist
- the empty-state message appears when the array is empty

## Step 6: Test one update path
- add one new item or remove all items
- retest the screen after the change
- use the visible list or empty-state change as your evidence that the array state updated

You should see:
- the list output changes when the array changes
- the empty state appears at the right time

## Step 7: Mid-build checkpoint
Pause here and confirm:
- you can point to the array state
- you can point to one rendered row
- you can point to the action that clears the list and produces the empty state

## Step 8: Record your lesson status
- `configured`: the list renders and the empty-state message works
- `partial`: the list or empty-state flow exists, but one part still fails
- `blocked`: the list-rendering flow cannot be completed during class

Record:
- your current status
- the failing step, if any
- the next action to try before lesson 11

## Step 9: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- the navigation flow still works
- you can point to one array storing repeated items
- you can explain what `renderItem` does
- the screen switches correctly between list view and empty-state view

## Step 10: Leave a lesson-11-ready baseline
- keep one working list screen
- keep the empty-state message in a known-good state
- save a known current version before class ends
- if you used the reference path, record the next step for restoring your own project
- `configured` is lesson-11-ready
- `partial` and `blocked` require remediation before lesson 11
