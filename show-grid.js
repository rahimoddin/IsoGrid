/**
 * Creates markup for grid ovelay
 * cae-grid-test - parent container
 * cae-grid-overlay - container for columns
 * cae-ovelay-col - column 
 * cae-inner inner area of the column
 */
var div = document.createElement("div");
div.className = "cae-grid-test";
var numcols = 12;
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
