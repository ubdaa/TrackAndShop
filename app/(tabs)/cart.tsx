import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { ShopContext, CartItem } from "@/context/ShopContext";
import Button from "@/components/Button";
import { auth } from "@/firebaseConfig";
import { UserContext } from "@/context/UserContext";

export default function Cart() {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return <Text>Shop context non disponible.</Text>;
  }

  const { cart, updateCartItem, removeFromCart, clearCart } = shopContext;

  const totalPrice = cart.reduce(
    (total, item) => total + item.article.price * item.quantity,
    0
  );

  const user = useContext(UserContext);

  const renderCartItem = ({ item }: { item: CartItem }) => {
    return (
      <View style={styles.cartItem}>
        <Image
          source={{ uri: item.article.imageUrl }}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.article.name}</Text>
          <Text style={styles.itemPrice}>{item.article.price.toFixed(2)}€</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => {
                if (item.quantity > 1) {
                  updateCartItem(item.article.id, item.quantity - 1);
                } else {
                  Alert.alert(
                    "Retirer l'article",
                    "Voulez-vous retirer cet article du panier ?",
                    [
                      { text: "Annuler", style: "cancel" },
                      {
                        text: "Supprimer",
                        onPress: () => removeFromCart(item.article.id),
                      },
                    ]
                  );
                }
              }}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => updateCartItem(item.article.id, item.quantity + 1)}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => removeFromCart(item.article.id)}
          style={styles.removeButton}
        >
          <Text style={styles.removeButtonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>Votre Panier</Text>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Votre panier est vide.</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.article.id}
            renderItem={renderCartItem}
            contentContainerStyle={styles.cartList}
          />
        )}

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: {totalPrice.toFixed(2)}€</Text>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            onPress={() => Alert.alert("Fonctionnalité non implémentée")}
            title={!user ? "Connectez-vous pour commander" : "Commander"}
            disabled={cart.length === 0 || !user}
          />
          <Button onPress={clearCart} title="Vider le panier" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 32,
  },
  cartList: {
    paddingBottom: 16,
  },
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#3498db",
    borderRadius: "100%",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
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
