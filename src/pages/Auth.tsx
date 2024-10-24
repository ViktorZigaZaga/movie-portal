import { lazy, Suspense, useState } from "react";

const FormSignin = lazy(() => import('../components/FormSignin'));
const FormSignup = lazy(() => import('../components/FormSignup'));

const Auth = () => { 
  const [authForm, setAuthForm] = useState(true);

  return (
    <section className="container"> 
      <div className="auth">
        <button className="auth-link" onClick={() => setAuthForm(true)} aria-label="Войти">
          Войти
        </button>
        <span> или </span>
        <button className="auth-link" onClick={() => setAuthForm(false)} aria-label="Зарегистрироваться">
          Зарегистрироваться
        </button>
        <Suspense fallback={<div>Загрузка...</div>}>
          {authForm 
            ? <FormSignin />
            : <FormSignup />
          }
        </Suspense>
      </div>
    </section>
  );
}

export default Auth;