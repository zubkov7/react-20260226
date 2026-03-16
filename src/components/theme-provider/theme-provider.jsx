import { useEffect, useState } from "react";
import { ThemeContext } from ".";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //   useEffect(() => {
  //     const localTheme = localStorage.getItem("theme");

  //     setTheme(localTheme);
  //   }, []);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
