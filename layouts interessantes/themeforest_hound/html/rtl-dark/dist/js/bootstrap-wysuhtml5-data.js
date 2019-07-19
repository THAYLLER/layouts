/*Bootstrap wysihtml5 Init*/
$(window).load(function(){
	$("iframe.wysihtml5-sandbox").contents().find("body").attr("style","direction:rtl;")
});
$(document).ready(function () {
	"use strict";
	
	$('.textarea_editor').wysihtml5({
		toolbar: {
		  fa: true,
		  "link": true,
		}
	});
	
});
