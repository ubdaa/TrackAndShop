import React, { useContext, useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { db } from '@/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { Article } from '@/constants/Articles';
import ArticleCard from '@/components/home/ArticleCard';
import { ShopContext } from '@/context/ShopContext';

export default function Index() {

  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return (
      <View style={styles.center}>
        <Text>Shop context is not available.</Text>
      </View>
    );
  }

  const { articles, setArticles } = shopContext;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData: Article[] = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        })) as Article[];
        setArticles(articlesData);
      } catch (err) {
        console.error('Erreur lors de la récupération des articles:', err);
        setError('Erreur lors de la récupération des articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});