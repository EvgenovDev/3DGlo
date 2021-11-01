import Slider from "swiper";

const sliderSwiper = () => {
	const slider = new Slider(".swiper", {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			1250: {
			  slidesPerView: 3,
			},
		 },
	});
};

export default sliderSwiper;