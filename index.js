window.onload = function () {
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
	$('#cc-one').text(`#${color1}`);
	$('#cc-two').text(`#${color2}`);
	document.getElementById(
		'canvas'
	).style.backgroundImage = `linear-gradient(${deg}deg, #${color1}, #${color2})`;
	less.modifyVars({
		'@color-1': `#${color1}`,
		'@color-2': `#${color2}`,
	});
}
