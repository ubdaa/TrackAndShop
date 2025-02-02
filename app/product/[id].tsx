import { ShopContext } from "@/context/ShopContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Article } from '@/constants/Articles';
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const { id } = useLocalSearchParams();

  const router = useRouter();

  const shopContext = useContext(ShopContext);
  const articles = shopContext?.articles || [];

  // on récupère l'article en fonction de l'id
  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <View style={styles.modalContainer}>
        <Text>Article not found</Text>
      </View>
    );
  }

  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={16}
          color="#FFD700"
        />
      );
    }
    return <View style={styles.ratingContainer}>{stars}</View>;
  };

  return (
    <View style={styles.modalContainer}>
      <ScrollView style={styles.contentContainer}>
        {/* Image du produit */}
        <Image 
          source={{ uri: article.imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />

        {/* Contenu avec détails */}
        <View style={styles.contentContainer}>
          <Text style={styles.category}>{article.category}</Text>
          <Text style={styles.title}>{article.name}</Text>
          <Text style={styles.description}>{article.description}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{article.price.toFixed(2)}€</Text>
            <Text style={[styles.stock, { color: article.stock < 5 ? 'red' : 'green' }]}>
              {article.stock < 5 ? 'Peu de stock' : 'En stock'}
            </Text>
          </View>

          <View style={styles.footer}>
            {renderStars(article.ratings)}
            <Text style={styles.ratingText}>({article.ratings})</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.modalFooter}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => { shopContext?.addToCart(article, quantity); router.replace({ pathname: '/cart' }); }}
        >
          <Text style={styles.addButtonText}>Ajouter au panier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  contentContainer: {
    padding: 12,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    lineHeight: 22,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  stock: {
    fontSize: 12,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  modalFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: "100%",
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});