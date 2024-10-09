let myText = document.getElementById("my-text");
let result = document.getElementById("count-result");

myText.addEventListener("input", () => {
	let count = myText.value.length;
	result.textContent = `Total de Caracteres:  ${count}`;
});