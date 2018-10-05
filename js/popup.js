let showGrid = document.getElementById('showGrid');

// reads local storage object 
chrome.storage.sync.get(null, function(data) {
    
    if(data) {
        //document.getElementById('mobile-cols').value = data.mobilecols;
        console.log('mobilecols: ');
        for(var key in items) {
            console.log(items[key]);
        }
    }
});

// shows gridlayout button 
// and inserts show-grid.js, adidas-grid.css files
showGrid.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        {
            file: 'show-grid.js'
          }
        );
    });
    chrome.tabs.insertCSS(null, {file:"adidas-grid.css"});
  };