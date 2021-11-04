import {
	animate
} from "./helpers";

const modal = () => {
	const popup = document.querySelector(".popup");
	const popupContent = popup.querySelector(".popup-content");
	const btnsPopup = document.querySelectorAll(".popup-btn");

	const showPopup = (elem1, elem2) => {
		elem1.style.display = "block";
		elem2.style.borderRadius = "10px";

		if (document.documentElement.clientWidth > 768) {
			animate({
				duration: 2000,
				timing(frame) {
					return frame;
				},
				draw(p) {
					elem2.style.opacity = p;
				}
			});
		}
	};

	btnsPopup.forEach((elem) => {
		elem.addEventListener("click", () => {
			showPopup(popup, popupContent, animate);
		});
	});

	popup.addEventListener("click", (e) => {
		console.log(e.target);
		if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
			popup.style.display = "none";
		}
	});
};

export default modal;