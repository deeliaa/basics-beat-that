//2 player game, players take turns
//player clicks submit, the game rolls 2 dice and shows the dice rolls
//player picks the order of the dice they want
//after both players have rolled and chose dice order, player with higher comnbined number wins.

var gameModeRollTheDice = "roll the dice ";
var gameModeChooseDiceORder = "choose dice order";
var gameModeSeeWhoWins = "see who wins";
var gameMode = gameModeRollTheDice;
var myOutputValue = "";
var playerRolls = [];
var score = [];

var playerNumber = 1;

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var randomRoll = randomInteger + 1;
  return randomRoll;
};
var rollPlayerDice = function () {
  for (var counter = 0; counter < 2; counter += 1) {
    playerRolls.push(diceRoll());
    myOutputValue = `Player ${playerNumber} , You rolled dice 1 : ${playerRolls[0]} and dice 2 ${playerRolls[1]} <br> <br>. Put in either '1' or '2' to select which dice would be the first digit.`;
    //1 or 2 represents the order of what they wanna go fiat
  }
};
var main = function (input) {
  if (gameMode == gameModeRollTheDice) {
    myOutputValue = rollPlayerDice();
    gameMode = gameModeChooseDiceORder;
    return myOutputValue;
  } else if (gameMode == gameModeChooseDiceORder) {
    var score;
    if (input != 1 && input != 2) {
      myOutputValue = `please enter either '1' or '2' to choose the order of dice`;
      return myOutputValue;
    } else if (input == 1) {
      var playerResult = String(playerRolls[0]) + String(playerRolls[1]);
      myOutputValue`your resulting value is ${playerResult}`;
      score.push(playerResult);
    } else if (input == 2) {
      var playerResult = String(playerRolls[1]) + String(playerRolls[0]);
      myOutputValue`your resulting value is ${playerResult}`;
      score.push(playerResult);
    }
    if (playerNumber == 1) {
      playerNumber = 2;
      gameMode = gameModeRollTheDice;
    } else if (playerNumber == 2) {
      gameMode = gameModeSeeWhoWins;
    }
    return myOutputValue;
    //for every "game state or game mode" --> need to return
  }
  if (gameMode == gameModeSeeWhoWins) {
    if (score[0] > score[1]) {
      myOutputValue = "player 1 wins!";
    } else if (score[1] > score[0]) {
      myOutputValue = "player 2 wins!";
    }
  }
  return myOutputValue;
};
