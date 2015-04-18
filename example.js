var url = "http://www.google.com";
var page = require("webpage").create();
page.viewportSize = { width:1280, height:768 };
page.open(url).then(function(status){
    page.stop();
    page.render('/data/screenshot.jpg', {format:"jpg", quality:60});
    page.close();
    phantom.exit();
});
