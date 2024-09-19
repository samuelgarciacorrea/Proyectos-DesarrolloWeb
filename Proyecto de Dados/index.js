function rollDice() {
    // Generar número aleatorio para Player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "./images/" + randomDiceImage;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImageSource);
  
    // Generar número aleatorio para Player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "./images/" + randomDiceImage2;
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomImageSource2);
  
    // Determinar el ganador
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
      document.querySelector("h1").innerHTML = "It is a Draw";
    }
  }
  
  // Ejecutar el juego automáticamente al cargar la página
  rollDice();
  