// contexts/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Interface untuk tipe data pengguna
interface User {
  id: number;
  name: string;
  email: string;
}

// Interface untuk tipe data context
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Membuat context dengan tipe data UserContextType
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

// Component provider untuk UserContext
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook untuk penggunaan UserContext
export const useUser = (): UserContextType => useContext(UserContext);

export default UserContext;
