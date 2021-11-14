const menu = () => {
	const menu = document.querySelector("menu");
	const serviceBlock = document.querySelector('a[href="#service-block"]>img');

	const toggleMenu = () => {
		document.body.addEventListener("click", (e) => {
			if (e.target.closest(".menu")) {
				menu.classList.toggle("active-menu");
			} else if (e.target === serviceBlock) {
				e.preventDefault();
				scrolls(e.target.closest("a"), getIdLink);
			} else if (e.target.closest("menu") === menu &&
				(e.target.classList.contains("close-btn") || e.target.closest("a"))) {
				if (e.target.closest("a") && !e.target.classList.contains("close-btn")) {
					e.preventDefault();
					menu.classList.toggle("active-menu");
					scrolls(e.target, getIdLink);
				} else {
					e.preventDefault();
					menu.classList.toggle("active-menu");
				}
			} else if (e.target.closest("menu") !== menu) {
				menu.classList.remove("active-menu");
			}
		});
	};

	const scrolls = (elemForFunc, callback) => {
		let id = callback(elemForFunc);
		document.getElementById(id).scrollIntoView({
			behavior: "smooth"
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