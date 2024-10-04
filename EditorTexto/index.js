// Selecciona los botones básicos de opción
let optionsButtons = document.querySelectorAll(".option-button");
// Selecciona los botones avanzados (fuentes, tamaño, colores)
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
// Elemento de selección para las fuentes
let fontName = document.getElementById("fontName");
// Elemento de selección para el tamaño de la fuente
let fontSizeRef = document.getElementById("fontSize");
// Área donde el usuario escribirá el texto
let writingArea = document.getElementById("text-input");
// Botón para crear enlaces
let linkButton = document.getElementById("createLink");

// Lista de fuentes que se añadirán al selector de fuentes
let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "Cursive"];

// Función para inicializar el editor con las fuentes y tamaños predeterminados
const intializer = () => {
    // Añade las fuentes al selector de fuentes
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // Añade los tamaños al selector de tamaño de fuente
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    // Establece un tamaño de fuente predeterminado
    fontSizeRef.value = 3;
};

// Función para aplicar el formato seleccionado usando `execCommand`
const modifyText = (command, defaultUi = false, value = null) => {
    document.execCommand(command, defaultUi, value);
};

// Añade eventos a los botones básicos para aplicar el formato correspondiente
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id);
    });
});

// Añade eventos a los botones avanzados para cambiar fuentes, tamaños, colores, etc.
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

// Maneja la creación de enlaces cuando el usuario hace clic en el botón de "crear enlace"
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL:"); // Solicita al usuario que ingrese una URL
    if (/http/i.test(userLink)) { // Verifica si la URL contiene "http"
        modifyText(linkButton.id, false, userLink); // Crea el enlace con la URL ingresada
    } else {
        userLink = "http://" + userLink; // Si no contiene "http", añade automáticamente "http://"
        modifyText(linkButton.id, false, userLink);
    }
});

// Llama a la función de inicialización cuando la ventana se carga
window.onload = intializer();
