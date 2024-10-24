import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/features/authSlice";
import { isUserInUserList, regInUserList } from "../util/authUtil";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSignup = () => { 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    secondPassword: ''
  });

  const registerUser = (email: string, password: string, secondPassword: string) => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password, secondPassword);

    if (!isValidEmail || !isValidPassword) return;
    dispatch(setUser({ isAuth: true, user: { name: email, password, favorites: [] } }));
    regInUserList(email, password);
    navigate('/');
    toast.success(`${email} Вы успешно зарегистрировались`);
  };

  const validateEmail = (email: string) => {
    if (isUserInUserList(email)) {
      toast.error(`${email} такой емайл уже существует`);
      return false;
    }
    return true;
  };

  const validatePassword = (pass1: string, pass2: string) => {
    if (pass1 !== pass2) {
      toast.error('Введите одинаковые пароли');
      return false;
    }
    return true;
  }
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        registerUser(credentials.email, credentials.password, credentials.secondPassword)
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
      <div>
        <label htmlFor="secondPassword">Необходимо повторить Ваш пароль</label>
        <input 
          className="input"
          id="secondPassword" 
          type="password" 
          placeholder="Повторите пароль"
          minLength={6}
          value={credentials.secondPassword}
          onChange={(e) => setCredentials({...credentials, secondPassword: e.target.value})}
          required 
        />
      </div>
      <button className='form-btn' type="submit">
        Зарегистрироваться 
      </button> 
      <ToastContainer theme="dark" position="top-center" />
    </form>
  );
}

export default FormSignup;
