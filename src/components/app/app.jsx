import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { createContext, useState } from "react";
import { ThemeProvider } from "../theme-provider/theme-provider";

// export const ThemeContext = createContext();

export const App = () => {
  // const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext value={{ theme, setTheme }}>
    <ThemeProvider>
      <Layout>
        <HeadphonesPage />
      </Layout>
    </ThemeProvider>
    // </ThemeContext>
  );
};
