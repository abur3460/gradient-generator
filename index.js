window.onload = function () {
	$('#cs-one').spectrum({
		color: '#6e1b55',
		showInput: true,
		showInitial: true,
		showAlpha: false,
		disabled: false,
		showPalette: false,
		clickoutFiresChange: true,
		chooseText: 'Select',
		showButtons: false,
	});
	$('#cs-two').spectrum({
		color: '#4d8fcc',
		showInput: true,
		showInitial: true,
		showAlpha: false,
		disabled: false,
		showPalette: false,
		clickoutFiresChange: true,
		chooseText: 'Select',
		showButtons: false,
	});
	$('#cp-one').click(function () {
		$('#cs-one').spectrum('toggle');
		return false;
	});
	$('#cp-two').click(function () {
		$('#cs-two').spectrum('toggle');
		return false;
	});

	$('#gradient-bar').slider({
		range: false,
		animate: 'fast',
		min: 0,
		max: 100,
		values: [0, 100],
		orientation: 'horizontal',
	});
	$('#gradient-bar').on('slide', function (event, ui) {
		// less.modifyVars({
		// 	'@slider-val1': `${ui.values[1]}`,
		// 	'@slider-val2': `${ui.values[0]}`,
		// });
	});
};

function setGradient(deg, color1, color2) {
	console.log(color1, color2);
	$('#cs-one').text(`#${color1}`);
	$('#cs-two').text(`#${color2}`);
	document.getElementById(
		'canvas'
	).style.backgroundImage = `linear-gradient(${deg}deg, #${color1}, #${color2})`;
	less.modifyVars({
		'@color-1': `#${color1}`,
		'@color-2': `#${color2}`,
	});
}
