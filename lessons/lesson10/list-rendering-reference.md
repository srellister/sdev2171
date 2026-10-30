# Lesson 10 List Rendering Reference

Use this guide when you need a plain-language reminder of how repeated data becomes repeated UI in this lesson.

## Plain-Language Definitions
- **array**: a data structure that stores multiple items in order
- **list item**: one data object that will become one repeated row on screen
- **render**: create UI output from the current data
- **conditional rendering**: show different UI depending on a condition
- **empty state**: the message or UI shown when a list has no items

## The lesson-10 model
For this lesson:
- the detail screen owns an array in state
- each object in the array represents one row
- the screen uses `FlatList` to render the repeated rows
- the screen shows an empty-state message when the array has no items

## Simple repetition pattern
Use this mental model:
1. store repeated items in an array
2. describe how one item should render
3. repeat that rendering for each item in the array
4. if the array becomes empty, switch to the empty-state message

## `map` versus `FlatList`
### `map`
- useful for understanding the repetition pattern
- turns each array item into one JSX result
- often the easiest first mental model

### `FlatList`
- built into React Native
- designed for flat list rendering
- takes `data`, `renderItem`, and often `keyExtractor`
- is the main implementation target for this lesson

## Empty-state rule
Use this mental model:
- if `items.length > 0`, show the list
- if `items.length === 0`, show the empty-state message

## Debug rule
If the list output is wrong:
1. check the array state first
2. check that `FlatList` receives the correct `data`
3. check `renderItem`
4. check the empty-state condition

## Scope boundary
This lesson is not about:
- remote API data
- nested list structures
- advanced list performance tuning
- complex filtering and sorting

This lesson is about:
- array state
- repeated UI
- `FlatList`
- simple empty-state conditional rendering
