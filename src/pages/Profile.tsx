import React from "react";

function Profile() {
  return (
    <>
      <h1 className="page__title">Профиль</h1>
      <form className="form" action="/" method="post">
        <div className="cabinet">
          <div className="cabinet__form">
            <div className="form__group  form__group--md">
              <input
                className="form__control"
                type="text"
                placeholder="Ваше имя"
                value="Дмитрий Валак"
              />
              <span className="form__line"></span>
            </div>

            <div className="form__group  form__group--md">
              <input
                className="form__control"
                type="email"
                placeholder="Ваш e-mail"
                value="alex.provo@mail.com"
              />
              <span className="form__line"></span>
            </div>

            <div className="form__group  form__group--md">
              <input
                className="form__control"
                type="password"
                placeholder="Новый пароль"
              />
              <span className="form__line"></span>
            </div>

            <div className="form__group  form__group--md">
              <input
                className="form__control"
                type="password"
                placeholder="Подтвердите пароль"
              />
              <span className="form__line"></span>
            </div>
          </div>

          <div className="cabinet__avatar">
            <img src="https://placehold.it/150" alt="" />

            <label className="cabinet__file">
              <input type="file" />
              выбрать аватар
            </label>
          </div>
        </div>

        <div className="form__footer">
          <button
            className="btn  btn--blue  btn--rounded  btn--sm"
            type="submit"
          >
            Сохранить
          </button>
        </div>
      </form>
    </>
  );
}

export default Profile;
