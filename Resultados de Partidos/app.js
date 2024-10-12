// app.js
document.addEventListener('DOMContentLoaded', function () {
    // URL de la API (debe coincidir con la del servidor Flask que está haciendo el scraping)
    const apiUrl = 'http://localhost:3000/';

    // Hacemos la petición a la API
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const resultadosDiv = document.getElementById('resultados');

//         // Si obtenemos los resultados correctamente
//         data.forEach(partido => {
//             // Crear un contenedor para cada resultado
//             const resultDiv = document.createElement('div');
//             resultDiv.classList.add('result');

//             // Añadir el nombre de los equipos
//             const equipos = document.createElement('h2');
//             equipos.textContent = `${partido.equipo1} vs ${partido.equipo2}`;
//             resultDiv.appendChild(equipos);

//             // Añadir el marcador
//             const marcador = document.createElement('p');
//             marcador.classList.add('score');
//             marcador.textContent = `Marcador: ${partido.marcador}`;
//             resultDiv.appendChild(marcador);

//             // Añadir el contenedor al div principal
//             resultadosDiv.appendChild(resultDiv);
//         });
//     })
//     .catch(error => {
//         console.error('Error al obtener los resultados:', error);
//         const resultadosDiv = document.getElementById('resultados');
//         resultadosDiv.textContent = 'Hubo un error al obtener los resultados.';
//     });
// });
