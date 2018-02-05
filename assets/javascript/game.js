// initial variables
var lisaHP = 180;
var dennyHP = 120;
var johnnyHP = 100;
var markHP = 80;
yourCharacter = "";
enemiesAvailable = "";
yourDefender = "";
yourAttackStrength = 0;

// update HP variables
$("#lisa-hp").html(lisaHP);
$("#denny-hp").html(dennyHP);
$("#johnny-hp").html(johnnyHP);
$("#mark-hp").html(markHP);

// choose character, change background color, move to Your Character section

// move other three characters to Enemies section, change background color

// choose enemy, enemy goes to Defender section

// Attack button, prints message

$(".attack-button").click(function() {
	$(".print-actions").text("You attacked " + yourDefender + " for " yourAttackStrength + " damage. " + yourDefender " attacked you back for " + ____ + " damage. "
});
