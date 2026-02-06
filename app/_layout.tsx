import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="game-result" options={{ title: 'Game Result' }} />
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
    </Stack>
  );
}
