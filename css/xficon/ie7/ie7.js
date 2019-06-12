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
		el.innerHTML = '<span style="font-family: \'xficon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'xficon-alerm': '&#xe932;',
		'xficon-forbindden': '&#xe933;',
		'xficon-splice': '&#xe969;',
		'xficon-voice': '&#xe968;',
		'xficon-backward': '&#xe954;',
		'xficon-security': '&#xe955;',
		'xficon-attention': '&#xe956;',
		'xficon-reportInfo': '&#xe957;',
		'xficon-mail': '&#xe958;',
		'xficon-hornSolid': '&#xe931;',
		'xficon-location': '&#xe918;',
		'xficon-add2': '&#xe919;',
		'xficon-schedule': '&#xe91a;',
		'xficon-fire': '&#xe91b;',
		'xficon-locationPos': '&#xe91c;',
		'xficon-minus': '&#xe91d;',
		'xficon-sure2': '&#xe91e;',
		'xficon-file': '&#xe91f;',
		'xficon-localSolid': '&#xe920;',
		'xficon-monitor': '&#xe921;',
		'xficon-home': '&#xe922;',
		'xficon-message': '&#xe923;',
		'xficon-person': '&#xe924;',
		'xficon-notice': '&#xe925;',
		'xficon-orientation': '&#xe926;',
		'xficon-illumination': '&#xe927;',
		'xficon-report': '&#xe928;',
		'xficon-edit2': '&#xe929;',
		'xficon-questionMark': '&#xe92a;',
		'xficon-camera2': '&#xe92b;',
		'xficon-arrowDown2': '&#xe92c;',
		'xficon-seat': '&#xe92d;',
		'xficon-lineChart2': '&#xe92e;',
		'xficon-new': '&#xe92f;',
		'xficon-horn': '&#xe930;',
		'xficon-add': '&#xe900;',
		'xficon-arrowLeft': '&#xe901;',
		'xficon-user': '&#xe902;',
		'xficon-lock': '&#xe903;',
		'xficon-scan': '&#xe904;',
		'xficon-arrowRight': '&#xe905;',
		'xficon-warning': '&#xe906;',
		'xficon-sure': '&#xe907;',
		'xficon-bell': '&#xe908;',
		'xficon-service': '&#xe909;',
		'xficon-woodenHorse2': '&#xe90a;',
		'xficon-counsel': '&#xe90b;',
		'xficon-gear': '&#xe917;',
		'xficon-time': '&#xe90c;',
		'xficon-lineChart': '&#xe90d;',
		'xficon-arrowDown': '&#xe90e;',
		'xficon-fireDisaster': '&#xe90f;',
		'xficon-timer': '&#xe910;',
		'xficon-feedback': '&#xe911;',
		'xficon-camera': '&#xe912;',
		'xficon-alertor': '&#xe913;',
		'xficon-edit': '&#xe914;',
		'xficon-telphone': '&#xe915;',
		'xficon-picture': '&#xe916;',
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
		c = c.match(/xficon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
