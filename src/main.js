// the websites forbidden
var forbidden_url = [];

chrome.action.onClicked.addListener((tab) => {
  chrome.runtime.openOptionsPage();
});

chrome.storage.sync.get(null, (items) => {
  //set default_blacklist, blacklist, whitelist
  const default_blacklist = [
    "www.facebook.com",
    "www.instagram.com",
    "www.messenger.com",
    "twitter.com",
    "www.i-gamer.net",
    "minesweeper.online",
    "slither.io",
  ];
  let blacklist = [];
  let whitelist = [];
  if (items.blacklist == undefined) {
    chrome.storage.sync.set({ blacklist: [] });
  } else {
    blacklist = items.blacklist;
  }
  if (items.whitelist == undefined) {
    chrome.storage.sync.set({ whitelist: [] });
  } else {
    whitelist = items.whitelist;
  }
  // log for debug
  console.log("this is default blacklist:");
  console.log(default_blacklist);
  console.log("this is blacklist:");
  console.log(blacklist);
  console.log("this is whitelist:");
  console.log(whitelist);

  // operate the sets of blacklists and the whitelist to get forbidden_url
  let all_blacklist = default_blacklist.concat(
    blacklist.filter((k) => {
      return default_blacklist.indexOf(k) == -1;
    })
  );
  forbidden_url = all_blacklist.filter((t) => {
    return whitelist.indexOf(t) == -1;
  });
  console.log("these are forbidden urls:");
  console.log(forbidden_url);

  // add listener
  // redirect the tab when detecting a forbidden url
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    let url = tab.url;

    let count = 0;
    let len1 = 0;
    let len2 = 0;
    for (let i = 0; i < url.length; i++) {
      if (url[i] == "/") {
        count++;
        if (count == 2) {
          len1 = i + 1;
        } else if (count == 3) {
          len2 = i;
          break;
        }
      }
    }
    url = url.slice(len1, len2);

    for (let i = 0; i < forbidden_url.length; i++) {
      if (url == forbidden_url[i]) {
        chrome.tabs.update(tabId, { url: "warn/warn.html" });
        break;
      }
    }
  });
});
