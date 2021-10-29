const validate = () => {
 const calcValidate = () => {
	const inputs = document.querySelectorAll(".calc-block>input");

	inputs.forEach((elem) => {
		elem.setAttribute("type", "number");
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/\D/g, "");
		});
	});
 };

//  const formValidate = (form) => {
// 	form.querySelector("input:first-child").addEventListener("input", () => {
// 		form.querySelector("input[placeholder='Ваше имя']").value = form.querySelector("input[placeholder='Ваше имя']").value.replace(/[^а-я\s\-]/gi, "");
// 	});
// 	form.querySelector("input[type='email']").addEventListener("input", () => {
// 		form.querySelector("input[type='email']").value = form.querySelector("input[type='email']").value.replace(/[^a-z\-\@\_\.\!\~\*\']/gi, "");
// 	});
// 	form.querySelector("input[type='tel']").addEventListener("input", () => {
// 		form.querySelector("input[type='tel']").value = form.querySelector("input[type='tel']").value.replace(/[^\d\(\)\-]/gi, "");
// 	});
//  };

const formValidate = (form) => {

	const saveCorrectValue = (arr, string, reg) => {
		for(let i = 0; i < string.length; i++) {
			if (reg.test(string[i])) {	arr.push(string[i]); }
			}
		};

	form.querySelector("input:first-child").addEventListener("blur", () => {
		let str = form.querySelector("input[placeholder='Ваше имя']").value.replace(/^\s+|^\-+|\s+$|\-+$/gm, '');
		str = str.replace(/\s+/g, " ");
		str = str.replace(/\-+/g, "-");
		const arr = [];
		const regExp = /[а-я\-\s]/i;

		saveCorrectValue(arr, str, regExp);	
		let firstChar = arr[0].toUpperCase();	
		arr[0] = firstChar;
		form.querySelector("input[placeholder='Ваше имя']").value = arr.join("");
	});



	form.querySelector("input[type='email']").addEventListener("blur", () => {
		let str = form.querySelector("input[type='email']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm, '');
		str = str.replace(/\-+/g, "-");
		const arr = [];
		const regExp = /[a-z\@\-\_\.!\~\*]/i;
		
		saveCorrectValue(arr, str, regExp);		
		form.querySelector("input[type='email']").value = arr.join("");
	});

	form.querySelector("input[type='tel']").addEventListener("blur", () => {
		let str = form.querySelector("input[type='tel']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm, '');
		str = str.replace(/\-+/g, "-");
		const arr = [];
		const regExp = /[\d\(\)\-]/i;
		
		saveCorrectValue(arr, str, regExp);		
		form.querySelector("input[type='tel']").value = arr.join("");
	});
 };

 calcValidate();
 formValidate(document.querySelector(".main-form"));
};

export default validate;