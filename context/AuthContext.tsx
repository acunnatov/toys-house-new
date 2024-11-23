import { createContext, useContext, useState, useEffect } from 'react';
import { getToken, saveToken, removeToken } from '../utils/storage';
import { fetchApi } from '../utils/api';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const token = await getToken();
      if (token) {
        const response = await fetchApi<User>('/user/profile');
        if (response.success && response.data) {
          setUser(response.data);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const response = await fetchApi<{ token: string }>('/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.success && response.data?.token) {
      await saveToken(response.data.token);
      await loadUser();
      return true;
    }
    return false;
  }

  async function signUp(name: string, email: string, password: string) {
    const response = await fetchApi<{ token: string }>('/user/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });

    if (response.success && response.data?.token) {
      await saveToken(response.data.token);
      await loadUser();
      return true;
    }
    return false;
  }

  async function signOut() {
    await removeToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 