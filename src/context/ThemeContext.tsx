'use client'

import { createContext, useState, ReactNode } from "react";

// 🟦 Définition des types du contexte
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 🟦 Valeur initiale du contexte
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// 🟦 Type pour les props du provider
interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const html = document.documentElement;
  
    if (theme === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
    }
  };
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
