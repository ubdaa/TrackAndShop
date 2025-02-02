import { UserContext } from "@/context/UserContext";
import { auth, db } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Alert, View, StyleSheet, Text, FlatList } from "react-native";
import Button from "../Button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Articles } from "@/constants/Articles";
import { OrderContext } from "@/context/OrderContext";
import { Order } from "@/constants/Order";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderCard from "./OrderCard";

export default function AccountProfile() {
  const router = useRouter();
  const { userProfile } = useContext(UserContext);
  
  const handleLogout = async () => {
    try {
      console.log(userProfile);
      await signOut(auth);
      router.replace("/(tabs)/account");
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
      Alert.alert("Erreur", "La déconnexion a échoué. Veuillez réessayer.");
    }
  };

  if (!auth.currentUser) {
    return <Text>Utilisateur non connecté.</Text>;
  }

  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    return <Text>Order context non disponible.</Text>;
  }

  const { addOrder } = orderContext;

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      orderContext.clearOrders();
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        if (order.userMail === auth.currentUser?.email) {
          addOrder(order as Order);
        }
      });
    };

    fetchOrders();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Mon compte</Text>
        <Text style={styles.subtitle}>Bienvenue {userProfile?.email}</Text>
        <Button title="Se déconnecter" onPress={handleLogout} />

        <View style={{borderBottomWidth: 1, marginVertical: 20, borderColor: 'gray' }}></View>
        <Text style={styles.title}>Mes commandes</Text>

        {orderContext.orders.length === 0 ? (
          <Text style={styles.subtitle}>Aucune commande passée.</Text>
        ) : (
          <FlatList
            data={orderContext.orders}
            renderItem={({ item }) => (
              <OrderCard order={item} />
            )}
            keyExtractor={(item) => item.orderId}
            style={{ marginTop: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
});