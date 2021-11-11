const calcValidate = () => {
	const inputs = document.querySelectorAll(".calc-block>input");

	inputs.forEach((elem) => {
		elem.setAttribute("type", "number");
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/\D/g, "");
		});
	});
};

const formValidate = (form) => {
	let valide = true;
	form.querySelectorAll("input").forEach((elem) => {
		if (elem.getAttribute("type") == "text") {
			const regExpName = /[^а-я\s]+/i;
			if (regExpName.test(elem.value)) {
				valide = false;
			}
		} else if (elem.getAttribute("type") == "tel") {
			const regExpName = /[^\d\+]+/i;
			if (regExpName.test(elem.value)) {
				valide = false;
			}
		} else if (elem.getAttribute("name") == "user_message") {
			const regExpName = /[^а-я\s\d\.\,]+/i;
			if (regExpName.test(elem.value)) {
				valide = false;
			}
		} else if (elem.getAttribute("type") == "email") {
			const regExpName = /[a-z\d]+@[a-z]+\.[a-z]/i;
			if (!regExpName.test(elem.value)) {
				valide = false;
			}
		}
	});
	return valide;
};

//  const formValidate = (form) => {
// 	form.querySelector("input:first-child").addEventListener("input", () => {
// 		form.querySelector("input[placeholder='Ваше имя']").value = form.querySelector("input[placeholder='Ваше имя']").value.replace(/[^а-я\s\-]/gi, "");
// 	});
// 	form.querySelector("input[type='email']").addEventListener("input", () => {
// 		form.querySelector("input[type='email']").value = form.querySelector("input[type='email']").value.replace(/[^a-z0-9\-\@\_\.\!\~\*\']/gi, "");
// 	});
// 	form.querySelector("input[type='tel']").addEventListener("input", () => {
// 		form.querySelector("input[type='tel']").value = form.querySelector("input[type='tel']").value.replace(/[^\d\(\)\-]/gi, "");
// 	});
//  };

// const formValidate = (form) => {

// 	const saveCorrectValue = (arr, string, reg) => {
// 		for (let i = 0; i < string.length; i++) {
// 			if (reg.test(string[i])) {
// 				arr.push(string[i]);
// 			}
// 		}
// 	};

// 	form.querySelector("input:first-child").addEventListener("blur", () => {
// 		let str = form.querySelector("input[placeholder='Ваше имя']").value.replace(/^\s+|^\-+|\s+$|\-+$/gm, '');
// 		str = str.replace(/\s+/g, " ");
// 		str = str.replace(/\-+/g, "-");
// 		let arr = [];
// 		const regExp = /[а-я\-\s]/i;

// 		saveCorrectValue(arr, str, regExp);
// 		let i = 0;
// 		if (arr[i] !== undefined) {
// 			arr[i] = arr[i].toUpperCase();
// 		}
// 		for (i = i + 1; i < arr.length; i++) {
// 			arr[i] = arr[i].toLowerCase();
// 		}
// 		form.querySelector("input[placeholder='Ваше имя']").value = arr.join("");
// 	});

// 	form.querySelector("input[type='email']").addEventListener("blur", () => {
// 		let str = form.querySelector("input[type='email']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm, '');
// 		str = str.replace(/\-+/g, "-");
// 		const arr = [];
// 		const regExp = /[a-z\@\-\_\.!\~\*]/i;
// 		const regExp1 = /[a-z\-\_\.\~\*]+@[a-z]+\.[a-z]+/gi;

// 		saveCorrectValue(arr, str, regExp);
// 		form.querySelector("input[type='email']").value = arr.join("");
// 		if (!regExp1.test(form.querySelector("input[type='email']").value)) {
// 			form.querySelector("input[type='email']").value = "";
// 			form.querySelector("input[type='email']").style.background = "red";
// 			form.querySelector("input[type='email']").setAttribute("placeholder", "Введите email в форме ex@ex.ex");
// 		}
// 	});

// 	form.querySelector("input[type='email']").addEventListener("focus", () => {
// 		form.querySelector("input[type='email']").style.background = "white";
// 		form.querySelector("input[type='email']").setAttribute("placeholder", "E-mail");
// 	});

// 	form.querySelector("input[type='tel']").addEventListener("blur", () => {
// 		let str = form.querySelector("input[type='tel']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm, '');
// 		str = str.replace(/\-+/g, "-");
// 		const arr = [];
// 		const regExp = /[\d\(\)\-]/i;

// 		saveCorrectValue(arr, str, regExp);
// 		form.querySelector("input[type='tel']").value = arr.join("");
// 	});
// };

// formValidate(document.querySelector(".main-form"));
// formValidate(document.querySelector(".footer-form"));
// formValidate(document.querySelector(".popup"));

export {
	calcValidate,
	formValidate
};