# Lesson 09 State And Props Reference

Use this guide when you need a plain-language reminder of what state and props mean in this lesson.

## Plain-Language Definitions
- **state**: data a component owns and can update
- **props**: data a parent component passes into a child component
- **parent component**: the component that owns the current values and sends them downward
- **child component**: the component that receives values and renders them
- **render**: the UI output React creates from the current values

## The lesson-09 model
For this lesson:
- the detail screen is the parent
- the detail screen owns the changing values with `useState`
- the child preview card receives those values through props
- when the state changes, the child card receives new props and re-renders

## Short comparison
### State
- belongs to the component that created it
- changes when the component calls its state update function
- drives interactive UI behaviour

### Props
- arrive from a parent component
- are read by the child component
- should be treated as read-only inputs

## One-direction data flow
Use this mental model:
1. the parent owns the current value
2. the parent passes the value into the child
3. the child renders the value it received
4. if the parent state changes, the child gets a new prop value

## Practical lesson-09 example
- `draftName` is parent-owned state
- `profileName` is parent-owned state
- `statusText` is parent-owned state
- `StatePreviewCard` receives `name` and `statusText` as props

## Debug rule
If the child output is wrong:
1. check the parent state value first
2. check the prop name used in the parent JSX
3. check the prop name read inside the child component
4. check whether the child actually renders that prop

## Scope boundary
This lesson is not about:
- global state
- Context
- reducers
- complex nested state objects
- advanced component composition

This lesson is about:
- local state
- one parent-child relationship
- clear prop passing
- visible UI updates after state changes
