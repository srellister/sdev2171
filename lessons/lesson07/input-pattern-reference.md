# Lesson 07 Input Pattern Reference

Use this guide during class and while completing the exercise.

## The lesson-07 interaction pattern

| Part | Role |
| --- | --- |
| `TextInput` | captures the user's text |
| `onChangeText` | reacts when the text changes |
| `Pressable` | gives the user an action to trigger |
| `onPress` | runs the screen action |
| response area | shows what changed after the interaction |
| `useState` | lets the screen temporarily remember text for this lesson |

## Core idea
- The user enters text.
- The screen receives that text.
- The user presses an action.
- The screen shows a visible response.

## The lesson flow
1. The user opens the detail screen.
2. The user types in the input field.
3. The input event updates the text used by the screen.
4. The user presses the action button.
5. The screen shows a visible response based on that interaction.

## Simple flow diagram
`type text -> text changes -> press button -> response updates`

## Why this matters
- Input makes the screen interactive.
- Events connect the user's action to screen behaviour.
- Visible feedback helps the user understand that the action worked.

## Important framing
- Some example code may use a temporary screen-memory helper.
- In this lesson, the main concept is input, events, and visible behaviour, not formal state theory.
- For today, the screen temporarily remembers two values:
  - the typed text
  - the response text shown after the action
- In code, the helper for that temporary memory is `useState`.
