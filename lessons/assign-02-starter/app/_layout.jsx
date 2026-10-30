import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: 'Gig Home' }}
      />
      <Stack.Screen name="entry" options={{ title: 'Gig Entry' }} />
      <Stack.Screen name="metrics" options={{ title: 'Gig Metrics' }} />
    </Stack>
  );
}
