# Lesson 06 Starter Snippets

Use these snippets when you need the minimum Expo Router syntax for this lesson.

## Stack layout
```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
```

## Forward navigation
```js
import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/details')}>
      <Text>Open details</Text>
    </Pressable>
  );
}
```

## Back navigation
```js
import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()}>
      <Text>Go back</Text>
    </Pressable>
  );
}
```

## Static screen titles
```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}
```

## Important reminders
- `useRouter()` must be called inside a React component
- route file names and pushed paths must match
- `index.js` is the first route in this lesson flow
- route files become screens automatically in this lesson
- `Stack.Screen` is optional here and only adds simple options such as titles
- if a route does not open, inspect the file name before changing the action
- if the whole flow fails, inspect `_layout.tsx` and confirm it returns `Stack`
