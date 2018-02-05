$(document).ready(function() {

	// initial variables
	var lisa = {
		name: Lisa,
		HP: 180,
		attackPower: 7,
		counterAttackPower: 25
	}
	var denny = {
		name: Denny,
		HP: 120,
		attackPower: 6,
		counterAttackPower: 18
	}
	var johnny = {
		name: Johnny,
		HP: 100,
		attackPower: 4,
		counterAttackPower: 12
	}
	var mark = {
		name: Mark,
		HP: 80,
		attackPower: 3,
		counterAttackPower: 10
	}
	
	// yourCharacter = "";
	// enemiesAvailable = "";
	// yourDefender = "";
	// yourAttackStrength = 0;

	// update HP variables
	$("#lisa-hp").html(lisa.HP);
	$("#denny-hp").html(denny.HP);
	$("#johnny-hp").html(johnny.HP);
	$("#mark-hp").html(mark.HP);

	// choose character, change background color, move to Your Character section
	// move other three characters to Enemies section, change background color
	// choose enemy, enemy goes to Defender section
	var clicks = true;
	$(".restyle").click(function(){
		if (clicks) {
		$(this).parent().find(".restyle").css("background-color", "#83C1BC");
		$(this).css("background-color", "#74D774");
		$(this).parent().find(".restyle").appendTo(".enemies-available");
		var yourCharacter = $(this).appendTo(".your-character").css("float", "none");
		clicks = false;
		} else {
			var yourDefender = $(this).appendTo(".defender").css("background-color","#FFB6C1");
		}
		// return yourCharacter;
		// return yourDefender;
		// how do I grab the id of the character and defenders
	});

	// Attack button, prints message

	$(".attack-button").click(function() {
		$(".printActions").text("You attacked " + yourDefender + " for " +yourAttackStrength + " damage. " + yourDefender + " attacked you back for " + "fill this" + " damage. ");
	});



	// if attack button clicked and there is no enemy selected, display text "No enemy here."

	// if your characters reaches 0 HP, you lose

	// if your defenders reaches 0 HP, they are deleted from the game

	// you win when you beat all three enemies

	// reset game button appears when you lose against an enemy or you win against all three enemies

});
