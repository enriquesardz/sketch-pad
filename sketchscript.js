$(document).ready(
	function(){
		drawGrid(16);
		pixelAlign();
		pixelHover();
	}
);

function changeValue(){
	var newGridValue = prompt("Set the new size for the grid! WARNING: Values above 64 may cause lag: ");
	if(!isNaN(newGridValue) && newGridValue > 0 && (newGridValue % 1 === 0)){
		clearGrid();
		drawGrid(newGridValue);
		pixelAlign();
		pixelHover();
	} else {
		alert("INVALID INPUT. Make sure you're writing a positive whole NUMBER!");
	}
	
}

//Draws\appends divs to div.content
function drawGrid(number){
	for (var i = 0; i < number*number; i++) {
		$("#container").append('<div class="pixel"></div>');
	}

	$(".pixel").height($("#container").height()/number);
	$(".pixel").width($("#container").width()/number);


}
//Completely removes ALL divs from the grid, leaves div.content empty.
function clearGrid(){
	$("div.pixel").remove();
}

function cleanGrid(){
	$(".pixel").css({"background-color": "none"});
}

function pixelHover(){
	$(".pixel").hover(
		
		function() {
			$(this).css({"background-color": "#000000"});
		}
	);
}

function pixelAlign(){

		$(".pixel").css({"float": "left"});
	
}