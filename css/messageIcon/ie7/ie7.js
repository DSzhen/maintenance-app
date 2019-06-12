/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mes\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mes-emergency_four': '&#xe900;',
		'mes-emergency_two': '&#xe901;',
		'mes-emergency_there': '&#xe903;',
		'mes-emergency_one': '&#xe904;',
		'mes-emergency_five': '&#xe906;',
		'mes-emergency_six': '&#xe907;',
		'mes-police_one': '&#xe908;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mes-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
