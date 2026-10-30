# Lesson 16 Context Build Checklist

Use this checklist during class. Move in order and retest after each small change instead of rewriting the whole app at once.

## Plain-Language Definitions
- **Context**: a React tool for sharing one value across multiple screens or components
- **provider**: the component that supplies the shared value
- **consumer**: a component that reads or updates the shared value
- **shared hook**: a helper built with `useContext` so screens can access the shared value more clearly

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [provider-placement-reference.md](provider-placement-reference.md)
- [context-flow-reference.md](context-flow-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Required Clue Rule For This Lesson
- at least one build round today must use a real shared-state clue, not only guessing
- acceptable clues:
  - the details screen count changes after an update made on the plan screen
  - both screens show the same selected-step count without route-parameter copying
  - one shared hook value is visible in more than one screen

## Step 1: Confirm The Lesson-15 Problem Path Still Works
- run the local backend first
- confirm the copied-state mismatch still reproduces
- do not add Context until the old problem is visible

You should see:
- the exact issue Context is supposed to solve

## Step 2: Create The Context File
- create one Context file for the selected-step feature
- add the shared state value there
- add the shared update functions there

You should see:
- one file that now owns the selected-step feature

## Step 3: Add The Provider
- create a provider component around that shared feature state
- keep the provider focused on the selected-step value only
- do not move loading or error state into it yet

You should see:
- one provider that supplies the selected-step value and update functions

## Step 4: Place The Provider At The Shared Layout Level
- wrap the route tree in `src/app/_layout.tsx`
- make sure both the details screen and the plan screen sit inside that provider

You should see:
- one provider path that reaches both screens

## Step 5: Add A Shared Hook
- create one helper hook that calls `useContext`
- return the selected-step value and update functions from that hook
- add a guard error if the hook is used outside the provider

You should see:
- one clear hook path for screens to consume shared state

## Step 6: Refactor The Details Screen
- remove the old local selected-step state from the details screen
- keep the fetch, loading, and error state local
- replace the old selection reads and updates with the shared hook

You should see:
- the details screen still fetches
- the selected-step feature now comes from Context

## Step 7: Refactor The Plan Screen
- remove the old copied route-parameter plan data
- replace it with the shared hook
- update the remove action to change the shared provider value

You should see:
- the plan screen now reads the same selected-step value as the details screen

## Step 8: Retest The Shared-State Clue
- add at least two study steps on the details screen
- open the plan screen
- remove one item there
- go back to the details screen

You should see:
- both screens now agree

## Step 9: Record Your Lesson Status
- `resolved`: the shared feature works across screens and the provider path is clear
- `partial`: some provider or consumer wiring works, but the full flow is incomplete
- `blocked`: the provider or hook setup is still broken or unclear

Record:
- your current status
- your shared-state clue
- your provider location
- one value that stayed local
- the next action to try before lesson 17

## Step 10: Confirm Lesson Success
You are successful in this lesson when:
- the local backend path still works
- the selected-step feature moved into one provider
- the provider wraps both screens
- both screens stay synchronized after an update
- you can explain one value that should still stay local
