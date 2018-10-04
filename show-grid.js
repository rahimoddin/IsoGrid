/*
Grid overlay bookmarklet

Shows a responsive grid overlay on top of an existing page. Based on the Clarins v3 grid
which has a container maximum width, columns with fixed margins (gutters), variable
number of columns between layouts, and 3 layouts: "small" (mobile), "medium" (tablet)
and "large" (desktop).

Note this is independent of the grid CSS in the site, and as such is intended as a visual
test tool to see if elements are aligned to the grid.

This is coupled with sass/show-grid.scss and dd-grid-bookmarket.html which adds the bookmarklet.
*/
var div = document.createElement("div");
div.className = "cae-grid-test";
div.innerHTML = '\
	<!-- Show a grid over lay (transparent)--> \
	<input type="checkbox" id="cae-grid-toggle" class="cae-grid-toggle" /> \
	<label for="cae-grid-toggle">Toggle CAE Grid</label> \
	<div class="cae-grid-overlay"> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
		<div class="cae-overlay-col"> \
			<div class="cae-inner"> \
			</div> \
		</div> \
	</div><!-- grid-overlay --> \
';
document.getElementsByTagName('body')[0].appendChild(div);
//console.log('url:: '+ chrome.runtime.getURL());
/* Add styling *///
//var path = chrome.extension.getURL('adidas-grid.css');
//chrome.tabs.insertCSS(null, {file:"adidas-grid.css"});
//console.log('path:'+path);
//var s = document.createElement("link");
////s.rel = "stylesheet";
//s.type = "text/css";
//s.href = path;//"css/adidas-grid.css";
//document.getElementsByTagName('head')[0].appendChild(s);