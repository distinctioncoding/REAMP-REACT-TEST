import React, { createContext, useContext, useState } from 'react';

interface User {
  role: 'Admin' | 'Agent' | 'PhotographyCompany';
  [key: string]: any;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const raw = localStorage.getItem('user');
  const initialUser: User | null = raw ? JSON.parse(raw)?.user ?? null : null;

  const [user, setUser] = useState<User | null>(initialUser);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
