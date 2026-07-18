import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode]=useState("light");

  const lightTheme=()=>{
    setThemeMode("light");
  }

  const darkTheme=()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    let root=document.querySelector('html');
    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-all duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6">
          <Hero />
          <Features />
        </main>

        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;