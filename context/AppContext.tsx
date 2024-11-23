import { createContext, useContext, useState } from 'react';

type AppContextType = {
  cartItems: { [key: string]: number };
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  user: any | null;
  setUser: (user: any) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState(null);

  const addToCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: ((prev as {[key: string]: number})[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(((prev as {[key: string]: number})[itemId] || 0) - 1, 0)
    }));
  };

  return (
    <AppContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      user,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 