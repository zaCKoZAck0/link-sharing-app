import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '@/types/user';
import { saveLocal } from '@/lib/saveLocal';

interface UserDataContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserDetailsContext = createContext<UserDataContextType | undefined>(undefined);

export function UserDetailsProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  

  return (
    <UserDetailsContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export function useUserDetails() {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error('useUserDetails must be used within a UserDetailsProvider');
  }
  return context;
}
