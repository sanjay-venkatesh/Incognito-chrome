chrome.browserAction.onClicked.addListener(function ({ url }) {
  chrome.windows.create({
    url,
    incognito: true,
  });
});
