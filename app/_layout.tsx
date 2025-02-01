import { ShopProvider } from '@/context/ShopContext';
import { UserProvider } from '@/context/UserContext';
import { Stack } from 'expo-router/stack';

export default function Layout() {

  return (
    <ShopProvider>
      <UserProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />  
          <Stack.Screen
            name="product/[id]"
            options={{
              presentation: 'containedModal',
            }}
          />
        </Stack>
      </UserProvider>
    </ShopProvider>
  );
}