import Constants from 'expo-constants';

export const config = {
  apiUrl: Constants.expoConfig?.extra?.apiUrl || 'http://localhost:4000/api',
  stripePublishableKey: Constants.expoConfig?.extra?.stripePublishableKey || '',
};

export const theme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4CAF50',
    background: '#F8F8F8',
    text: '#333333',
    textLight: '#666666',
    border: '#EEEEEE',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
}; 