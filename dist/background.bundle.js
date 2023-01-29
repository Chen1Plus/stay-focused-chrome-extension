/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
// the websites forbidden
var forbidden_url = [];
chrome.action.onClicked.addListener(tab => {
  chrome.runtime.openOptionsPage();
});
chrome.storage.sync.get(null, items => {
  //set default_blacklist, blacklist, whitelist
  const default_blacklist = ["www.facebook.com", "www.instagram.com", "www.messenger.com", "twitter.com", "www.i-gamer.net", "minesweeper.online", "slither.io"];
  let blacklist = [];
  let whitelist = [];
  if (items.blacklist == undefined) {
    chrome.storage.sync.set({
      blacklist: []
    });
  } else {
    blacklist = items.blacklist;
  }
  if (items.whitelist == undefined) {
    chrome.storage.sync.set({
      whitelist: []
    });
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
  let all_blacklist = default_blacklist.concat(blacklist.filter(k => {
    return default_blacklist.indexOf(k) == -1;
  }));
  forbidden_url = all_blacklist.filter(t => {
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
        chrome.tabs.update(tabId, {
          url: "warn/warn.html"
        });
        break;
      }
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQLElBQUlBLEtBQUssSUFBSSxDQUFDLEVBQUU7VUFDZEMsSUFBSSxHQUFHRSxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsTUFBTSxJQUFJSCxLQUFLLElBQUksQ0FBQyxFQUFFO1VBQ3JCRSxJQUFJLEdBQUdDLENBQUM7VUFDUjtRQUNGO01BQ0Y7SUFDRjtJQUNBSixHQUFHLEdBQUdBLEdBQUcsQ0FBQ00sS0FBSyxDQUFDSixJQUFJLEVBQUVDLElBQUksQ0FBQztJQUUzQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2pDLGFBQWEsQ0FBQ2tDLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDN0MsSUFBSUosR0FBRyxJQUFJN0IsYUFBYSxDQUFDaUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0JoQyxNQUFNLENBQUN3QixJQUFJLENBQUNXLE1BQU0sQ0FBQ1QsS0FBSyxFQUFFO1VBQUVFLEdBQUcsRUFBRTtRQUFpQixDQUFDLENBQUM7UUFDcEQ7TUFDRjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgd2Vic2l0ZXMgZm9yYmlkZGVuXHJcbnZhciBmb3JiaWRkZW5fdXJsID0gW107XHJcblxyXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XHJcbiAgY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XHJcbn0pO1xyXG5cclxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgKGl0ZW1zKSA9PiB7XHJcbiAgLy9zZXQgZGVmYXVsdF9ibGFja2xpc3QsIGJsYWNrbGlzdCwgd2hpdGVsaXN0XHJcbiAgY29uc3QgZGVmYXVsdF9ibGFja2xpc3QgPSBbXHJcbiAgICBcInd3dy5mYWNlYm9vay5jb21cIixcclxuICAgIFwid3d3Lmluc3RhZ3JhbS5jb21cIixcclxuICAgIFwid3d3Lm1lc3Nlbmdlci5jb21cIixcclxuICAgIFwidHdpdHRlci5jb21cIixcclxuICAgIFwid3d3LmktZ2FtZXIubmV0XCIsXHJcbiAgICBcIm1pbmVzd2VlcGVyLm9ubGluZVwiLFxyXG4gICAgXCJzbGl0aGVyLmlvXCIsXHJcbiAgXTtcclxuICBsZXQgYmxhY2tsaXN0ID0gW107XHJcbiAgbGV0IHdoaXRlbGlzdCA9IFtdO1xyXG4gIGlmIChpdGVtcy5ibGFja2xpc3QgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGJsYWNrbGlzdDogW10gfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJsYWNrbGlzdCA9IGl0ZW1zLmJsYWNrbGlzdDtcclxuICB9XHJcbiAgaWYgKGl0ZW1zLndoaXRlbGlzdCA9PSB1bmRlZmluZWQpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgd2hpdGVsaXN0OiBbXSB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpdGVsaXN0ID0gaXRlbXMud2hpdGVsaXN0O1xyXG4gIH1cclxuICAvLyBsb2cgZm9yIGRlYnVnXHJcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGRlZmF1bHQgYmxhY2tsaXN0OlwiKTtcclxuICBjb25zb2xlLmxvZyhkZWZhdWx0X2JsYWNrbGlzdCk7XHJcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGJsYWNrbGlzdDpcIik7XHJcbiAgY29uc29sZS5sb2coYmxhY2tsaXN0KTtcclxuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgd2hpdGVsaXN0OlwiKTtcclxuICBjb25zb2xlLmxvZyh3aGl0ZWxpc3QpO1xyXG5cclxuICAvLyBvcGVyYXRlIHRoZSBzZXRzIG9mIGJsYWNrbGlzdHMgYW5kIHRoZSB3aGl0ZWxpc3QgdG8gZ2V0IGZvcmJpZGRlbl91cmxcclxuICBsZXQgYWxsX2JsYWNrbGlzdCA9IGRlZmF1bHRfYmxhY2tsaXN0LmNvbmNhdChcclxuICAgIGJsYWNrbGlzdC5maWx0ZXIoKGspID0+IHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRfYmxhY2tsaXN0LmluZGV4T2YoaykgPT0gLTE7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgZm9yYmlkZGVuX3VybCA9IGFsbF9ibGFja2xpc3QuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICByZXR1cm4gd2hpdGVsaXN0LmluZGV4T2YodCkgPT0gLTE7XHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJ0aGVzZSBhcmUgZm9yYmlkZGVuIHVybHM6XCIpO1xyXG4gIGNvbnNvbGUubG9nKGZvcmJpZGRlbl91cmwpO1xyXG5cclxuICAvLyBhZGQgbGlzdGVuZXJcclxuICAvLyByZWRpcmVjdCB0aGUgdGFiIHdoZW4gZGV0ZWN0aW5nIGEgZm9yYmlkZGVuIHVybFxyXG4gIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xyXG4gICAgbGV0IHVybCA9IHRhYi51cmw7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBsZW4xID0gMDtcclxuICAgIGxldCBsZW4yID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh1cmxbaV0gPT0gXCIvXCIpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGlmIChjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICBsZW4xID0gaSArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICBsZW4yID0gaTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXJsID0gdXJsLnNsaWNlKGxlbjEsIGxlbjIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yYmlkZGVuX3VybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodXJsID09IGZvcmJpZGRlbl91cmxbaV0pIHtcclxuICAgICAgICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHsgdXJsOiBcIndhcm4vd2Fybi5odG1sXCIgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJmb3JiaWRkZW5fdXJsIiwiY2hyb21lIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJydW50aW1lIiwib3Blbk9wdGlvbnNQYWdlIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJpdGVtcyIsImRlZmF1bHRfYmxhY2tsaXN0IiwiYmxhY2tsaXN0Iiwid2hpdGVsaXN0IiwidW5kZWZpbmVkIiwic2V0IiwiY29uc29sZSIsImxvZyIsImFsbF9ibGFja2xpc3QiLCJjb25jYXQiLCJmaWx0ZXIiLCJrIiwiaW5kZXhPZiIsInQiLCJ0YWJzIiwib25VcGRhdGVkIiwidGFiSWQiLCJjaGFuZ2VJbmZvIiwidXJsIiwiY291bnQiLCJsZW4xIiwibGVuMiIsImkiLCJsZW5ndGgiLCJzbGljZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=