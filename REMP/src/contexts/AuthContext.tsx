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
// const MyComponent = (props: { children: React.ReactNode }) => {
//   const { children } = props;
// }
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const raw = localStorage.getItem('user');
  const initialUser: User | null = raw ? JSON.parse(raw)?.user ?? null : null;//如果raw有值就解析他的user{ role: 'Agent', name: 'Alice' };，如果undefined，就返回null，如果raw无值，直接就是null

  const [user, setUser] = useState<User | null>(initialUser);
  return (
    //是你传给上下文的实际“值”。它是一个对象，包含两个东西：user, setUser
    <AuthContext.Provider value={{ user, setUser }}> 
      {children}
    </AuthContext.Provider>
  );
};
