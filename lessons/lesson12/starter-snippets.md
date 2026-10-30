# Lesson 12 Starter Snippets

Use these snippets when you need safe, focused patterns for this lesson.

## Empty state value for remote items
```js
const [remoteSteps, setRemoteSteps] = useState([]);
```

## Full minimum placement example
```js
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function DetailsScreen() {
  const [remoteSteps, setRemoteSteps] = useState([]);

  async function loadRemoteSteps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    setRemoteSteps(
      data.map((item) => ({
        id: String(item.id),
        label: item.title,
      }))
    );
  }

  useEffect(() => {
    loadRemoteSteps();
  }, []);

  return (
    <FlatList
      data={remoteSteps}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.label}</Text>}
    />
  );
}
```

Use this to confirm:
- `useEffect` must be imported
- the request helper belongs inside the component
- the `useEffect` call belongs after the helper and before the returned JSX

## One request helper
```js
async function loadRemoteSteps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  console.log('remote data sample', data[0]);

  setRemoteSteps(
    data.map((item) => ({
      id: String(item.id),
      label: item.title,
    }))
  );
}
```

Watch for this result:
- first check the Expo terminal where `npm run start` is running
- if React Native DevTools is open from the lesson project's development build, also check the `Console` tab

## One safe screen-load trigger
```js
useEffect(() => {
  loadRemoteSteps();
}, []);
```

## One guarded request helper
```js
async function loadRemoteSteps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log('remote data count', data.length);

    setRemoteSteps(
      data.map((item) => ({
        id: String(item.id),
        label: item.title,
      }))
    );
  } catch (error) {
    console.error('request failed', error);
  }
}
```

## One response-shape check
```js
console.log('first remote item', data[0]);
```

## Lesson-10 to lesson-12 conversion guide
### Old lesson-10 parts you can remove after the request works
- `draftStep`
- `handleAddStep`
- `handleClearSteps`
- `TextInput`
- add or clear buttons
- the old hard-coded starter array

### Parts you should keep
- the detail route file
- the `FlatList` pattern
- the back button
- the list-row JSX structure

### New lesson-12 parts you add
- `remoteSteps` state
- `loadRemoteSteps` helper
- `useEffect` trigger
- response-to-list mapping

## Important reminders
- keep the request helper out of the render body
- use one clear trigger for when the request runs
- check `response.ok` before assuming success
- map the response into the same object shape your list UI expects
- retest after each small change
