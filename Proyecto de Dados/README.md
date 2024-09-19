# Dice Game 🎲
## Descripción
Este es un juego simple de dados que simula una partida entre dos jugadores. Cada vez que el usuario hace clic en el botón "Roll the Dice", se generan dos números aleatorios entre 1 y 6, representando los resultados de dos tiradas de dados para Player 1 y Player 2. El juego determina automáticamente cuál jugador obtiene el número más alto y muestra quién gana o si el resultado es un empate.

## Propósito del Proyecto
El propósito de este proyecto es mostrar cómo utilizar JavaScript para generar números aleatorios y manipular el DOM para actualizar imágenes y texto en una página web. Este proyecto es ideal para quienes buscan aprender:

#### Manipulación del DOM con JavaScript.
Generación de números aleatorios.
Uso de eventos en botones.
Aplicación de estilos con CSS.
Centrado de elementos en la pantalla con Flexbox.


## Funcionamiento del Juego
Generación de Números Aleatorios: Cada vez que se hace clic en el botón "Roll the Dice", se genera un número aleatorio entre 1 y 6 para cada jugador, lo que simula el lanzamiento de un dado.

Cambio de Imagen: Las imágenes de los dados cambian según el número generado, mostrando una cara del dado correspondiente.

Resultado: Se compara el número de ambos jugadores. Si el número de Player 1 es mayor, se muestra "Player 1 wins". Si el número de Player 2 es mayor, se muestra "Player 2 wins". Si ambos números son iguales, se muestra "It is a Draw".

Reiniciar Juego: El juego se reinicia automáticamente cada vez que se presiona el botón "Play again".