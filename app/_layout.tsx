import { OrderProvider } from '@/context/OrderContext';
import { ShopProvider } from '@/context/ShopContext';
import { UserProvider } from '@/context/UserContext';
import { Stack } from 'expo-router/stack';

export default function Layout() {

  return (
    <OrderProvider>
      <ShopProvider>
        <UserProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="product/[id]"
              options={{
                presentation: 'modal',
                headerTitle: 'Produit',
              }}
            />
            <Stack.Screen
              name="order/[id]"
              options={{
                presentation: 'modal',
                headerTitle: 'Commande',
              }}
            />
          </Stack>
        </UserProvider>
      </ShopProvider>
    </OrderProvider>
  );
}