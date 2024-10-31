"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({children}:React.PropsWithChildren) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true); // O componente só é montado no cliente
    }, []);
  
    if (!mounted) {
      return null; // Evita renderizar até que o componente seja montado no cliente
    }

    return (<NextThemeProvider>{children}</NextThemeProvider>);
}