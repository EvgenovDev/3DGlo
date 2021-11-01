const menu = () => {
	const btnMenu = document.querySelector(".menu");
	const menu = document.querySelector("menu");
	const btnCloseMenu = menu.querySelector(".close-btn");
	const menuLinks = menu.querySelectorAll("ul>li>a");
	const btnsPopup = document.querySelectorAll(".popup-btn");
	const popup = document.querySelector(".popup");
	const popupClose = popup.querySelector(".popup-close");
	const popupContent = popup.querySelector(".popup-content");
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

	const showPopup = () => { 
		let idAnimate;
		let x = 0;
		let y = 0;
		let z = 0;

		const animate = () => {
			idAnimate = requestAnimationFrame(animate);
			x += 0.02;
			y += 14.4;
			z += 0.02;
			popupContent.style.transform = `scale(${x}, ${x}) rotate(${y}deg)`;
			popupContent.style.opacity = `${z}`;
			if (x > 1) {
				cancelAnimationFrame(idAnimate);
			}
		};
		popup.style.display = "block";
		popupContent.style.borderRadius = "10px";
		if (document.documentElement.clientWidth > 768) {
			popupContent.style.transform = "scale(0.001, 0.001)";
			animate();
			}
	};

	btnMenu.addEventListener("click", toggleMenu);
	btnCloseMenu.addEventListener("click", toggleMenu);

	menuLinks.forEach((elem) => {
		elem.addEventListener("click", (e) => {
			toggleMenu();
			scrolls(elem, getIdLink, e);
		});
	});

	serviceBlock.addEventListener("click", (e) => {
		scrolls(serviceBlock, getIdLink, e);
	});

	btnsPopup.forEach((elem) => {
		elem.addEventListener("click", showPopup);
	});

	popupClose.addEventListener("click", () => {
		popup.style.display = "none";
	});

};

export default menu;