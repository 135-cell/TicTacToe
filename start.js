function submitForm(e) {
    e.preventDefault();
    let playerOne = document.forms["welcomeForm"]["playerOne"].value;
    let playerTwo = document.forms["welcomeForm"]["playerTwo"].value;
  
    sessionStorage.setItem("playerOne", playerOne);
    sessionStorage.setItem("playerTwo", playerTwo);
    location.href = "game.html";
  
  }