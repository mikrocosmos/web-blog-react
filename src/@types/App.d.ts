interface IMain {
	name: string;
	theme: string;
	description: string;
	socials: [
		{
			link: string;
			social: Socials;
		}
	];
}

enum Socials {
	PINTEREST = "pinterest",
	VK = "vk",
	TELEGRAM = "telegram",
}
