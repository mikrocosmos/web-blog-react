import React from 'react';

function Search() {
return (
	<>
	<h1 className="page__title">Результаты поиска “Создание сайта”</h1>

<article className="post">
    <div className="post__content">
        <h2 className="post__title">
            <a href="post.html">Как писать код быстро и безболезненно?</a>
        </h2>
        <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
    </div>

    <div className="post__footer">
        <ul className="post__data">
            <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
            </li>
            <li className="post__data-item">
                <a href="#">создание сайтов</a>
            </li>
        </ul>

        <a className="post__read" href="post.html">перейти</a>
    </div>
</article>

	</>
)
}

export default Search;