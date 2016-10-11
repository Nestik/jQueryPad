$(document).ready(function() {

	$('button').click(newGrid);

});

function newGrid() {

	$('.width').remove();

	var height = prompt("Choose a height between 1 - 40");
	var width = prompt("Choose a width between 1 - 40");

	while (height > 40 || height < 1) {
		height = prompt("Height must be between 1 - 40");
	}

	while (width > 40 || width < 1) {
		width = prompt("Width must be between 1 - 40");
	}

	window.alert("Your height is set to " + height);
	window.alert("Your width is set to " + width);

	for (var i=0; i<width; i++) {
		$('.container').append('<div class="width"></div>');
	}

	for (var i=0; i<height; i++) {
		$('div.width').append('<div class="height"></div>');
	}


	$('.height').hover(function() {
		$(this).addClass('hover');
	});
};