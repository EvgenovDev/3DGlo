import {
	formValidate
} from "./validate";

const sendForm = (formId) => {
	const form = document.getElementById(formId);

	const sendData = ({
		url,
		method,
		headers,
		file
	}) => {
		return fetch(url, {
			method: method,
			headers: headers,
			body: file
		});
	};

	const createDivMessage = (createdElement, message, elementClass) => {
		const newDiv = document.createElement(createdElement);
		if (message == "message") {
			newDiv.textContent = "Данные формы заполненны не верно,форма не валидна";
		} else if (message == "preload") {
			newDiv.innerHTML = `
			<div class="loader">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>`
		}
		newDiv.classList.add(elementClass);
		form.append(newDiv);
	};

	const submit = () => {
		const inputs = form.querySelectorAll("input");
		const formData = new FormData(form);
		const formObject = {};

		formData.forEach((val, key) => {
			formObject[key] = val;
		});

		if (!form.querySelector(".form-message")) {
			createDivMessage("div", "preload", "form-message");
		} else {
			form.querySelector(".form-message").textContent = "";
			form.querySelector(".form-message").innerHTML = `<div class="loader">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>`;
		}

		if (formValidate(form)) {
			sendData({
					url: "https://jsonplaceholder.typicode.com/posts",
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					},
					file: JSON.stringify(formObject)
				})
				.then(async (response) => {
					const data = await response.json();
					console.log(data);
				})
				.then(() => {
					inputs.forEach((elem) => {
						elem.value = "";
					});
				})
				.then(() => {
					let content = form.querySelector(".form-message");
					content.innerHTML = "Данные успешно отправлены.";
					content.classList.add("success");
				})
				.catch((error) => {
					console.log(error.message);
				});
		} else {
			if (form.querySelector(".form-message")) {
				form.querySelector(".form-message").textContent = "Данные формы заполненны не верно,форма не отправлена";
			} else {
				createDivMessage("div", "message", "form-message");
			}
		}
	};

	try {
		if (form) {
			form.addEventListener("submit", (e) => {
				e.preventDefault();
				submit();
			});
		} else {
			throw new Error(`Формы с id:"${formId}" - не существует`);
		}
	} catch (error) {
		console.log(error.message);
	}

};

export default sendForm;