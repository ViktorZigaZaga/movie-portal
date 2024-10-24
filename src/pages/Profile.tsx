import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { clearCurrentUser } from "../util/authUtil";
import { logout } from "../store/features/authSlice";
import defaultProfile from '../assets/default_user.svg';

const Profile = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const onClickLogout = () => {
    clearCurrentUser();
    dispatch(logout());
    navigate('/')
  }

  return (
    <section className="container"> 
      <div className="auth profile">
        <img  
          className="auth-image"      
          src={defaultProfile}
          alt="Profile"
          width="150"
          height="150"
        />
        <p>
          Ваш email: {user?.name}
        </p>
        <button 
          className='form-btn' 
          onClick={onClickLogout}
        >
          Выйти 
        </button> 
      </div>
    </section>
  );
}

export default Profile;