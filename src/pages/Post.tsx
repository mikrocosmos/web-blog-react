import React from 'react';

function Post() {
	return (
		<article className="post">
    <div className="post__actions">
        <a href="/index.html">вернуться назад</a>
        <a href="#">
            поделиться
            <img className="post__actions-icon" src="assets/images/share.svg" alt="поделиться" />
        </a>
    </div>
    <div className="post__header  post__header--open">
        <h1 className="post__title  post__title--mb0">Как я сходил на FrontEnd Conf 2021</h1>
        <ul className="post__data">
            <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
            </li>
            <li className="post__data-item">
                <a href="#">конференции</a>
            </li>
        </ul>
    </div>
    <div className="post__content">
        <div className="post__text">
        <h2>
            Lorem ipsum dolor sit. (Title h2)
        </h2>
        <p><a href="#"> Lorem ipsum dolor sit,</a> amet consectetur adipisicing elit. Architecto repudiandae necessitatibus, ex assumenda fugiat quas beatae ipsum, aut ad iure saepe obcaecati modi corrupti, exercitationem recusandae? Molestiae voluptatem earum deserunt officiis, quod laborum illo, nulla magni perspiciatis cum fuga, magnam ad consectetur ea doloremque itaque nesciunt ex dicta autem odit?</p>
        <h3>Title h3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, reiciendis.</p>
        <h4>Title h4</h4>
        <p>
        <img src="assets/images/image.jpg" alt="Как писать код легко и безболезненно?" />
        </p>
        <ul>
            <li>item</li>
            <li>item</li>
            <li><i>item</i></li>
        </ul>

        <ol>
            <li>item</li>
            <li>item</li>
            <li><i>item</i></li>
        </ol>

        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
        <h5>Title h5</h5>
        <h6>Title h6</h6>
        <p>
            <span className="fr-video">
                <iframe src="https://www.youtube.com/embed/mH_m265Nmvk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </span>
        </p>
    </div>

    <div className="related">
        <h3 className="post__subtitle">Интересно почитать</h3>

        <ul className="related__list">
            <li className="related__list-item">
                <h4 className="related__list-title">
                    <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                    </h4>
                    <time className="related__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
            </li>
            <li className="related__list-item"><h4 className="related__list-title">
                    <a href="#">Купил новый ноутбук за 150 000 руб</a></h4>
                    <time className="related__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                </li>
            <li className="related__list-item"><h4 className="related__list-title">
                    <a href="#">Как писать код быстро и безболезненно? Как писать код быстро и безболезненно?</a></h4>
                    <time className="related__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                </li>
            <li className="related__list-item"><h4 className="related__list-title">
                    <a href="#">Купил новый ноутбук за 150 000 руб</a></h4>
                    <time className="related__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                </li>
        </ul>
    </div>

        <h3 className="post__subtitle">Обсуждение</h3>

        <form className="form" action="/" method="POST">
            <div className="form__group">
                <textarea className="form__control form__control--textarea" name="comment-text" placeholder="Текст комментария"></textarea>
                <span className="form__line"></span>
            </div>
        <button className="btn btn--blue btn--rounded btn --sm">Отправить</button>
    </form>

    <ul className="comments">
        <li className="comments__item">
            <div className="comments__header">
                    <img className="comments__avatar" src="http://placehold.it/30" alt="" />
                    <div className="comments__author">
                    <div className="comments__name">Дмитрий Валак</div>
                    <time className="comments__pubdate" dateTime="2021-08-10 12:34">1 неделю назад</time>
                </div>
            </div>
                <div className="comments__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere obcaecati provident ex. Incidunt facere perspiciatis asperiores fuga praesentium dolor totam, culpa cupiditate ab saepe eaque, consequatur eligendi? Officia vel ab reiciendis numquam voluptatum quia aperiam debitis molestiae quae ipsam fuga similique, dolores reprehenderit. Unde ut ipsam cumque, obcaecati odio mollitia.
                </div>
                <button className="comments__reply" type="button">ответить</button>

            <ul className="comments">
                <li className="comments__item">
                    <div className="comments__header">
                            <img className="comments__avatar" src="http://placehold.it/30" alt="" />
                            <div className="comments__author">
                            <div className="comments__name">Дмитрий Валак</div>
                            <time className="comments__pubdate" dateTime="2021-08-10 12:34">1 неделю назад</time>
                        </div>
                    </div>
                        <div className="comments__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere obcaecati provident ex. Incidunt facere perspiciatis asperiores fuga praesentium dolor totam, culpa cupiditate ab saepe eaque, consequatur eligendi? Officia vel ab reiciendis numquam voluptatum quia aperiam debitis molestiae quae ipsam fuga similique, dolores reprehenderit. Unde ut ipsam cumque, obcaecati odio mollitia.
                        </div>
                        <button className="comments__reply" type="button">ответить</button>
                </li>
            </ul>
            <li className="comments__item">
                <div className="comments__header">
                        <img className="comments__avatar" src="http://placehold.it/30" alt="" />
                        <div className="comments__author">
                        <div className="comments__name">Дмитрий Валак</div>
                        <time className="comments__pubdate" dateTime="2021-08-10 12:34">1 неделю назад</time>
                    </div>
                </div>
                    <div className="comments__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere obcaecati provident ex. Incidunt facere perspiciatis asperiores fuga praesentium dolor totam, culpa cupiditate ab saepe eaque, consequatur eligendi? Officia vel ab reiciendis numquam voluptatum quia aperiam debitis molestiae quae ipsam fuga similique, dolores reprehenderit. Unde ut ipsam cumque, obcaecati odio mollitia.
                    </div>
                    <button className="comments__reply" type="button">ответить</button>
            </li>
        </li>
    </ul>
    </div>
</article>
	)
}

export default Post;