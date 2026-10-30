# Lesson 12 API Fetch Reference

Use this guide when you need a plain-language reminder of how remote data fetching works in this lesson.

## Plain-Language Definitions
- **API**: a service that gives data to your app
- **endpoint**: the exact URL you ask for
- **request**: the action of asking for data
- **response**: the data that comes back
- **JSON**: a common text format for returned API data
- **trigger**: the rule for when a request starts

## The lesson-12 request flow
Use this mental model:
1. the screen loads
2. the trigger runs one request helper
3. `fetch` asks the endpoint for data
4. the response is checked
5. the JSON is parsed
6. the result is stored in state
7. the list UI re-renders

## Main tools for this lesson
### `fetch`
- use it to request remote data
- treat it as the main built-in networking tool for this lesson

### `response.ok`
- use it to confirm the server returned a successful HTTP status
- do not assume every response is automatically a success

### `response.json()`
- use it to parse returned JSON data
- remember that it is asynchronous too

### `useEffect`
- use it to start the request when the screen loads
- keep the request logic out of the render body

## The trigger rule for this lesson
- today the request should run once when the detail screen loads
- place the request helper call inside one `useEffect`
- use the empty dependency array to avoid a request-after-every-render loop

## Where your clues appear
- after you save the file, watch the terminal where Expo is running first
- if React Native DevTools is open from the lesson project's development build, also check its `Console` tab
- if the request fails, read the exact error text before changing more code
- if the request succeeds, inspect one logged JSON object or one mapped item

## One worked example
### Symptom
- the detail screen opens, but the list stays empty

### First check
- log the parsed JSON response or the first returned item

### What you might learn
- the API returned `title`, but your list renderer still expects `label`

### Small fix
- map the response into `{ id, label }` before calling `setState`

### Retest
- reopen the detail screen and confirm the list now renders rows

## One repeated-request example
### Symptom
- the terminal keeps printing the same response over and over

### First check
- inspect where the request helper is called

### What you might learn
- the request started in the render body, or the Effect is missing the empty dependency array

### Small fix
- move the request call into one `useEffect` with `[]`

### Retest
- reload the screen and confirm the request runs once instead of looping

## Scope boundary
This lesson is not about:
- advanced POST, PUT, or DELETE requests
- authentication
- pagination
- full loading and error UI

This lesson is about:
- making one GET request
- choosing one safe trigger
- storing returned data in state
- rendering the success path
- debugging basic async issues
