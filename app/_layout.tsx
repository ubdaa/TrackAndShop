import { UserProvider } from '@/context/UserContext';
import { Stack } from 'expo-router/stack';

export default function Layout() {

  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}