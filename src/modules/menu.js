import scrolls from "./scrolls";

const menu = () => {
	const menu = document.querySelector("menu");
	const serviceBlock = document.querySelector('a[href="#service-block"]');

	const toggleMenu = () => {
		document.body.addEventListener("click", (e) => {
			if (e.target.closest(".menu")) {
				menu.classList.toggle("active-menu");
			} else if (e.target === serviceBlock) {
				scrolls(serviceBlock, getIdLink, e);
			} else if (e.target.closest("menu") === menu &&
			(e.target.classList.contains("close-btn") || e.target.closest("a"))) {
			if (e.target.closest("a") && !e.target.classList.contains("close-btn")) {
				menu.classList.toggle("active-menu");
				scrolls(e.target, getIdLink, e);
			} else {
				menu.classList.toggle("active-menu");
				}
			} else if (e.target.closest("menu") !== menu) {
				menu.classList.remove("active-menu");
			}
		});
	};

	const getIdLink = (elem) => {
		let value = elem.getAttribute("href");
		let value1 = value.slice(1, value.length);

		return value1;
	};

	toggleMenu();
};

export default menu;