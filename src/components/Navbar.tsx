import { NavLink } from 'react-router-dom';
import logo from '../assets/movie-camera-svgrepo-com.svg';
import BtnDarkMode from './BtnDarkMode';
import { useAppSelector } from '../store/hooks';

const Navbar = () => {
	const { isAuth } = useAppSelector((state) => state.auth);

	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';
	
	return (
		<nav className="nav">
			<section className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<div className='logo-title'>
							Movie {' '}
							<img className='logo-image' src={logo} alt='logo'/> {' '}
							Portal
						</div>
					</NavLink>
					<BtnDarkMode />
					{/* <div className='hamburger'>
						<Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
					</div>
					<div
						aria-hidden="true"
						onClick={() => setOpen((prev) => !prev)}

					/> */}
					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Главная
							</NavLink>
						</li>
						{isAuth && <li className="nav-list__item">
							<NavLink
								to="/favorites"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Избранные
							</NavLink>
						</li>}
						<li className="nav-list__item">
							{!isAuth 
							? <NavLink
									to="/auth"
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Войти
								</NavLink>
							: <NavLink
									to="/profile"
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Ваш профиль
								</NavLink>
							}
						</li>
					</ul>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;


