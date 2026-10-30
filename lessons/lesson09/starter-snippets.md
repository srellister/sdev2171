# Lesson 09 Starter Snippets

Use these snippets when you need the minimum state-and-props syntax for this lesson.

## Local state in the parent screen
```js
import { useState } from 'react';

const [draftName, setDraftName] = useState('');
const [profileName, setProfileName] = useState('Student');
const [statusText, setStatusText] = useState('No preview yet.');
```

## One simple update handler
```js
function handleUpdateCard() {
  const trimmedName = draftName.trim();

  if (trimmedName.length === 0) {
    setProfileName('Student');
    setStatusText('Type a short name first.');
    return;
  }

  setProfileName(trimmedName);
  setStatusText(`Preview updated for ${trimmedName}.`);
}
```

## Child component that receives props
```js
function StatePreviewCard({ name, statusText }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{statusText}</Text>
    </View>
  );
}
```

## Passing props from the parent
```js
<StatePreviewCard
  name={profileName}
  statusText={statusText}
/>
```

## Full extraction scaffold
```js
// src/components/StatePreviewCard.js
import { Text, View } from 'react-native';

export default function StatePreviewCard({ name, statusText }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{statusText}</Text>
    </View>
  );
}
```

```js
// src/app/details.js
import StatePreviewCard from '../components/StatePreviewCard';

<StatePreviewCard
  name={profileName}
  statusText={statusText}
/>
```

## Important reminders
- `useState` lets the parent screen own changing values
- the parent decides when state changes
- props are values sent from the parent into the child
- prop names must match on both sides
- the child should render what it receives
- do not introduce complex state objects for this lesson unless the instructor explicitly asks for that extension
