window.onload = function(){

    var APIUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=';
    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        console.log(window.location);
        document.getElementById("image").src= tablink;
    }); 

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var tabUrl = tabs[0].url;
        console.log(APIUrl + tabUrl);
        document.getElementById("image").src= APIUrl + tabUrl;
    });

}

 
