import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrdersScreen = () => {
  const orders = [
    { id: '1', status: 'Delivered', items: ['Pizza', 'Coke'], total: '$25.99', date: '2024-03-20' },
    { id: '2', status: 'In Progress', items: ['Burger', 'Fries'], total: '$18.50', date: '2024-03-21' },
  ];

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Order #{item.id}</Text>
        <Text style={[
          styles.orderStatus,
          { color: item.status === 'Delivered' ? '#4CAF50' : '#FF9800' }
        ]}>{item.status}</Text>
      </View>
      <Text style={styles.orderItems}>{item.items.join(', ')}</Text>
      <View style={styles.orderFooter}>
        <Text style={styles.orderTotal}>{item.total}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#333',
  },
  listContainer: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  orderItems: {
    color: '#666',
    marginBottom: 10,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
  },
  orderDate: {
    color: '#999',
  },
});

export default OrdersScreen; 