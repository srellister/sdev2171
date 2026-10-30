# Lesson 10 Starter Snippets

Use these snippets when you need the minimum list-rendering syntax for this lesson.

## Array state in the screen
```js
const [studySteps, setStudySteps] = useState([
  { id: '1', label: 'Charge laptop' },
  { id: '2', label: 'Pack notebook' },
]);
```

## Repetition with `map`
```js
studySteps.map((step) => (
  <Text key={step.id}>{step.label}</Text>
))
```

## Main list pattern with `FlatList`
```js
import { FlatList, Text } from 'react-native';

<FlatList
  data={studySteps}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.label}</Text>}
/>
```

## Empty-state conditional rendering
```js
{studySteps.length === 0 ? (
  <Text>No study steps yet. Add one to build the list.</Text>
) : (
  <FlatList
    data={studySteps}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Text>{item.label}</Text>}
  />
)}
```

## Full conversion scaffold for add and clear actions
```js
import { FlatList, Pressable, Text, TextInput } from 'react-native';

const [draftStep, setDraftStep] = useState('');
const [studySteps, setStudySteps] = useState([
  { id: '1', label: 'Charge laptop' },
  { id: '2', label: 'Pack notebook' },
]);

function handleAddStep() {
  const trimmedStep = draftStep.trim();

  if (trimmedStep.length === 0) {
    return;
  }

  setStudySteps((currentSteps) => [
    ...currentSteps,
    { id: String(Date.now()), label: trimmedStep },
  ]);
  setDraftStep('');
}

function handleClearSteps() {
  setStudySteps([]);
}
```

## Add one new item to the array
```js
setStudySteps((currentSteps) => [
  ...currentSteps,
  { id: String(Date.now()), label: draftStep.trim() },
]);
```

## Bridge from lesson 09
- remove the old lesson-09 preview target such as `StatePreviewCard`
- remove or replace `profileName` and `statusText` if they only supported the old single preview flow
- keep the input pattern only if you want to reuse it for `draftStep`
- replace the old preview area with:
  - one `FlatList` when items exist
  - one empty-state message when the array is empty

## Important reminders
- the array belongs to screen state
- each item should have a stable `id`
- importing `FlatList` is required once the screen switches from simple text output to list output
- `renderItem` explains one repeated row
- the empty state should appear when the array has no items
- keep the repeated row simple in this lesson
