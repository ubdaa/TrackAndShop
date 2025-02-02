import { Order } from "@/constants/Order";
import { Timestamp } from "firebase/firestore";
import { Trash } from "lucide-react-native";
import { View, TouchableOpacity, Alert, StyleSheet, Image, Text } from "react-native";

export default function OrderCard({ item }: { item: Order }) {

  const handleOrderPress = () => {
    Alert.alert("Détails de la commande");
  };

  const handleRemovePress = () => {
    Alert.alert("Supprimer la commande");
  };

  return (
    <TouchableOpacity onPress={() => { handleOrderPress() }}>
      <View style={styles.cartItem}>
        <Image
          source={{ uri: item.items[0].article.imageUrl }}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>Commande du {item.date.toDate().toLocaleDateString('fr-FR')} à {item.date.toDate().toLocaleTimeString('fr-FR')}</Text>
          <Text style={styles.itemPrice}>{item.total.toFixed(2)}€</Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
        >
          <Trash size={24} color="#e74c3c" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#2ecc71",
    marginVertical: 4,
  },
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    color: "#e74c3c",
    fontSize: 14,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  actionsContainer: {
    gap: 8,
  },
  checkoutButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
