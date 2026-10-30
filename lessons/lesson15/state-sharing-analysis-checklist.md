# Lesson 15 State-Sharing Analysis Checklist

Use this checklist during class. Move in order and retest after each observation instead of changing many parts of the app at once.

## Plain-Language Definitions
- **local state**: data that belongs to one screen or one component
- **duplicated state**: the same changing data stored in more than one place
- **shared state**: one source of truth used by more than one screen
- **navigation parameter copy**: a value sent to another screen as a snapshot, not a live shared value

Use these references while you work:
- [starting-state-reference.md](starting-state-reference.md)
- [navigation-parameter-limitations.md](navigation-parameter-limitations.md)
- [scenario-map.md](scenario-map.md)
- [troubleshooting-checklist.md](troubleshooting-checklist.md)

## Required Clue Rule For This Lesson
- at least one analysis round today must use a real mismatch clue, not only guessing
- acceptable clues:
  - one screen shows a different selection count than another screen
  - one screen removes an item but the other screen still shows it
  - one route parameter copy is clearly older than the current local screen state

## Step 1: Confirm The Lesson-14 Success Path Still Works
- run the local backend first
- confirm the detail screen still fetches and renders study-step data
- do not add Context or a new provider in this lesson

You should see:
- the old success path still works before the new problem begins

## Step 2: Name The Candidate Shared Value Before Coding
- write one sentence for the value that more than one screen now cares about
- write one sentence for which screen currently owns that value
- write one sentence for which second screen also needs it

You should see:
- one clear candidate for shared state

## Step 3: Reproduce The Parameter-Copy Workflow
- add at least two study steps on the details screen
- open the copied plan screen
- confirm the second screen received a copied version of the selection

You should see:
- one screen with local selected steps
- one screen with a copied plan snapshot

## Step 4: Trigger The Drift On Purpose
- remove one item from the copied plan screen
- go back to the details screen
- compare the two screens mentally or by screenshot notes

You should see:
- the two screens no longer agree

## Step 5: Name Why The Drift Happened
- identify where the original local state lives
- identify where the copied state lives
- explain why one update did not change the other screen

You should see:
- one clear explanation of duplicated or copied mutable state

## Step 6: Sort Values Into Local Versus Shared
- choose one value that should stay local
- choose one value that should become shared next lesson
- if one value is still unclear, write why it is unclear

You should see:
- one local-only example
- one shared-later example

## Step 7: Record Your Lesson Status
- `resolved`: you can reproduce the mismatch and explain why it happens
- `partial`: you can find the screens involved, but the explanation is still incomplete
- `blocked`: you cannot reproduce the mismatch or cannot explain the drift yet

Record:
- your current status
- your mismatch clue
- your local-state example
- your shared-state example
- the next action to try before lesson 16

## Step 8: Confirm Lesson Success
You are successful in this lesson when:
- the local backend path still works
- you can name the value that now matters across screens
- you can show one real mismatch clue
- you can explain why navigation parameters are fragile here
- you can explain why one shared-state solution is needed next
