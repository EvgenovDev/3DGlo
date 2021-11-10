import timer from "./modules/timer";
import menu from "./modules/menu";
import {
	calcValidate
} from "./modules/validate";
import sliderSwiper from "./modules/sliderSwiper";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import sendForm from "./modules/sendForm";

timer("1 december 2021");
menu();
modal();
calcValidate();
sliderSwiper();
tabs();
slider({
	ulSlides: "portfolio-content",
	ulDots: "portfolio-dots",
	dots: "dot",
	slides: "portfolio-item",
	arrows: "portfolio-btn",
	arrowLeft: "prev",
	arrowRight: "next",
	slideActive: "portfolio-item-active",
	dotActive: "dot-active"
});
calculator();
sendForm("form1");
sendForm("form2");
sendForm("form3");