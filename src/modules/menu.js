import scrolls from "./scrolls";

const menu = () => {
	const menu = document.querySelector("menu");
	const serviceBlock = document.querySelector('a[href="#service-block"]');
	const main = document.querySelector("main");

	const toggleMenu = () => {
		menu.classList.toggle("active-menu");
	};

	const getIdLink = (elem) => {
		let value = elem.getAttribute("href");
		let value1 = value.slice(1, value.length);

		return value1;
	};

	main.addEventListener("click", (e) => {
		if (e.target.closest(".menu")) {
			toggleMenu();
		} else if (e.target === serviceBlock) {
			scrolls(serviceBlock, getIdLink, e);
		}
	});

	menu.addEventListener("click", (e) => {
		if (e.target.closest("menu") === menu && 
		(e.target.classList.contains("close-btn") || e.target.closest("li"))) {
			if (e.target.closest("li")) {
				toggleMenu();
				scrolls(e.target, getIdLink, e);
			} else {
				toggleMenu();
			}
		}
	});
};

export default menu;