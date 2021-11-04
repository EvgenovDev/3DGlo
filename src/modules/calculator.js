const calculator = (price = 100) => {
	const calcBlock = document.querySelector(".calc-block");
	const calcSelect = document.querySelector(".calc-type");
	const calcSquare = document.querySelector(".calc-square");
	const calcCount = document.querySelector(".calc-count");
	const calcDay = document.querySelector(".calc-day");
	const calcTotal = document.querySelector(".calc-total>span");
	let total;
	let idInterval;

	let runNumber = (stopNumber, time, step, startNumber, outPlace) => {
		// Где n это общее кол-во шагов, t - это время на один шаг, time - Общее время
		// stopNember - нужное нам число, startNumber - начальное число,
		const t = Math.round(time / (+stopNumber / step));
		idInterval = setInterval(() => {
			startNumber += step;
			outPlace.textContent = startNumber;
			if (startNumber == stopNumber) {
				clearInterval(idInterval);
			}
		}, t);
	};

	const calc = () => {
		let calcSelectValue;
		let calcSquareValue;
		let calcCountValue = 1;
		let calcDayValue = 1;

		if (calcSelect.selectedIndex === 3) {
			price = 110;
		} else if (calcSelect.selectedIndex === 2) {
			price = 120;
		}

		calcSelectValue = +calcSelect.options[calcSelect.selectedIndex].value;
		calcSquareValue = calcSquare.value;
		calcDayValue = calcDay.value === "" ? 1 : calcDay.value < 5 ? 2 : calcDay.value < 10 ? 1.5 : 1;
		calcCountValue += (calcCount.value / 10);

		if (calcSquare.value && calcSelectValue) {
			total = price * calcSelectValue * calcSquareValue * calcDayValue * calcCountValue;
		}
	};

	calcBlock.addEventListener("change", (e) => {
		if (e.target === calcSelect || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
			calc();
			clearInterval(idInterval);
			if (total) {
				runNumber(total, 2000, 1, 0, calcTotal);
			}
		}
	});
};

export default calculator;