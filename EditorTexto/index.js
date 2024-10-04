let optionsButtons = document.querySelectorAll(".option-button");
let writingArea = document.getElementById("text-input");

const modifyText = (command) => {
    document.execCommand(command, false, null);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id);
    });
});

let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");

let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "Cursive"];

fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
});

for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
}

const modifyTextAdvanced = (command, value) => {
    document.execCommand(command, false, value);
};

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyTextAdvanced(button.id, button.value);
    });
});
