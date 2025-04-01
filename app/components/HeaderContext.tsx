'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuState = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenuState must be used within a MenuProvider');
  return context;
};