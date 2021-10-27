"use strict";

const div = document.querySelector(".date");
const spans = document.querySelectorAll("span");
const daysArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];

const getTime = () => {
	let todayDate = new Date();

	let newYear = new Date ("01 january 2022").getTime();
	let happyNewYear = Math.floor((((newYear - todayDate) / 1000 / 60 / 60) / 24));
	let day = todayDate.getDay();
	let hourNow = todayDate.getHours();
	let minutesNow = todayDate.getMinutes();
	let secondsNow = todayDate.getSeconds();

	return {day, hourNow, minutesNow, secondsNow, happyNewYear};
};

const update = () => {
	let time = getTime();

	switch (time.day) {
		case 0:
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[6]}`;
			break;
		case 1: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[0]}`;
			break;
		case 2: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[1]}`;
			break;
		case 3: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[2]}`;
			break;
		case 4: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[3]}`;
			break;
		case 5: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[4]}`;
			break;
		case 6: 
			document.querySelector("span:nth-child(2)").textContent = `Сегодня: ${daysArray[5]}`;
			break;
	}

	if(time.hourNow > 5 && time.hourNow < 12) {
		document.querySelector("span:nth-child(1)").textContent = "Доброе утро";
	} else if (time.hourNow >= 12 && time.hourNow <= 16) {
		document.querySelector("span:nth-child(1)").textContent = "Добрый день";
	} else if (time.hourNow > 16 && time.hourNow <= 23) {
		document.querySelector("span:nth-child(1)").textContent = "Добрый вечер";
	} else {
		document.querySelector("span:nth-child(1)").textContent = "Доброй ночи";
	}

	for (let key in time) {
		if (time[key] < 10) {
			time[key] = ` 0${time[key]}`;
		}
	}
	if (time.hourNow > 11) {
		document.querySelector("span:nth-child(3)").textContent = `${time.hourNow} : ${time.minutesNow} : ${time.secondsNow} PM`;
	} else {
		document.querySelector("span:nth-child(3)").textContent = `${time.hourNow} : ${time.minutesNow} : ${time.secondsNow} AM`;
	}
	setTimeout(update, 1000);

	document.querySelector("span:nth-child(4)").textContent = `До нового года осталось ${time.happyNewYear} дней`;
};

spans.forEach((elem) => {
	elem.style.cssText = `display: block;
	margin-bottom: 10px;
	font-size: 20px;
	text-align: center;`;
});
div.style.cssText = `position: absolute;
top: 40%;
left: 40%;`;
update();

//DEBOUNCE
const p = document.querySelector("p");
const input = document.querySelector("input");

const debounce = (fn, ms) => {
	let timeOut;
	return function () {
		const fnCall = () => {
			fn.apply(this, [p, this]);
		};
		clearTimeout(timeOut);
		timeOut = setTimeout(fnCall, ms);
	};
};

function onChange (a,b) {
	a.textContent = b.value;
}

onChange = debounce(onChange, 300);
input.addEventListener("keyup", onChange);

//АНИМАЦИЯ
const smallCircle = document.querySelectorAll(".smallCircle");
let idAnimation;
let count = 0;
let active = false;

const animate = () => {
	count++;
	let elems = {
		radius: 250,
		speed: 10
	};
	let a = 0;
	let a1 = 0;
	let a2 = 0;
	let corner = count * Math.PI / 180;

	idAnimation = requestAnimationFrame(animate);
		a = a + corner; 
		smallCircle[0].style.left = 235 + elems.radius * Math.sin(a) + 'px'; 
		smallCircle[0].style.top = 235 + elems.radius * Math.cos(a) + 'px';
};

document.addEventListener("click", () => {
	if (active) {
		animate();
		active = false;
	} else {
		cancelAnimationFrame(idAnimation);
		active = true;
	}
});