# Lesson 07 Starter Snippets

Use these snippets when you need the minimum interaction syntax for this lesson.

## TextInput with text-change event
```js
import { useState } from 'react';

const [note, setNote] = useState('');

<TextInput
  value={note}
  onChangeText={setNote}
  placeholder="Type a short note"
/>
```

## Pressable with press event
```js
const [responseText, setResponseText] = useState('No preview yet.');

function handlePreview() {
  setResponseText(`Preview: ${note}`);
}

<Pressable onPress={handlePreview}>
  <Text>Preview response</Text>
</Pressable>
```

## Minimal response area
```js
<View>
  <Text>{responseText}</Text>
</View>
```

## Important reminders
- example snippets assume these changing values exist in the screen code
- `useState` is the helper that lets the screen temporarily remember those values
- `TextInput` captures the user's text
- `onChangeText` reacts when the text changes
- `Pressable` gives the user something to activate
- `onPress` reacts when the press happens
- the screen should show a visible result after the interaction
- if example code uses a changing value, treat it as an implementation detail for this lesson
