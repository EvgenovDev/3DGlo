const menu = () => {
	const btnMenu = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const btnCloseMenu = menu.querySelector(".close-btn");
	const menuLinks = menu.querySelectorAll("ul>li>a");
	const serviceBlock = document.querySelector('a[href="#service-block"]');

	const toggleMenu = () => {
		menu.classList.toggle("active-menu");
	};

	const getIdLink = (elem) => {
		let value = elem.getAttribute("href");
		let value1 = value.slice(1, value.length);

		return value1;
	};

	const scrolls = (elemForFunc, callback, event) => {
		event.preventDefault();
		let id = callback(elemForFunc);
		document.getElementById(id).scrollIntoView({behavior: "smooth"});
	};

	btnMenu.addEventListener("click", toggleMenu);
	btnCloseMenu.addEventListener("click", toggleMenu);

	menuLinks.forEach((elem) => {
		elem.addEventListener("click", (e) => {
			toggleMenu();
			scrolls(e.target, getIdLink, e);
		});
	});

	serviceBlock.addEventListener("click", (e) => {
		console.log(e.target);
		scrolls(serviceBlock, getIdLink, e);
	});
};

export default menu;