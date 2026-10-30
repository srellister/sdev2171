# Lesson 10 Troubleshooting Checklist

Use this guide when array state, `FlatList`, or the empty-state message does not behave the way you expect.

## Issue 1: The list does not appear at all
Likely cause:
- the array state is empty when you did not expect it
- `FlatList` is not receiving the correct `data`
- `FlatList` was not imported from `react-native`

Try first:
- confirm the React Native import includes `FlatList`
- confirm the array state exists
- confirm `data={yourArrayState}` is pointing to the right value
- test with 2 or 3 simple hard-coded items

Evidence of improvement:
- visible rows appear on screen

## Issue 2: Only one item appears when you expected several
Likely cause:
- the array only contains one item
- the repeated rendering pattern is wrong

Try first:
- inspect the array data shape
- confirm each object is separate
- confirm `renderItem` is using `item.label` or the correct field

Evidence of improvement:
- the number of visible rows matches the number of array items

## Issue 3: The list changed, but the empty-state message never appears
Likely cause:
- the condition is checking the wrong value
- the array was not actually cleared

Try first:
- confirm the condition uses the array length
- confirm the array becomes `[]` when you clear it
- retest after clearing all items

Evidence of improvement:
- the empty-state message appears when no items remain

## Issue 4: The list rows show blank or wrong text
Likely cause:
- `renderItem` is reading the wrong property name
- the item objects do not all use the same shape

Try first:
- confirm each object has the same field names
- confirm `renderItem` reads the correct field
- retest with one known item object

Evidence of improvement:
- each row shows the expected label text

## Issue 5: React warns about keys or rows behave inconsistently
Likely cause:
- items do not have stable `id` values
- `keyExtractor` is missing or incorrect

Try first:
- confirm each item has an `id`
- confirm `keyExtractor={(item) => item.id}`
- avoid reusing the same `id` for multiple items

Evidence of improvement:
- the list updates more predictably and the key warning is gone

## Issue 6: Your own project is too broken to continue
Likely cause:
- the lesson-09 baseline was not stable before list work started

Try first:
- stop editing the broken project
- compare your `src/app/details.js` to `example/dynamic-list-reference/src/app/details.js`
- repair one section at a time instead of rewriting the whole screen
- record the next step for restoring your own project

Evidence of improvement:
- you can still explain the list flow and continue the lesson
