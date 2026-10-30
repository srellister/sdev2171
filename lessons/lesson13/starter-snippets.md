# Lesson 13 Starter Snippets

Use these snippets when you need safe, focused patterns for this lesson.

## Full minimum placement example
```js
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { getApiBaseUrl } from '../lib/apiBaseUrl';

export default function DetailsScreen() {
  const [remoteSteps, setRemoteSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  async function loadRemoteSteps(options = {}) {
    const simulateError = options.simulateError === true;
    const endpoint = simulateError
      ? `${getApiBaseUrl()}/study-steps?delay=1200&error=1`
      : `${getApiBaseUrl()}/study-steps?delay=1200`;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.error ?? `Response status: ${response.status}`);
      }

      const data = await response.json();
      setRemoteSteps(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRemoteSteps();
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Loading study steps...</Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View>
        <Text>Request failed</Text>
        <Text>{errorMessage}</Text>
        <Pressable onPress={() => loadRemoteSteps()}>
          <Text>Try again</Text>
        </Pressable>
      </View>
    );
  }

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
- `ActivityIndicator`, `useEffect`, and `getApiBaseUrl` must all be imported
- the lesson-13 local backend already returns `{ id, label }`
- the preferred failure-test pattern is a helper option, not manual URL rewriting

## Minimal request-state values
```js
const [remoteSteps, setRemoteSteps] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState('');
```

## One request helper with loading and error handling
```js
async function loadRemoteSteps() {
  setIsLoading(true);
  setErrorMessage('');

  try {
    const response = await fetch(`${getApiBaseUrl()}/study-steps?delay=1200`);

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.error ?? `Response status: ${response.status}`);
    }

    const data = await response.json();
    setRemoteSteps(data);
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setIsLoading(false);
  }
}
```

## One visible loading branch
```js
if (isLoading) {
  return (
    <View>
      <ActivityIndicator size="large" />
      <Text>Loading study steps...</Text>
    </View>
  );
}
```

## One visible error branch with retry
```js
if (errorMessage) {
  return (
    <View>
      <Text>Request failed</Text>
      <Text>{errorMessage}</Text>
      <Pressable onPress={() => loadRemoteSteps()}>
        <Text>Try again</Text>
      </Pressable>
    </View>
  );
}
```

## One simulated error request
```js
loadRemoteSteps({ simulateError: true });
```

## One helper version with a simulated error path
```js
async function loadRemoteSteps(options = {}) {
  const simulateError = options.simulateError === true;
  const endpoint = simulateError
    ? `${getApiBaseUrl()}/study-steps?delay=1200&error=1`
    : `${getApiBaseUrl()}/study-steps?delay=1200`;

  setIsLoading(true);
  setErrorMessage('');

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.error ?? `Response status: ${response.status}`);
    }

    const data = await response.json();
    setRemoteSteps(data);
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setIsLoading(false);
  }
}
```

## Important reminders
- if your old lesson-12 screen still uses JSONPlaceholder, switch it to the local backend before you add request-state UI
- keep the lesson-12 data shape the same
- clear the old error message before each new request
- stop loading in both success and failure cases
- keep success, loading, and error branches separate enough to read quickly
- retest the normal request after every simulated failure
