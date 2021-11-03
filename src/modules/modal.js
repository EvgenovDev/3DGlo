const modal = () => {
	const popup = document.querySelector(".popup");
	const popupContent = popup.querySelector(".popup-content");
	const btnsPopup = document.querySelectorAll(".popup-btn");
	const popupClose = popup.querySelector(".popup-close");

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

	btnsPopup.forEach((elem) => {
		elem.addEventListener("click", showPopup);
	});

	popup.addEventListener("click", (e) => {
		if (!e.target.closest(".popup-content") || e.target.classList.contains(".popup-close")) {
			popup.style.display = "none";
		}
	});
};

export default modal;