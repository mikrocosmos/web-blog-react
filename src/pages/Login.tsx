import React from "react";

function Login() {
  return (
    <>
      <h1 className="page__title  page__title--center">Вход</h1>

      <form className="form  form--auth" action="/" method="post">
        <div className="form__group  form__group--md">
          <input
            className="form__control"
            type="email"
            placeholder="Ваш e-mail"
          />
          <span className="form__line"></span>
        </div>

        <div className="form__group  form__group--md">
          <input
            className="form__control"
            type="password"
            placeholder="Пароль"
          />
          <span className="form__line"></span>
        </div>

        <div className="form__footer  form__footer--center">
          <div className="form__group  form__group--md">
            <button
              className="btn  btn--blue  btn--rounded  btn--sm"
              type="submit"
            >
              Войти
            </button>
          </div>

          <ul className="form__footer-list">
            <li>
              <a href="signup.html">регистрация</a>
            </li>
            <li>
              <a href="reset.html">восстановить</a>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}

export default Login;
