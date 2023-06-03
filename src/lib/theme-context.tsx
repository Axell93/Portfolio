import { PropsWithChildren, useState, useEffect, createContext } from "react";

const initialState = {
  dark: false,
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }: PropsWithChildren) {
  const [dark, setDark] = useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("content-theme") === "dark";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("content-theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
