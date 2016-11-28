$(document).ready(
	function(){
		drawGrid(16);
		pixelHover();
	}
);


//This is the MAIN function, draws\appends divs to div.content and makes them fit the div independently of their size.
function drawGrid(number){
	for (var i = 0; i < number*number; i++) {
		$("#container").append('<div class="pixel"></div>');
	}

	$(".pixel").height($("#container").height()/number);
	$(".pixel").width($("#container").width()/number);
	$(".pixel").css({"float": "left", "background-color": "#FFFFFF"});
}

//Function that changes the amount of pixels in div.content, takes the value of the user.
function changeValue(){
	var newGridValue = prompt("Set the new size for the grid! WARNING: Values above 64 may cause lag: ");
	if(!isNaN(newGridValue) && newGridValue > 0 && (newGridValue % 1 === 0)){
		clearGrid();
		drawGrid(newGridValue);
		pixelHover();
	} else {
		alert("INVALID INPUT. Make sure you're writing a positive whole NUMBER!");
	}
}

//Completely removes ALL divs from the grid, leaves div.content empty.
function clearGrid(){
	$("div.pixel").remove();
}

//Changes the background color of all divs in div.content to EMPTY.
function cleanGrid(){
	$("div.pixel").css({"background-color": "#FFFFFF"});
}

//Used to change de background of the divs in div.content to BLACK.
function pixelHover(){
	$(".pixel").hover(

		function() {
			switch ($("#colors").val()){
				case "black":
					$(this).css({"background-color": "#000000"});
					break;
				case "rainbow":
					var randomColor = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
					$(this).css({"background": randomColor});
					break;
				case "shadow":

					$(this).css({"background-color": "#CCCCCC"})
					$(this).fadeToggle(250);
			
					break;
				case "default":
					$(this).css({"background-color": "#000000"});
			}
			
		}
	);
}
