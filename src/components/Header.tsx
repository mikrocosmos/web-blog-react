import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Header({}: Props) {
  return (
    <header className="header">
      <div className="header__left">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link has-subnav" href="#">
                Статьи
              </a>

              <ul className="subnav">
                <li>
                  <a className="subnav__link" href="#">
                    Создание сайтов
                  </a>
                </li>
                <li>
                  <a className="subnav__link" href="#">
                    Интернет-маркетинг
                  </a>
                </li>
                <li>
                  <a className="subnav__link" href="#">
                    Техноблог
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Обо мне
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Реклама
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Профиль
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Выйти
              </a>
            </li>
          </ul>
        </nav>
        <input
          className="search__input"
          type="text"
          placeholder="Поиск по блогу"
        />
      </div>
    </header>
  );
}

export default Header;
