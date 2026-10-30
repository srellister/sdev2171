# Lesson 11 Starter Snippets

Use these snippets when you need safe, focused debugging patterns for this lesson.

## Log one state value clearly
```js
console.log('studySteps length', studySteps.length);
```

Watch for this result:
- first check the Expo terminal where `npm run start` is running
- if React Native DevTools is open, also check the `Console` tab

## Log one item object inside `renderStep`
```js
function renderStep({ item, index }) {
  console.log('renderStep item', index, item);

  return (
    <View>
      <Text>{item.label}</Text>
    </View>
  );
}
```

## Compare two related values
```js
console.log('draftStep', draftStep);
console.log('last study step', studySteps[studySteps.length - 1]);
```

## Check the condition behind an empty state
```js
console.log('studySteps length before empty-state check', studySteps.length);
```

## Temporary guard-style debugging
```js
if (!item.label) {
  console.warn('Missing label on item', item);
}
```

## Important reminders
- log the value you actually need to inspect
- label each log so the output is readable
- check the Expo terminal or DevTools Console right after saving
- remove or reduce noisy logs after the main bug is understood
- compare one symptom to one likely code area first
- retest after each small change
