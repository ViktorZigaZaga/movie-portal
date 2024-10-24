import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"

function useTheme () {
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode)
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
	}, [isDarkMode])

	const toggleTheme = () => setIsDarkMode?.(!isDarkMode)

	return { isDarkMode, toggleTheme }
}

 export default useTheme