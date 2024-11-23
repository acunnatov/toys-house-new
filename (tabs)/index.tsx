import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕' },
    { id: 2, name: 'Burger', icon: '🍔' },
    { id: 3, name: 'Sushi', icon: '🍱' },
    { id: 4, name: 'Salad', icon: '🥗' },
    { id: 5, name: 'Dessert', icon: '🍰' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Keep the same JSX from HomeScreen.jsx */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Keep the same styles from HomeScreen.jsx
});
