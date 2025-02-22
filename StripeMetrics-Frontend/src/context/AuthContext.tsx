import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  appLogin: (user: User, token: string) => void;
  appLogout: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id?: number;
  email?: string;
}

const defaultAuthContextProps: AuthContextProps = {
  token: null,
  setToken: () => {},
  appLogin: () => {},
  appLogout: () => {},
  user: null,
  setUser: () => {},
}

const AuthContext = createContext<AuthContextProps>(defaultAuthContextProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const appLogin = (user: User, token: string) => {

  };

  const appLogout = () => {
  
  };

  return (
    <AuthContext.Provider value={{ token, setToken, appLogin, appLogout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);