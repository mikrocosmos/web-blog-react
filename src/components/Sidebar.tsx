import React from "react";

function Sidebar({ name, theme, description, socials }: IMain) {
	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<img src="/img/sidebar-header.jpg" alt="" />
			</div>
			<div className="sidebar__content">
				<div className="profile">
					<img className="profile__avatar" src="/img/avatar.png" alt={name} />
					<div className="profile__name">{name}</div>
					<div className="profile__prof">{theme}</div>
				</div>
				<ul className="social">
					{socials.map((e: { link: string; social: Socials }) => (
						<li className="social__item">
							<a href={e.link} rel="noreferrer" target="_blank">
								<img
									src={`/img/${e.social}.svg`}
									alt={e.social}
									width={25}
									height={25}
								/>
							</a>
						</li>
					))}
				</ul>
				<div className="profile__text">
					<p>{description}</p>
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
