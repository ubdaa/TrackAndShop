// UserContext.tsx
import React, { createContext, useState } from 'react';

interface UserProfile {
  name?: string;
  photoUrl?: string;
  email?: string;
  // Ajoutez d'autres champs selon vos besoins
}

interface UserContextProps {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  userProfile: null,
  setUserProfile: () => {}
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
