import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../theme-provider";

export const ToggleThemeButton = (props) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <Button
      title='toggle theme'
      onClick={() =>
        setTheme((current) => (current === "dark" ? "light" : "dark"))
      }
    />
  );
};
