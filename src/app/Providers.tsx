
'use client';

import ThemeContextProvider from "@/context/ThemeContext";
import I18nProvider from "@/components/I18nProvider";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <I18nProvider>
        {children}
        <Toaster />
      </I18nProvider>
    </ThemeContextProvider>
  );
}
