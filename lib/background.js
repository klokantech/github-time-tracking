chrome.webRequest.onHeadersReceived.addListener(function (details) {
  for (i = 0; i < details.responseHeaders.length; i++) {
    if (details.responseHeaders[i].name.toUpperCase() == 'CONTENT-SECURITY-POLICY') {
      var csp = details.responseHeaders[i].value;
      csp = csp.replace('script-src', 'script-src https://*.harvestapp.com');
      csp = csp.replace('style-src', 'style-src https://*.harvestapp.com');
      csp = csp.replace('connect-src', 'connect-src https://*.harvestapp.com');
      csp = csp.replace('img-src', 'img-src https://*.harvestapp.com');
      csp = csp.replace('frame-src', 'frame-src https://*.harvestapp.com');
      details.responseHeaders[i].value = csp;
    }
  }
  return {
    responseHeaders : details.responseHeaders
  };
}, {
  urls : ["https://github.com/*"],
  types : ["main_frame"]
},
  ["blocking", "responseHeaders"]
);
