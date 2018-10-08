
var settings = {
	'defaultSettings': {
		'desktop-cols': 4, 
		'tablet-cols': 8, 
		'mobile-cols': 12,
		'maxwidth': 1480,
		'overlayPadding': 8,
		'innerMargin': 10,
		'mobilebreakpoint': 480,
		'tabletbreakpoint': 840
	}

}

/** 
 * Read it using the storage API
 * */ 
chrome.storage.sync.get(null, function(items) {
	constructGridOvelay(items.user);
});

/**
 * Creates markup for grid ovelay
 * cae-grid-test - parent container
 * cae-grid-overlay - container for columns
 * cae-ovelay-col - column 
 * cae-inner inner area of the column
 */
function constructGridOvelay(savedData) {
	
	/** Remove grid if exists */
	var grid = document.getElementsByClassName("cae-grid-test");
	if (grid.length) {
		document.body.removeChild(grid[0]);
	}

	var div = document.createElement("div");
	div.className = "cae-grid-test";
	var numcols = Math.max(savedData['desktop-cols'], savedData['tablet-cols'], savedData['mobile-cols']);
	var overlay = document.createElement('div');
	overlay.className = 'cae-grid-overlay';

	for(i=0; i< numcols; i++) {
		var gridcol = document.createElement("div");
		gridcol.className = 'cae-overlay-col';
		
		var inner = document.createElement("div");
		inner.className ='cae-inner';
		
		gridcol.appendChild(inner)
		overlay.appendChild(gridcol);
	}

	div.innerHTML = '\
		<!-- Show a grid over lay (transparent)--> \
		<input type="checkbox" id="cae-grid-toggle" class="cae-grid-toggle" checked/> \
		<label for="cae-grid-toggle">Toggle Grid</label> \
	';

	document.getElementsByTagName('body')[0].appendChild(div);
	div.appendChild(overlay);
	
	constructCSS(savedData);
}

function constructCSS(data) {

	var percentColWidth = {};
	percentColWidth.desktop = parseFloat(100/data['desktop-cols']).toFixed(5)+'%';
	percentColWidth.tablet = parseFloat(100/data['tablet-cols']).toFixed(5)+'%';
	percentColWidth.mobile = parseFloat(100/data['mobile-cols']).toFixed(5)+'%';

	var css = 	'.cae-grid-test .cae-grid-overlay {'+
				'	max-width: '+data['max-layout-width']+'px;'+
				'	padding: 0 '+data['desktop-gutter-outer']+'px;'+
				'}'+
				'.cae-grid-test .cae-overlay-col {'+
				'	width: '+percentColWidth.desktop+'; '+
				'}'+
				'.cae-grid-test .cae-overlay-col .cae-inner {'+
				'	margin: 0 '+data['desktop-gutter-inner']+'px; '+
				'}'+
				'@media only screen and (max-width: '+data['tablet-breakpoint']+'px) {'+
				'	.cae-grid-test .cae-grid-overlay {'+
				'		padding: 0 '+data['tablet-gutter-outer']+'px;'+
				'	}'+
				'	.cae-grid-test .cae-overlay-col {'+
				'  		width: '+percentColWidth.tablet+'; '+
				'	}'+
				'	.cae-grid-test .cae-overlay-col .cae-inner {'+
				'		margin: 0 '+data['tablet-gutter-inner']+'px; '+
				'	}'+
				'}'+
				'@media only screen and (max-width: '+data['mobile-breakpoint']+'px) {'+
				'	.cae-grid-test .cae-grid-overlay {'+
				'		padding: 0 '+data['mobile-gutter-outer']+'px;'+
				'	}'+
				'	.cae-grid-test .cae-overlay-col {'+
				'		width: '+percentColWidth.mobile+'; '+
				'	} '+
				'	.cae-grid-test .cae-overlay-col .cae-inner {'+
				'		margin: 0 '+data['mobile-gutter-inner']+'px; '+
				'	}'+
				'}';



	/** Remove custom styles if exists */
	var customGridStyles = document.getElementById("custom-grid-style");
	if (customGridStyles) {
		customGridStyles.parentNode.removeChild(customGridStyles);
	}

    var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

	style.type = 'text/css';
	style.id = 'custom-grid-style';
	style.appendChild(document.createTextNode(css));

	head.appendChild(style);


}
