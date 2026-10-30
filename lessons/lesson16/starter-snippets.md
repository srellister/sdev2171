# Lesson 16 Starter Snippets

Use these snippets only as targeted references while building. Do not paste blindly without checking where each piece belongs.

## 1. Context File Skeleton

```js
import { createContext, useContext, useState } from 'react';

const StudyPlanContext = createContext(null);

export function StudyPlanProvider({ children }) {
  const [selectedSteps, setSelectedSteps] = useState([]);

  function toggleStep(step) {
    setSelectedSteps((currentSteps) => {
      const alreadySelected = currentSteps.some((entry) => entry.id === step.id);

      if (alreadySelected) {
        return currentSteps.filter((entry) => entry.id !== step.id);
      }

      return [...currentSteps, step];
    });
  }

  function removeStep(id) {
    setSelectedSteps((currentSteps) => currentSteps.filter((step) => step.id !== id));
  }

  const value = {
    selectedSteps,
    toggleStep,
    removeStep,
  };

  return <StudyPlanContext.Provider value={value}>{children}</StudyPlanContext.Provider>;
}

export function useStudyPlan() {
  const context = useContext(StudyPlanContext);

  if (!context) {
    throw new Error('useStudyPlan must be used inside StudyPlanProvider');
  }

  return context;
}
```

## 2. Layout-Level Provider Placement

```tsx
import { Stack } from 'expo-router';
import { StudyPlanProvider } from '../context/StudyPlanContext';

export default function Layout() {
  return (
    <StudyPlanProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
        <Stack.Screen name="plan" options={{ title: 'Plan' }} />
      </Stack>
    </StudyPlanProvider>
  );
}
```

## 3. Shared Hook Usage In A Screen

```js
import { useStudyPlan } from '../context/StudyPlanContext';

export default function DetailsScreen() {
  const { selectedSteps, toggleStep } = useStudyPlan();

  // keep fetch, loading, and error state local here
}
```

## 4. Shared Hook Usage In The Second Screen

```js
import { useStudyPlan } from '../context/StudyPlanContext';

export default function PlanScreen() {
  const { selectedSteps, removeStep } = useStudyPlan();
}
```

## 5. Keep These Local

```js
const [isLoading, setIsLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState('');
```

These still belong in the fetch screen for this lesson.
