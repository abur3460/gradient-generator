let degree = '90';
let currentColor1 = '#f8757f';
let currentColor2 = '#4cc7d4';

window.onload = function () {
	$('#cs-one').spectrum({
		color: '#f8757f',
		showInput: false,
		showInitial: true,
		showAlpha: false,
		disabled: false,
		showPalette: false,
		clickoutFiresChange: true,
		chooseText: 'Select',
		showButtons: false,
	});
	$('#cs-two').spectrum({
		color: '#4cc7d4',
		showInput: false,
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
		currentColor1 = color_a;
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
		currentColor2 = color_a;
		less.modifyVars({
			'@color-2': `${hexVal}`,
		});
		$('#cp-two').text(`${hexVal}`);
	});
};

function setDegree(deg) {
	let degree = `to ${deg}`;
	less.modifyVars({
		'@deg': `${degree}`,
	});
}

function updateCurrent(deg, color1, color2) {
	$('.current').text(`linear-gradient(${deg}deg, #${color1}, #${color2})`);
}

function setGradient(deg, color1, color2) {
	console.log(color1, color2);
	$('#cp-one').text(`#${color1}`);
	$('#cp-two').text(`#${color2}`);
	less.modifyVars({
		'@color-1': `#${color1}`,
		'@color-2': `#${color2}`,
	});
	updateCurrent(deg, color1, color2);
}
