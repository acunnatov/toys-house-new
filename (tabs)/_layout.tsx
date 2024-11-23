import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'index':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'orders':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerShown: false 
        }} 
      />
      <Tabs.Screen 
        name="orders" 
        options={{ 
          title: 'Orders',
          headerShown: false 
        }} 
      />
      <Tabs.Screen 
        name="cart" 
        options={{ 
          title: 'Cart',
          headerShown: false 
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          headerShown: false 
        }} 
      />
    </Tabs>
  );
}
