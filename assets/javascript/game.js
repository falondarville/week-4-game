$(document).ready(function() {

	// initial variables
	var lisa = {
		name: "Lisa",
		HP: 180,
		attackPower: 7,
		counterAttackPower: 25
	}
	var denny = {
		name: "Denny",
		HP: 120,
		attackPower: 6,
		counterAttackPower: 18
	}
	var johnny = {
		name: "Johnny",
		HP: 100,
		attackPower: 4,
		counterAttackPower: 12
	}
	var mark = {
		name: "Mark",
		HP: 80,
		attackPower: 3,
		counterAttackPower: 10
	}
	
	// var yourCharacter = "";
	// var enemiesAvailable = "";
	// var yourDefender = "";

	// update HP variables
	$("#lisa-hp").html(lisa.HP);
	$("#denny-hp").html(denny.HP);
	$("#johnny-hp").html(johnny.HP);
	$("#mark-hp").html(mark.HP);

	// choose character, change background color, move to Your Character section
	// move other three characters to Enemies section, change background color
	// choose enemy, enemy goes to Defender section
	var clicks = true;
	$(".restyle").click(function() {
		if (clicks) {

		$(this).parent().find(".restyle").css("background-color", "#83C1BC");
		$(this).css("background-color", "#74D774");
		$(this).parent().find(".restyle").appendTo(".enemies-available");
		$(this).appendTo(".your-character").css("float", "none");

		// how do I grab the id of the character and defenders? I actually may not need to do this. Instead, I need to be able to refer to the variables I initially set out for each character. This will mean that I can reach into the variable to grab additional information I need further in the game (starting HP, attack power, and counter attack power)
		// alternatively, I can assign an id to the character moved to new div
		clicks = false;
		} else {
			$(this).appendTo(".defender").css("background-color","#FFB6C1");
			var yourDefender = $(".defender").closest().attr("id");
		}

		// return yourCharacter;
		// return yourDefender;
		// console.log(yourCharacter);
		// console.log(yourDefender);
	});

	// CALCULATE FIGHTING: will this be a separate function altogether or part of the attack-button function below? It is dependent on click, so it may come down to game design, and the functionality can work either way as long as I call the calculations withing the click function. 

	// // Attack button, prints message
	// $(".attack-button").click(function() {
	// 	// if your characters reaches 0 HP, you lose
	// 	if (your-character.HP <= 0) {
	// 		$(".printActions").text("You lost.");
	// 		// show reset game button
	// 		// game over
	// 	} else if (yourDefender.HP <= 0) {
	// 		$(".printActions").text("You defeated " + yourDefender + " .");
	// 		// show reset game button
	// 		// defenders is deleted from the game
	// 		// check if there are any other enemies available (this may have to be a different function including a counter of three total enemies), and if there are, prompt user to choose another enemy. If there are no other enemies, the user wins the whole game. 
	// 	} else if () {
	// 		// if attack button clicked and there is no enemy selected, display text "No enemy here."
	// 	}

	// 	$(".printActions").text("You attacked " + yourDefender + " for " + lisa.attackPower + " damage. " + yourDefender + " attacked you back for " + "fill this" + " damage. ");
	// 	// placeholder functionality
	// 	attackpower +=;
	// 	HP -= yourDefender.counterAttackPower;

	// });

});
