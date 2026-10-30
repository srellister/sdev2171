# Lesson 09 State And Props Build Checklist

Use this checklist during class. Move in order and test after each small change instead of rewriting the whole screen at once.

## Plain-Language Definitions
- **state**: data a component owns and can update
- **props**: data a parent component passes into a child component
- **parent component**: the component that owns the current values
- **child component**: the component that receives values from the parent

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [state-props-reference.md](state-props-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Step 1: Confirm your lesson-07 or lesson-08 baseline
- open the same Expo Router project from the previous module work
- run the app
- confirm the home screen, detail screen, and back navigation still work
- confirm the detail screen still has one working interaction

If the project does not run:
- stop here
- repair the lesson-07 interaction flow first
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)
- if the project will not recover in time for class progress, switch to the instructor-guided reference path

Canonical starting state:
- a working lesson-07 or lesson-08 project
- a home route and a detail route
- a clear detail screen in `src/app/details.js`
- one working input-driven interaction

## Step 2: Name the changing values as state
- open `src/app/details.js`
- import `useState` if needed
- identify which values the screen owns
- give those values clear names
- before editing further, say out loud or write down which values belong to the parent state
- before editing further, say out loud or write down which values the child only needs to receive as props

You should see:
- the parent screen clearly owns the changing values
- you can point to which values are state

## Step 3: Keep the parent screen responsible for updates
- keep the input and button handlers in the parent screen
- update the parent-owned values there
- retest after one small change

You should see:
- typing or pressing still updates the parent screen logic
- the baseline interaction still works

## Step 4: Extract one child component
- create `src/components/` first if that folder does not already exist
- create one simple child component file such as `src/components/StatePreviewCard.js`
- move one display area into that child component
- keep the child focused on display, not on owning new lesson logic

Copy-safe extraction scaffold:
```js
// src/components/StatePreviewCard.js
import { Text, View } from 'react-native';

export default function StatePreviewCard({ name, statusText }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{statusText}</Text>
    </View>
  );
}
```

```js
// src/app/details.js
import StatePreviewCard from '../components/StatePreviewCard';

<StatePreviewCard
  name={profileName}
  statusText={statusText}
/>
```

You should see:
- the child component exists
- the UI still makes sense after extraction

## Step 5: Pass props into the child
- send the display values from the parent into the child JSX
- keep the prop names clear and intentional
- read the same prop names inside the child component

You should see:
- the child output uses the current parent values
- the child output changes after the parent state changes

## Step 6: Test the full parent-child flow
- type a short value
- trigger the screen action
- confirm the parent state changes
- use the updated preview card text as your visible evidence that the parent state changed and the child received new props
- confirm the child component output updates
- test the back navigation once more

## Step 7: Record your lesson status
- `configured`: the parent state updates work and the child props render correctly
- `partial`: the state or prop flow exists, but one part still fails
- `blocked`: the state-and-props flow cannot be completed during class

Record:
- your current status
- the failing step, if any
- the next action to try before lesson 10

## Step 8: Confirm lesson success
You are successful in this lesson when:
- the app still runs
- the navigation flow still works
- you can point to at least two parent-owned state values
- you can point to one child component receiving props
- the child output actually changes after the parent state changes

## Step 9: Leave a lesson-10-ready baseline
- keep one working parent-child screen
- keep the child component file in a known-good state
- save a known current version before class ends
- if you used the reference path, record the next step for restoring your own project
- `configured` is lesson-10-ready
- `partial` and `blocked` require remediation before lesson 10
