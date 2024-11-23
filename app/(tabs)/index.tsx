import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ProductCard from '../../components/ProductCard';

export default function HomeScreen() {
  const { user } = useAuth();
  const theme = useTheme();

  const products = [
    {
      id: '1',
      name: 'Nike Shoes',
      price: 12.00,
      image: 'https://via.placeholder.com/300',
      rating: 4.5,
      isNew: true,
    },
    {
      id: '2',
      name: 'Sports Shoes',
      price: 100.00,
      image: 'https://via.placeholder.com/300',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Running Shoes',
      price: 100.00,
      image: 'https://via.placeholder.com/300',
      rating: 4.7,
    },
    {
      id: '4',
      name: 'Training Shoes',
      price: 100.00,
      image: 'https://via.placeholder.com/300',
      rating: 4.6,
    },
  ];

  const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Running' },
    { id: 3, name: 'Training' },
    { id: 4, name: 'Basketball' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={theme.colors.textLight} />
            <Text style={styles.searchText}>Search for shoes</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={20} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        {/* Promotion Banner */}
        <View style={styles.promotionBanner}>
          <View style={styles.promotionContent}>
            <Text style={styles.promotionText}>50% OFF</Text>
            <Text style={styles.promotionSubtext}>On everything today</Text>
          </View>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryButton}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products Grid */}
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onPress={() => {}}
              onFavorite={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  searchText: {
    marginLeft: 10,
    color: '#999',
  },
  filterButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
  },
  promotionBanner: {
    margin: 20,
    height: 150,
    backgroundColor: '#E8F0FF',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  promotionContent: {
    maxWidth: '60%',
  },
  promotionText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  promotionSubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
}); 