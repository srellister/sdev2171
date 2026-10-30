# Lesson 13 Local Backend Reference

Use this guide to run the lesson backend and point your app at the correct local server address.

## Step 1: Start the backend
From [example/backend](/Users/nathanhumphrey/source/repos/new-courses/SDEV2171/resources/03-apis-asynchronous-data-screen-level-state/lesson-13/example/backend):

Open a new terminal window first. Keep your Expo app running in its own terminal.

1. Install dependencies:
   - `npm install`
2. Start the server:
   - `npm start`

The server should print:

```text
Server is running on port 3000
```

## Step 2: Know the main endpoint
The lesson-13 frontend uses:

- `GET /api/study-steps`

That route returns data in this shape:

```json
[
  { "id": "1", "label": "Charge laptop before class" }
]
```

## Step 3: Choose the correct base URL
Use the same route path, but the host changes depending on where your app runs.

### iOS simulator
- usually `http://127.0.0.1:3000/api`

### Android emulator
- usually `http://10.0.2.2:3000/api`

### Physical device
- use your computer LAN IP instead of localhost
- example: `http://192.168.1.50:3000/api`

## Step 4: Test loading and error paths
### Visible loading
- add `?delay=1200`
- example:
  - `/api/study-steps?delay=1200`

### Visible error
- add `?error=1`
- example:
  - `/api/study-steps?delay=1200&error=1`

## Step 5: Preferred lesson-13 error-test pattern
Use one helper option or one temporary button in your screen instead of manually rewriting the fetch URL each time.

Preferred pattern:
- normal request:
  - `loadRemoteSteps()`
- deliberate failure:
  - `loadRemoteSteps({ simulateError: true })`

## Student rule
- keep the data shape the same
- only change the base URL or query string for the lesson-13 tests
- do not invent a new endpoint path for this lesson
