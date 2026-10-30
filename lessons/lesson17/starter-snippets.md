# Lesson 17 Starter Snippets

Use these snippets only as targeted references while building. Do not paste blindly without checking where each piece belongs.

## 1. Form Screen Imports And Hook Setup

```js
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useStudyPlan } from '../context/StudyPlanContext';

export default function SessionFormScreen() {
  const router = useRouter();
  const { selectedSteps, saveSession } = useStudyPlan();
```

## 2. Local Draft State

```js
const [title, setTitle] = useState('');
const [goal, setGoal] = useState('');
const [errorMessage, setErrorMessage] = useState('');
```

## 3. Controlled Input Pattern

```js
<TextInput
  value={title}
  onChangeText={setTitle}
  placeholder="Enter a short session title"
/>
```

## 4. Simple Validation Check

```js
const trimmedTitle = title.trim();
const trimmedGoal = goal.trim();

if (trimmedTitle.length === 0) {
  setErrorMessage('Session title is required before you can save this plan.');
  return;
}

if (selectedSteps.length === 0) {
  setErrorMessage('Choose at least one study step before saving the session.');
  return;
}
```

## 5. Save Committed Result Into Shared State

```js
setErrorMessage('');
saveSession({
  title: trimmedTitle,
  goal: trimmedGoal,
  selectedStepCount: selectedSteps.length,
});
router.push('/plan');
```

## 6. Full Submit Handler Scaffold

```js
function handleSubmit() {
  const trimmedTitle = title.trim();
  const trimmedGoal = goal.trim();

  if (trimmedTitle.length === 0) {
    setErrorMessage('Session title is required before you can save this plan.');
    return;
  }

  if (selectedSteps.length === 0) {
    setErrorMessage('Choose at least one study step before saving the session.');
    return;
  }

  setErrorMessage('');
  saveSession({
    title: trimmedTitle,
    goal: trimmedGoal,
    selectedStepCount: selectedSteps.length,
  });
  router.push('/plan');
}
```

## 7. Validation Message Display

```js
{errorMessage ? (
  <View>
    <Text>{errorMessage}</Text>
  </View>
) : null}
```

## 8. Shared Result Display

```js
<Text>{savedSession ? savedSession.title : 'No saved session yet'}</Text>
```

```js
<Text>{savedSession ? savedSession.selectedStepCount : 0}</Text>
```

## 9. Full Form Screen Wiring Skeleton

```js
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useStudyPlan } from '../context/StudyPlanContext';

export default function SessionFormScreen() {
  const router = useRouter();
  const { selectedSteps, saveSession } = useStudyPlan();
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit() {
    const trimmedTitle = title.trim();
    const trimmedGoal = goal.trim();

    if (trimmedTitle.length === 0) {
      setErrorMessage('Session title is required before you can save this plan.');
      return;
    }

    if (selectedSteps.length === 0) {
      setErrorMessage('Choose at least one study step before saving the session.');
      return;
    }

    setErrorMessage('');
    saveSession({
      title: trimmedTitle,
      goal: trimmedGoal,
      selectedStepCount: selectedSteps.length,
    });
    router.push('/plan');
  }

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter a short session title"
      />
      <TextInput
        value={goal}
        onChangeText={setGoal}
        placeholder="Optional focus note"
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <Pressable onPress={handleSubmit}>
        <Text>Save session summary</Text>
      </Pressable>
    </View>
  );
}
```
