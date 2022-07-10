import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img src="/img/sidebar-header.jpg" alt="" />
      </div>
      <div className="sidebar__content">
        <div className="profile">
          <img
            className="profile__avatar"
            src="/img/avatar.png"
            alt="Дмитрий Валак"
          />
          <div className="profile__name">Дмитрий Валак</div>
          <div className="profile__prof">блог front-end разработчика</div>
        </div>

        <ul className="social">
          <li className="social__item">
            <a
              href="https://www.pinterest.com"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/img/pinterest.svg"
                alt="pinterest"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li className="social__item">
            <a href="https://vk.com" rel="noreferrer" target="_blank">
              <img src="/img/vk.svg" alt="vk" width={25} height={25} />
            </a>
          </li>
          <li className="social__item">
            <a href="https://t.me" rel="noreferrer" target="_blank">
              <img
                src="/img/telegram.svg"
                alt="telegram"
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
        <div className="profile__text">
          <p>
            Front-end разработчик. Практик верстки сайтов. Созданием сайтов
            занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
            более 10 000 часов в создании сайтов различной сложности.
          </p>
        </div>
      </div>
      <div className="sidebar__footer">
        <button className="btn btn--red">Мои работы</button>
        <button className="btn btn--blue">Написать мне</button>
      </div>
    </aside>
  );
}

export default Sidebar;
