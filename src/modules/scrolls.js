const scrolls = (elemForFunc, callback, event) => {
	event.preventDefault();
	let id = callback(elemForFunc);
	document.getElementById(id).scrollIntoView({behavior: "smooth"});
};

export default scrolls;