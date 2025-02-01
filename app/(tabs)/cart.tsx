import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Cart() {

  const shopContext = useContext(ShopContext);
  const cart = shopContext ? shopContext.cart : [];

  return (
    <View>
      <Text>Pannier</Text>
      <Text>{cart.length} produits dans votre pannier</Text>
    </View>
  );
}
