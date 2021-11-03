const runNumber = (stopNumber, time, step, startNumber, outPlace) => {
	// Где n это общее кол-во шагов, t - это время на один шаг, time - Общее время
	// stopNember - нужное нам число, startNumber - начальное число,
	const t = Math.round(time / (+stopNumber / step));
	let idInterval = setInterval(() => {
		startNumber += step;
		outPlace.textContent = startNumber;
		if (startNumber == stopNumber) {
			clearInterval(idInterval);
		}
	}, t);
};

export default runNumber;