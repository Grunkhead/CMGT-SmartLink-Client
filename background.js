chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        // Only allow the plugin to work when one of these schemes is recognized in the URL
        pageUrl: {
          'schemes' : [
            'http',
            'https',
            'chrome',
            'calendar'
          ],
         },
      })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
