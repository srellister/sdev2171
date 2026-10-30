# Context Flow Reference

Use this guide to explain what is happening after the Context refactor.

## The Flow In This Lesson
1. the provider owns the selected-step state
2. the details screen reads and updates that shared value
3. the plan screen reads and updates that same shared value
4. both screens stay synchronized because they use one source of truth

## Before Lesson 16
- the details screen owned its own selected-step state
- the plan screen received a copied snapshot
- each screen could change its own version

## After Lesson 16
- the provider owns the selected-step feature
- both screens consume the same shared hook
- removing a step on one screen changes the shared value for the other screen too

## Useful Sentence Starter
“The provider owns the selected-step list, and both screens consume that same shared value through the custom hook.”
