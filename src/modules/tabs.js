const tabs = () => {
	const serviceHeader = document.querySelector(".service-header");
	const headerTabs = document.querySelectorAll(".service-header-tab");
	const tabContent = document.querySelectorAll(".service-tab");

	serviceHeader.addEventListener("click", (e) => {
		headerTabs.forEach((elem, index) => {
			if (elem === e.target.closest(".service-header-tab")) {
				headerTabs[index].classList.add("active");
				tabContent[index].classList.remove("d-none");
			} else {
				headerTabs[index].classList.remove("active");
				tabContent[index].classList.add("d-none");
			}
		});
	});
};

export default tabs;