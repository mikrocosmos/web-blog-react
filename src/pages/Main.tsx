import React from "react";

interface Props extends IMain {};

function Main({}: Props) {
  return (
    <>
        <div className="stories">
          <div className="stories__item">
            <img
              className="stories__preview"
              src="/img/stories/stories-1.jpg"
              alt=""
            />
            <div className="stories__title">Отдыхаю на природе</div>
            <time className="stories__date" dateTime="2020-09-21 19:21">
              21.09.2020
            </time>
          </div>
          <div className="stories__item">
            <img
              className="stories__preview"
              src="/img/stories/stories-2.jpg"
              alt=""
            />
            <div className="stories__title">Заканчиваю сложный проект</div>
            <time className="stories__date" dateTime="2020-09-21 19:21">
              21.09.2020
            </time>
          </div>
          <div className="stories__item">
            <img
              className="stories__preview"
              src="/img/stories/stories-3.jpg"
              alt=""
            />
            <div className="stories__title">Переехал в новую квартиру</div>
            <time className="stories__date" dateTime="2020-09-21 19:21">
              21.09.2020
            </time>
          </div>
          <div className="stories__item">
            <img
              className="stories__preview"
              src="/img/stories/stories-4.jpg"
              alt=""
            />
            <div className="stories__title">Осень пришла!</div>
            <time className="stories__date" dateTime="2020-09-21 19:21">
              21.09.2021
            </time>
          </div>
        </div>
        <div className="add-post">
          <form className="add-post__form" action="/" method="POST">
            <textarea
              className="add-post__textarea"
              name="post-text"
              placeholder="Напишите что-нибудь..."
            ></textarea>
            <div className="add-post__form-actions">
              <label className="add-post__file" htmlFor="add-post-file">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M12.9443 9.74291C14.0183 10.8169 14.0183 12.5581 12.9443 13.6321C11.8703 14.7061 10.1291 14.7061 9.05512 13.6321C7.98114 12.5581 7.98114 10.8169 9.05512 9.74291C10.1291 8.66893 11.8703 8.66893 12.9443 9.74291Z"
                      fill="#989898"
                    />
                    <path
                      d="M19.25 4.12481H17.3499L15.9742 1.37471H6.02455L4.65015 4.12616L2.75275 4.12953C1.24009 4.13224 0.00869272 5.36494 0.00738656 6.87828L0 17.8746C0 19.3913 1.23337 20.6253 2.7501 20.6253H19.25C20.7667 20.6253 22.0001 19.392 22.0001 17.8752V6.87486C22 5.35818 20.7666 4.12481 19.25 4.12481ZM10.9997 17.1877C7.9669 17.1877 5.49947 14.7203 5.49947 11.6875C5.49947 8.65475 7.9669 6.18732 10.9997 6.18732C14.0324 6.18732 16.4999 8.65475 16.4999 11.6875C16.4999 14.7203 14.0324 17.1877 10.9997 17.1877Z"
                      fill="#989898"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input type="file" id="add-post-file" />
              </label>
              <button className="add-post__send" type="submit">
                <img src="/img/send.svg" alt="Отправить" />
              </button>
            </div>
          </form>
        </div>
        <div className="post">
          <div className="post__content">
            <div className="post__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </div>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
              </li>
            </ul>
          </div>
        </div>
        <article className="post">
          <div className="post__header post__header--preview">
            <a href="post.html">
              <img
                className="post__preview"
                src="/img/post-1.jpg"
                alt="Как писать код быстро и безболезненно?"
              />
            </a>
          </div>
          <div className="post__content">
            <h2 className="post__title">
              <a href="#">Как писать код быстро и безболезненно?</a>
            </h2>
            <p className="post__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
              </li>
              <li className="post__data-item">
                <a href="#">Создание сайтов</a>
              </li>
            </ul>
            <a href="post.html" className="post__read">
              читать
            </a>
          </div>
        </article>
        <article className="post">
          <div className="post__header">
            <div className="embed">
              <iframe
                src="https://www.youtube.com/embed/mH_m265Nmvk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="post__content">
            <h2 className="post__title">
              <a
                href="https://www.youtube.com/watch?v=mH_m265Nmvk&feature=emb_title"
                target="_blank"
              >
                Купил новый ноутбук за 150 000 руб
              </a>
            </h2>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
              </li>
              <li className="post__data-item">
                <a href="#">Техноблог</a>
              </li>
            </ul>
            <a href="#" className="post__read">
              оставить комментарий
            </a>
          </div>
        </article>
        <article className="post">
          <div className="post__header post__header--preview">
            <a href="#">
              <img
                className="post__preview"
                src="/img/post-3.jpg"
                alt="Как я сходил на FrontEnd Conf 2021"
              />
            </a>
          </div>
          <div className="post__content">
            <h2 className="post__title">
              <a href="post.html">Как я сходил на FrontEnd Conf 2021</a>
            </h2>
            <p className="post__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
              </li>
              <li className="post__data-item">
                <a href="#">Создание сайтов</a>
              </li>
            </ul>
            <a href="/post.html" className="post__read">
              читать
            </a>
          </div>
        </article>
        <ul className="pagination">
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              {"<"}
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              1
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link active" href="#">
              2
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              3
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              {">"}
            </a>
          </li>
        </ul>
    </>
  );
}

export default Main;
