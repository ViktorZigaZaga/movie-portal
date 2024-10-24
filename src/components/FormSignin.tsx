import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/features/authSlice";
import { isUserInUserList, loginUser } from "../util/authUtil";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSignin = () => { 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const authenticate = (email: string, password: string) => {
    const user = isUserInUserList(email);
    if (user) {
      loginUser(email, password);
      dispatch(
        setUser({ isAuth: true, user: { ...user, password } }),
      );
      navigate('/');
      toast.success(`${email} Вы успешно авторизовались`);
    } else {
      toast.error(`${email} такой пользователь не зарегистрирован`);
    }
  }

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        authenticate(credentials.email, credentials.password)
      }} 
      className="form"
    >
      <div>
        <label htmlFor="email">Необходимо указать Ваш email</label>
        <input 
          className="input"
          id="email" 
          type="email" 
          placeholder="Введите логин" 
          value={credentials.email} 
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          required 
        />
      </div>
      <div>
        <label htmlFor="password">Необходимо указать Ваш пароль</label>
        <input 
          className="input"
          id="password" 
          type="password" 
          placeholder="Введите пароль" 
          minLength={6} 
          value={credentials.password} 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
          required 
        />
      </div>
      <button className='form-btn' type="submit">
        Войти 
      </button> 
      <ToastContainer theme="dark" position="top-center" />
    </form>
  );
}

export default FormSignin;