import React, { useContext } from 'react';
import { OrderContext } from '@/context/OrderContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PROVIDER_GOOGLE } from "react-native-maps";
//import MapView from '@/components/maps/mapview';

export default function OrderDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    return <Text>Order context non disponible.</Text>;
  }

  const { orders } = orderContext;
  const order = orders.find(order => order.orderId === id);

  if (!order) {
    return <Text>Commande non trouvée.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Détails de la commande - n°{order.orderId}</Text>
      <Text style={styles.subHeader}>Date: {order.date.toDate().toLocaleDateString('fr-FR')} à {order.date.toDate().toLocaleTimeString('fr-FR')}</Text>

      <View style={styles.itemsContainer}>
        {order.items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.article.name}</Text>
            <Text style={styles.itemQuantity}>Quantité : {item.quantity}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.total}>Total : {order.total.toFixed(2)}€</Text>

      <View style={styles.trackingContainer}>
        <Text style={styles.trackingHeader}>Suivi du colis</Text>
        {/* uniquement pour ios et android */}
        {/* <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
        >
        </MapView> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 4,
  },
  itemsContainer: {
    marginVertical: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 16,
  },
  trackingContainer: {
    marginTop: 16,
  },
  trackingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  map: {
    width: '100%',
    height: 300,
  },
});