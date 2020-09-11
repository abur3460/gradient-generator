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
	$('#cs-one').on('move.spectrum', function (e, tinyColor) {
		var hexVal = tinyColor.toHexString();
		var color_a = document.getElementById('cs-one');
		color_a.style.backgroundColor = hexVal;
		less.modifyVars({
			'@color-1': `${hexVal}`,
		});
		$('#cp-one').text(`${hexVal}`);
	});
	$('#cs-two').on('move.spectrum', function (e, tinyColor) {
		var hexVal = tinyColor.toHexString();
		console.log(hexVal);
		var color_a = document.getElementById('cs-two');
		color_a.style.backgroundColor = hexVal;
		less.modifyVars({
			'@color-2': `${hexVal}`,
		});
		$('#cp-two').text(`${hexVal}`);
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
	$('#slider').roundSlider({
		min: 0,
		max: 360,
		step: 1,
		radius: 60,
		width: 12,
		startAngle: 0,
		endAngle: '+360',
		animation: true,
		showTooltip: true,
		editableTooltip: true,
		readOnly: false,
		disabled: false,
		keyboardAction: true,
		mouseScrollAction: false,
		circleShape: 'full',
		lineCap: 'circle',
		handleSize: 25,

		change: 'traceEvent',
		drag: 'traceEvent',
	});

	function traceEvent(e) {
		less.modifyVars({
			'@deg': `${e.value}deg`,
		});
	}
};

function setGradient(deg, color1, color2) {
	console.log(color1, color2);
	$('#cp-one').text(`#${color1}`);
	$('#cp-two').text(`#${color2}`);
	document.getElementById(
		'canvas'
	).style.backgroundImage = `linear-gradient(${deg}deg, #${color1}, #${color2})`;
	less.modifyVars({
		'@color-1': `#${color1}`,
		'@color-2': `#${color2}`,
	});
}
