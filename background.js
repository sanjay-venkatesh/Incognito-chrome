chrome.browserAction.onClicked.addListener(function ({ url, incognito }) {
  chrome.windows.create({
    url,
    incognito: !incognito,
  });
});
