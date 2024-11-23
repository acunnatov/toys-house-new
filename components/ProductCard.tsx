import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  onPress?: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
};

export default function ProductCard({
  name,
  price,
  image,
  rating,
  isNew,
  onPress,
  onFavorite,
  isFavorite,
}: ProductCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity style={[styles.card, theme.shadows.small]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={onFavorite}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={20} 
            color={isFavorite ? theme.colors.primary : theme.colors.text} 
          />
        </TouchableOpacity>
        {isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          {rating && (
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 6,
  },
  newBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF385C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  newBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#484848',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF385C',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#767676',
  },
}); 