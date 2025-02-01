import { ShopContext } from "@/context/ShopContext";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  const { id } = useLocalSearchParams();

  const shopContext = useContext(ShopContext);
  const articles = shopContext?.articles || [];

  // on récupère l'article en fonction de l'id
  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <View style={styles.container}>
        <Text>Article not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{article.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});