# Lesson 12 Troubleshooting Checklist

Use this guide when request setup, state updates, or rendering breaks down.

## Issue 1: You do not know whether the request ran
Likely cause:
- the helper was never called
- the request trigger is in the wrong place

Try first:
- add one `console.log` at the start of the request helper
- confirm the detail screen actually opened
- inspect whether `useEffect` is calling the helper

Evidence of improvement:
- you can confirm whether the request helper ran at all

## Issue 2: The request keeps repeating
Likely cause:
- the request call is inside the render body
- the Effect is missing the empty dependency array

Try first:
- move the request call into one `useEffect`
- use `[]` as the dependency array for this lesson example
- retest one screen load only

Evidence of improvement:
- the terminal stops printing repeated request clues

## Issue 3: The request returns data, but the list stays empty
Likely cause:
- the mapped object shape does not match the UI shape
- the wrong property name is used in `renderItem`

Try first:
- log the first returned item
- compare the API field names to the mapped state shape
- compare the mapped state shape to the JSX field names

Evidence of improvement:
- one list row becomes visible with the expected label text

## Issue 4: A request error appears
Likely cause:
- the endpoint URL is wrong
- the response status is not OK
- the network path is unavailable

Try first:
- read the full terminal error
- check the exact endpoint string
- confirm that `response.ok` is being checked

Evidence of improvement:
- your next fix is tied to the exact request clue instead of a guess

## Issue 5: The known-good reference app works, but your own project does not
Likely cause:
- your project drifted from the stable route layout or list structure before the fetch code was added

Try first:
- compare `_layout.tsx` and confirm both screens are still reachable
- compare `index.js` and confirm the home-screen route action still opens details
- compare `details.js` imports first
- compare `details.js` state and request helper next
- compare `details.js` trigger and render output last
- restore one section at a time

Evidence of improvement:
- you can isolate the exact section where your project differs from the working reference

## Issue 6: You are stuck after the first clue
Likely cause:
- the next step is not tied to one real request or response clue

Try first:
- ask whether the most important unknown is the trigger, the response, or the mapped shape
- inspect only that one part next
- retest after one small change

Evidence of improvement:
- your debugging path becomes one clear loop again: trigger, clue, change, retest
