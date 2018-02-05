$(document).ready(function() {

	// initial variables
	var lisa = {
		HP: 180,
		attackPower: 0,
		counterAttackPower: 25
	}
	var denny = {
		HP: 120,
		attackPower: 0,
		counterAttackPower: 18
	}
	var johnny = {
		HP: 100,
		attackPower: 0,
		counterAttackPower: 12
	}
	var mark = {
		HP: 80,
		attackPower: 0,
		counterAttackPower: 10
	}
	
	yourCharacter = "";
	enemiesAvailable = "";
	yourDefender = "";
	yourAttackStrength = 0;

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
		$(this).appendTo(".your-character").css("float", "none");
		clicks = false;
		} else {
			$(this).appendTo(".defender").css("background-color","#FFB6C1");
		}
	});

	// Attack button, prints message

	$(".attack-button").click(function() {
		$(".printActions").text("You attacked " + yourDefender + " for " +yourAttackStrength + " damage. " + yourDefender + " attacked you back for " + "fill this" + " damage. ");
	});




});
