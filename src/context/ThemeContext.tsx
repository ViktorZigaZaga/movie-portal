import { createContext } from "react";

export interface ThemeContextProps {
  isDarkMode?: boolean,
  setIsDarkMode?: CallableFunction,
}

export const ThemeContext = createContext<ThemeContextProps>({});


