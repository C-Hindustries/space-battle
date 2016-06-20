function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your ship!");
  rocketName = gameStartPrompt;
  document.getElementById("rocketName").innerHTML = rocketName;
  document.getElementById("starterDiv").className = "hidden";
  document.getElementById("statsDiv").className = "statsDiv";
}
