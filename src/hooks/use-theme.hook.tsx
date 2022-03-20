import { useContext } from "react";
import { ThemeContext } from "../context";

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
