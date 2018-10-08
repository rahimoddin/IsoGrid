let showGrid = document.getElementById('showGrid');
/**
 * reads local storage object
 * if user settings found, fill the form with user settings
 * else with default settings 
 */
chrome.storage.sync.get(null, function(data) {
    if(data && data.user) {
        var userdata = data.user;
        document.getElementById('desktop-cols').value = userdata['desktop-cols'];
        document.getElementById('tablet-cols').value = userdata['tablet-cols'];
        document.getElementById('mobile-cols').value = userdata['mobile-cols'];

        document.getElementById('tablet-breakpoint').value = userdata['tablet-breakpoint'];
        document.getElementById('mobile-breakpoint').value = userdata['mobile-breakpoint'];
        document.getElementById('max-layout-width').value = userdata['max-layout-width'];
        
        document.getElementById('desktop-gutter-inner').value = userdata['desktop-gutter-inner'];
        document.getElementById('tablet-gutter-inner').value = userdata['tablet-gutter-inner'];
        document.getElementById('mobile-gutter-inner').value = userdata['mobile-gutter-inner'];

        document.getElementById('desktop-gutter-outer').value = userdata['desktop-gutter-outer'];
        document.getElementById('tablet-gutter-outer').value = userdata['tablet-gutter-outer'];
        document.getElementById('mobile-gutter-outer').value = userdata['mobile-gutter-outer'];
    } else {
        document.getElementById('desktop-cols').value = 12;
        document.getElementById('tablet-cols').value = 8;
        document.getElementById('mobile-cols').value = 4;

        document.getElementById('tablet-breakpoint').value = 840;
        document.getElementById('mobile-breakpoint').value = 480;
        document.getElementById('max-layout-width').value = 1480;

        document.getElementById('desktop-gutter-inner').value = 15;
        document.getElementById('tablet-gutter-inner').value = 15;
        document.getElementById('mobile-gutter-inner').value = 15;

        document.getElementById('desktop-gutter-outer').value = 10;
        document.getElementById('tablet-gutter-outer').value = 10;
        document.getElementById('mobile-gutter-outer').value = 10;

        
    }

    /** TODO: breakpoint logic */
    
});



// shows toggle grid button 
// and inserts show-grid.js, adidas-grid.css files
showGrid.onclick = function(element) {
    
    let settings = {};
    
    let userdata = {};// = data.user;
    userdata['desktop-cols'] = document.getElementById('desktop-cols').value;
    userdata['tablet-cols'] = document.getElementById('tablet-cols').value;
    userdata['mobile-cols'] = document.getElementById('mobile-cols').value;
    
    userdata['tablet-breakpoint'] = document.getElementById('tablet-breakpoint').value;
    userdata['mobile-breakpoint'] = document.getElementById('mobile-breakpoint').value;
    userdata['max-layout-width'] = document.getElementById('max-layout-width').value;

    userdata['desktop-gutter-inner'] = document.getElementById('desktop-gutter-inner').value;
    userdata['tablet-gutter-inner'] = document.getElementById('tablet-gutter-inner').value;
    userdata['mobile-gutter-inner'] = document.getElementById('mobile-gutter-inner').value;

    userdata['desktop-gutter-outer'] = document.getElementById('desktop-gutter-outer').value;
    userdata['tablet-gutter-outer'] = document.getElementById('tablet-gutter-outer').value;
    userdata['mobile-gutter-outer'] = document.getElementById('mobile-gutter-outer').value;

    settings.user = userdata;
    chrome.storage.sync.set(settings, function() {
        console.log('Settings saved');
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        {
            file: 'show-grid.js'
          }
        );
    });
    chrome.tabs.insertCSS(null, {file:"show-grid.css"});
  };
