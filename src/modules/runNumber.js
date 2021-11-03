const runNumber = (stopNumber, time, step, startNumber, outPlace, flag) => {
	// Где n это общее кол-во шагов, t - это время на один шаг, time - Общее время
	// stopNember - нужное нам число, startNumber - начальное число,
	if (!flag) {
		flag = true;
		const t = Math.round(time / (+stopNumber / step));
		let idInterval = setInterval(() => {
			startNumber += step;
			outPlace.textContent = startNumber;
			if (startNumber == stopNumber) {
				clearInterval(idInterval);
				flag = false;
			}
		}, t);
	}
};

export default runNumber;