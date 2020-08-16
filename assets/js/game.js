
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {  
  while (enemyHealth > 0 && playerHealth > 0) {
  // Ask player to choose whether or not to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player choses to skip
   if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  }
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    // reward user for winning 
    playerMoney = playerMoney + 20;
    // since enemy is dead we leave the loop
    break;
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    // sincle user is dead we leave loop
    break;
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");}
  }

};

  // Game States
  // "WIN" - Player robot has defeated all enemy robots
  //    * Fight all enemy robots
  //    * Defeat each enemy robot
  // "LOSE" - Player robot's health is zero or less



    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;  
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
  }

