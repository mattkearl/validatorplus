chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var html = "https://validator.w3.org/nu/?doc=" + tabs[0].url;
        var css = "https://jigsaw.w3.org/css-validator/validator?uri="+ tabs[0].url +"&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"
        window.open(html, '_blank');
        window.open(css, '_blank');
    });
});