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
    if (theme === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
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
