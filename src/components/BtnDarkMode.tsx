import sun from '../assets/btn/sun.svg';
import moon from '../assets/btn/moon.svg';
import useTheme from '../hooks/useTheme';

const BtnDarkMode = () => {
	const { isDarkMode, toggleTheme } = useTheme()

	const btnNormal = 'dark-mode-btn';
	const btnActive = 'dark-mode-btn dark-mode-btn--active';

	return (
		<button className={isDarkMode ? btnActive : btnNormal} onClick={toggleTheme}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default BtnDarkMode;
