# Lesson 12 Remote Data Build Checklist

Use this checklist during class. Move in order and retest after each small change instead of rewriting multiple parts of the app at once.

## Plain-Language Definitions
- **API**: a service that sends data to your app
- **endpoint**: the exact URL you request
- **trigger**: the reason the request runs
- **response**: the data returned by the API
- **async**: work that finishes later, not immediately

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [api-fetch-reference.md](api-fetch-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Required clue rule for this lesson
- at least one build round today must use a real request clue, not only guessing
- acceptable clues:
  - one logged JSON result or one logged item object
  - one exact terminal error line
  - one DevTools `Console` observation from the lesson project's development-build path

## Step 1: Confirm the working screen baseline
- open your main lesson-10 or lesson-11 Expo Router project, not an older backup or second partial copy
- run the app
- confirm the home screen still opens the detail screen
- confirm the detail screen still renders
- confirm the back path still works

If the project does not run:
- stop here
- recover the baseline first
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)
- if recovery will take too long, switch to the instructor-guided reference path

## Step 2: Name the request plan before coding
- identify the endpoint URL you will request
- name the trigger rule in one sentence
- explain in one sentence what the request is asking for and why the app needs that API data
- for this lesson, the trigger should be: fetch once when the detail screen loads

You should see:
- one clear endpoint
- one clear reason the request runs
- one clear reason the app needs remote data here

## Step 3: Keep the working local screen as your comparison point
- leave the old local list code visible for the moment
- do not remove the old local array or controls yet
- use the old working screen as your comparison point until the request helper is proven

You should see:
- one still-working baseline while you test the new request code

## Step 4: Add one request helper
- add `useEffect` to your React import before you continue
- create one empty array state value for remote items
- create one `async` function that calls `fetch`
- check `response.ok`
- parse the JSON response
- log one response clue before mapping everything

You should see:
- one real response clue in the Expo terminal or DevTools `Console`

## Step 5: Transform the response into list items
- inspect the returned object shape
- map each response item into the same list shape your UI expects
- keep the shape simple, such as `id` plus `label`

You should see:
- one consistent object shape for the rendered list

## Step 6: Add the trigger
- add one `useEffect`
- call the request helper inside it
- use the empty dependency array so the request does not run after every render

You should see:
- the request runs when the detail screen loads
- the request does not repeat endlessly

## Step 7: Replace the old local data only after the request path works
- remove the old hard-coded local array
- remove old input controls and add or clear handlers if they are still on the screen
- keep the list renderer and back button
- point the list at the new remote state value

You should see:
- the old local data source is gone
- the screen still uses the same list-rendering pattern

## Step 8: Retest the full flow
- open the detail screen again
- watch the terminal or DevTools for one request clue
- confirm the fetched items now appear in the list

You should see:
- one rendered list based on remote data
- one stable screen after the request finishes

## Step 9: Debug one issue if needed
- if no items appear, compare the response shape to the mapped shape
- if the request repeats, inspect the trigger location and dependency array
- if an error appears, read the full message before changing more code

You should see:
- one smaller problem statement instead of “the API does not work”

## Step 10: Record your lesson status
- `resolved`: the app fetches remote data, stores it in state, and renders it
- `partial`: the request or mapping is partly working, but the final screen is incomplete
- `blocked`: the build cannot continue during class without recovery support

Record:
- your current status
- your endpoint URL
- your trigger rule
- the main clue you used
- the next action to try before lesson 13

## Step 11: Confirm lesson success
You are successful in this lesson when:
- the app still runs or has been restored to a known-good baseline
- you can explain what the request is asking for and why the app needs it
- you can explain when the request runs
- you can show one real response clue
- you can show one state update that stores the fetched data
- you can show one rendered list based on the returned API data

## Step 12: Leave a lesson-13-ready baseline
- keep the working request in place
- remove noisy logs if they are no longer useful
- save a known current state before class ends
- if you used the reference path, record the next step for restoring your own project
- `resolved` is lesson-13-ready
- `partial` and `blocked` require remediation before lesson 13
