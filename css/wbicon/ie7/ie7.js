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
		el.innerHTML = '<span style="font-family: \'wbicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'wbicon-eye': '&#xe953;',
		'wbicon-systemName': '&#xe952;',
		'wbicon-equipment': '&#xe951;',
		'wbicon-upArrow': '&#xe94f;',
		'wbicon-down': '&#xe950;',
		'wbicon-delete': '&#xe94e;',
		'wbicon-mainten': '&#xe909;',
		'wbicon-fault': '&#xe90f;',
		'wbicon-uncheck': '&#xe917;',
		'wbicon-phone': '&#xe94c;',
		'wbicon-linkMan': '&#xe94d;',
		'wbicon-remind': '&#xe908;',
		'wbicon-more_wechart': '&#xe907;',
		'wbicon-filtrate': '&#xe902;',
		'wbicon-app': '&#xe903;',
		'wbicon-bluetooths': '&#xe904;',
		'wbicon-service': '&#xe905;',
		'wbicon-times': '&#xe906;',
		'wbicon-edit': '&#xe900;',
		'wbicon-refer': '&#xe901;',
		'wbicon-courierList': '&#xe947;',
		'wbicon-removeOutline': '&#xe946;',
		'wbicon-delete2': '&#xe943;',
		'wbicon-search2': '&#xe944;',
		'wbicon-sureOutline': '&#xe945;',
		'wbicon-arrowDown2': '&#xe942;',
		'wbicon-bluetooth': '&#xe919;',
		'wbicon-heart': '&#xe91a;',
		'wbicon-wbset': '&#xe927;',
		'wbicon-other': '&#xe928;',
		'wbicon-noticeSolid': '&#xe91b;',
		'wbicon-buildSolid': '&#xe91c;',
		'wbicon-horn': '&#xe91d;',
		'wbicon-time': '&#xe91e;',
		'wbicon-timer': '&#xe91f;',
		'wbicon-timeSolid': '&#xe920;',
		'wbicon-removeSolid': '&#xe921;',
		'wbicon-building': '&#xe922;',
		'wbicon-jobAccount': '&#xe923;',
		'wbicon-messageSolid': '&#xe924;',
		'wbicon-addressList': '&#xe925;',
		'wbicon-notice': '&#xe926;',
		'wbicon-set': '&#xe929;',
		'wbicon-locationAround': '&#xe92a;',
		'wbicon-arrowMark': '&#xe92b;',
		'wbicon-arrowAround': '&#xe92c;',
		'wbicon-security': '&#xe92d;',
		'wbicon-forbid': '&#xe92e;',
		'wbicon-mark': '&#xe92f;',
		'wbicon-questionMark': '&#xe930;',
		'wbicon-add': '&#xe931;',
		'wbicon-remove2': '&#xe932;',
		'wbicon-cameraSolid': '&#xe933;',
		'wbicon-linkman': '&#xe934;',
		'wbicon-locationSolid': '&#xe935;',
		'wbicon-voice': '&#xe936;',
		'wbicon-camera': '&#xe937;',
		'wbicon-account': '&#xe938;',
		'wbicon-vitasphere': '&#xe939;',
		'wbicon-repository': '&#xe93a;',
		'wbicon-arrowRight2': '&#xe941;',
		'wbicon-telephone': '&#xe93b;',
		'wbicon-location': '&#xe93c;',
		'wbicon-splice': '&#xe93d;',
		'wbicon-sure': '&#xe93e;',
		'wbicon-circle2': '&#xe93f;',
		'wbicon-arrowTop': '&#xe940;',
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
		c = c.match(/wbicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
