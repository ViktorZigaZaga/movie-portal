import { type FC, useMemo, useState, ReactNode } from 'react';
import { ThemeContext } from './context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
	})

  const defaultProps = useMemo(() => ({
      isDarkMode, 
      setIsDarkMode
    }),
    [isDarkMode]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;