browser.contextMenus.create({
  id: "wiki-search",
  title: "Wiki Search: %s",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  var searchtext = info.selectionText.trim();
  switch (info.menuItemId) {
    case "wiki-search":
      var opentab = browser.tabs.create({
        url: "https://wikipedia.org/w/index.php?search="+searchtext
      });
      opentab.then(onError);
      break;
  }
});

function onError(error) {
  console.log(`[Wikipedia Search] Error: ${error}`);
}
