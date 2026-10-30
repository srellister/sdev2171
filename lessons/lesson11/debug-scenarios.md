# Lesson 11 Debug Scenarios

Instructor-only guide for the in-class debugging lab.

## Usage
- Begin from a working lesson-10 list screen or the known-good reference app.
- Introduce only one bug at a time.
- After students investigate and fix one bug, restore the working baseline before moving to the next scenario.
- Run Scenario 3 for the whole class or as a required checkpoint round so every student reads one real warning or runtime error.

## Scenario 1: Blank Rows In The List
### Inject this bug
In `src/app/details.js`, change:

```js
<Text style={styles.stepLabel}>{item.label}</Text>
```

to:

```js
<Text style={styles.stepLabel}>{item.text}</Text>
```

### Expected symptom
- the list still renders rows
- the row numbers appear
- the label text is blank or missing

### Intended debugging path
- reproduce the symptom
- log one `item` object inside `renderStep`
- compare the logged field names to the JSX

### Expected fix
- restore `item.label`

## Scenario 2: Empty State Never Appears
### Inject this bug
In `src/app/details.js`, change:

```js
{studySteps.length === 0 ? (
```

to:

```js
{studySteps.length < 0 ? (
```

### Expected symptom
- the clear action runs
- the list disappears or behaves oddly
- the empty-state message never appears

### Intended debugging path
- reproduce by clearing the list
- log `studySteps.length`
- compare the runtime value to the condition

### Expected fix
- restore `studySteps.length === 0`

## Scenario 3: List Does Not Render After Refactor
### Inject this bug
In `src/app/details.js`, remove `FlatList` from the React Native import.

### Expected symptom
- the screen fails to behave correctly when the list section loads
- a runtime error or missing component symptom appears

### Intended debugging path
- read the warning or error text exactly
- compare the imports to the known-good reference app
- restore the missing import

### Expected fix
- restore `FlatList` in the import line

## Scenario 4: New Items Are Added With The Wrong Shape
### Inject this bug
In `handleAddStep`, change:

```js
{ id: String(Date.now()), label: trimmedStep },
```

to:

```js
{ id: String(Date.now()), text: trimmedStep },
```

### Expected symptom
- initial items still render correctly
- newly added items appear blank

### Intended debugging path
- reproduce by adding one new item
- log the last item in the array
- compare the new object shape to the old object shape

### Expected fix
- restore the `label` property

## Instructor Reminder
- Do not combine scenarios unless students are already handling one-bug debugging confidently.
- Keep the lab bounded to observation, logging, comparison, and retesting.
