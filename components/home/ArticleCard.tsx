import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Article } from '@/constants/Articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard ({ article }: ArticleCardProps) {
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
    <TouchableOpacity style={styles.cardContainer}>
      <Image 
        source={{ uri: article.imageUrl }} 
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.contentContainer}>
        <Text style={styles.category}>{article.category}</Text>
        <Text style={styles.title}>{article.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{article.description}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>€{article.price.toFixed(2)}</Text>
          <Text style={[styles.stock, { color: article.stock < 5 ? 'red' : 'green' }]}>
            {article.stock < 5 ? 'Low stock' : 'In stock'}
          </Text>
        </View>

        <View style={styles.footer}>
          {renderStars(article.ratings)}
          <Text style={styles.ratingText}>({article.ratings})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
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
});