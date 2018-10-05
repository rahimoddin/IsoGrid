
var settings = {
	'default': {
		'mobilecols': 4, 
		'tabletcols': 8, 
		'desktopcols': 12,
		'maxwidth': 1480,
		'overlayPadding': 8,
		'innerMargin': 10,
		'mobilebreakpoint': 480,
		'tabletbreakpoint': 840
	}

}
// Save it using the Chrome extension storage API.
chrome.storage.sync.set(settings, function() {
	console.log('Settings saved');
});
/* chrome.storage.sync.set({'mobilecols': '5'}, function() {
	console.log('Settings saved');
}); */
  // Read it using the storage API
chrome.storage.sync.get(null, function(items) {
//message('Settings retrieved', items);
	console.log(items.user);
	for(var key in items) {
		console.log(items[key]);
	}
	constructGridOvelay();
});

/**
 * Creates markup for grid ovelay
 * cae-grid-test - parent container
 * cae-grid-overlay - container for columns
 * cae-ovelay-col - column 
 * cae-inner inner area of the column
 */


function constructGridOvelay() {
	var div = document.createElement("div");
	div.className = "cae-grid-test";
	var numcols = 24;
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
		<input type="checkbox" id="cae-grid-toggle" class="cae-grid-toggle" /> \
		<label for="cae-grid-toggle">Toggle Grid</label> \
	';

	document.getElementsByTagName('body')[0].appendChild(div);
	div.appendChild(overlay);
	constructCSS(settings.default);
}



function constructCSS(data) {
	var percentColWidth = {};
	percentColWidth.desktop = parseFloat(100/data.desktopcols).toFixed(5)+'%';
	percentColWidth.tablet = parseFloat(100/data.tabletcols).toFixed(5)+'%';
	percentColWidth.mobile = parseFloat(100/data.mobilecols).toFixed(5)+'%';

	console.log('percentwidth: '+ percentColWidth.desktop);


	var css = '.cae-grid-test .cae-overlay-col {'+
				'width: '+percentColWidth.desktop+'; '+
				'}'+
				'@media only screen and (max-width: '+data.tabletbreakpoint+'px) {'+
				'	.cae-grid-test .cae-overlay-col {'+
				'  		width: '+percentColWidth.tablet+'; '+
				'	} '+
				'}'+
				'@media only screen and (max-width: '+data.mobilebreakpoint+'px) {'+
				'	.cae-grid-test .cae-overlay-col {'+
				'		width: '+percentColWidth.mobile+'; '+
				'	} '+
				'}'


    var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));

	head.appendChild(style);


}
