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
		el.innerHTML = '<span style="font-family: \'wbaid\'">' + entity + '</span>' + html;
	}
	var icons = {
		'wbAidicon-arrowDown': '&#xe916;',
		'wbAidicon-searchSolid': '&#xe917;',
		'wbAidicon-userList': '&#xe918;',
		'wbAidicon-wbMinitor': '&#xe915;',
		'wbAidicon-reset': '&#xe914;',
		'wbAidicon-edit': '&#xe900;',
		'wbAidicon-backSolid': '&#xe901;',
		'wbAidicon-maintain': '&#xe902;',
		'wbAidicon-aroundSolid': '&#xe903;',
		'wbAidicon-exit': '&#xe904;',
		'wbAidicon-layer': '&#xe905;',
		'wbAidicon-peopleManagement': '&#xe906;',
		'wbAidicon-maintainPlan': '&#xe907;',
		'wbAidicon-orderManagement': '&#xe908;',
		'wbAidicon-systemManagement': '&#xe909;',
		'wbAidicon-circle': '&#xe90a;',
		'wbAidicon-arrowRight': '&#xe90b;',
		'wbAidicon-8': '&#xe90c;',
		'wbAidicon-search': '&#xe90d;',
		'wbAidicon-delete': '&#xe90e;',
		'wbAidicon-remove': '&#xe90f;',
		'wbAidicon-back': '&#xe910;',
		'wbAidicon-user': '&#xe911;',
		'wbAidicon-clatify': '&#xe912;',
		'wbAidicon-phone': '&#xe913;',
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
		c = c.match(/wbAidicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
