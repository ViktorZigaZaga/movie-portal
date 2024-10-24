import { useEffect } from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import "./App.css"
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setUser } from "./store/features/authSlice";
import Navbar from "./components/Navbar"
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Movie from './pages/Movie'
import Favorites from './pages/Favorites'
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import { getCurrentUser, isUserInUserList } from "./util/authUtil";
import BtnGoToBack from "./components/BtnGoToBack";

function App() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      const isUserInList = isUserInUserList(user.name);
      isUserInList &&
        dispatch(
          setUser({
            isAuth: true,
            user: { ...isUserInList, password: user.password },
          }),
        );
    }
  }, []);

  return (
    <div className="App">
      <Router basename={basename}>
				<Navbar />
        <BtnGoToBack/>
				<Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<ErrorBoundary><Movie /></ErrorBoundary>} />
          {isAuth && <Route path="/favorites" element={<Favorites />} />}
          {!isAuth 
            ? <Route path="/auth" element={<Auth />} />
            : <Route path="/profile" element={<Profile />} />
          }
          <Route path="*" element={<Error404 />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
