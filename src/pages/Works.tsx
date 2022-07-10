import React from "react";

function Works() {
  return (
    <>
      <h1 className="page__title">Мои работы</h1>

      <article className="work">
        <div className="work__preview">
          <picture>
            <source
              srcSet="https://placehold.it/575x150"
              media="(max-width: 575px)"
            />
            <img src="assets/images/works/work-1.jpg" alt="" />
          </picture>
        </div>

        <div className="work__content">
          <h2 className="work__title">
            <a href="#" target="_blank">
              altermono.com
            </a>
          </h2>

          <div className="work__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>

          <ul className="tags">
            <li className="tags__item">дизайн</li>
            <li className="tags__item">создание сайта</li>
            <li className="tags__item">SMM</li>
          </ul>

          <div className="work__footer">
            <a
              className="btn  btn--blue  btn--rounded  btn--sm"
              href="#"
              target="_blank"
            >
              Перейти на сайт
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Works;
