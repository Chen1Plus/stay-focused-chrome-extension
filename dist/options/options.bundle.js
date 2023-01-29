/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/options/scss/bootstrap_grid_reboot.scss":
/*!*****************************************************!*\
  !*** ./src/options/scss/bootstrap_grid_reboot.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/options/scss/options.scss":
/*!***************************************!*\
  !*** ./src/options/scss/options.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_bootstrap_grid_reboot_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/bootstrap_grid_reboot.scss */ "./src/options/scss/bootstrap_grid_reboot.scss");
/* harmony import */ var _scss_options_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/options.scss */ "./src/options/scss/options.scss");


var blacklist_array = [];
var whitelist_array = [];
var blacklist_html = document.getElementById("blacklist_showed");
var whitelist_html = document.getElementById("whitelist_showed");
var blacklist_delete = document.getElementById("delete_b");
var whitelist_delete = document.getElementById("delete_w");
function show_list(k) {
  if (k == "black") {
    if (blacklist_array.length == 0) {
      blacklist_delete.style.display = "none";
      blacklist_html.innerHTML = `<span class='row center'>現在黑名單空白哦</span>`;
    } else {
      blacklist_delete.style.display = "";
      blacklist_html.innerHTML = "";
      for (let i = 0; i < blacklist_array.length; i++) {
        const value = blacklist_array[i];
        blacklist_html.insertAdjacentHTML("afterbegin", `<label class="item">
          <input type="checkbox" id="b${i}" class="check" value="${value}"/>
          <span class="list_text">${value}</span>
        </label>`);
      }
    }
  } else if (k == "white") {
    if (whitelist_array.length == 0) {
      whitelist_delete.style.display = "none";
      whitelist_html.innerHTML = `<span class='row center'>現在白名單空白哦</span>`;
    } else {
      whitelist_delete.style.display = "";
      whitelist_html.innerHTML = "";
      for (let i = 0; i < whitelist_array.length; i++) {
        const value = whitelist_array[i];
        whitelist_html.insertAdjacentHTML("afterbegin", `<label class="item">
          <input type="checkbox" id="w${i}" class="check" value="${value}"/>
          <span class="list_text">${value}</span>
        </label>`);
      }
    }
  }
}
chrome.storage.sync.get(null, items => {
  blacklist_array = items.blacklist;
  whitelist_array = items.whitelist;
  console.log(blacklist_array);
  console.log(whitelist_array);
  show_list("black");
  show_list("white");
  document.getElementById("delete_from_blacklist").addEventListener("click", () => {
    let delete_list = [];
    for (let i = 0; i < blacklist_array.length; i++) {
      const element = document.getElementById("b" + i);
      if (element.checked) {
        delete_list.push(element.value);
      }
    }
    blacklist_array = blacklist_array.filter(item => delete_list.indexOf(item) === -1);
    show_list("black");
  });
  document.getElementById("delete_from_whitelist").addEventListener("click", () => {
    let delete_list = [];
    for (let i = 0; i < whitelist_array.length; i++) {
      const element = document.getElementById("w" + i);
      if (element.checked) {
        delete_list.push(element.value);
      }
    }
    whitelist_array = whitelist_array.filter(item => delete_list.indexOf(item) === -1);
    show_list("white");
  });
  document.getElementById("block_it").addEventListener("click", () => {
    let url = document.getElementById("add_url").value;
    let check = 1;
    for (let i = 0; i < blacklist_array.length; i++) {
      if (url == blacklist_array[i]) {
        alert("此網站已在名單中！！");
        check = 0;
        break;
      }
    }
    if (check) {
      blacklist_array.push(url);
      console.log("this is blacklist:");
      console.log(blacklist_array);
      show_list("black");
    }
  });
  document.getElementById("allow_it").addEventListener("click", () => {
    let url = document.getElementById("add_url").value;
    let check = 1;
    for (let i = 0; i < whitelist_array.length; i++) {
      if (url == whitelist_array[i]) {
        alert("此網站已在名單中！！");
        check = 0;
        break;
      }
    }
    if (check) {
      whitelist_array.push(url);
      console.log("this is whitelist:");
      console.log(whitelist_array);
      show_list("white");
    }
  });
  document.getElementById("update_list").addEventListener("click", () => {
    let obj = new Object();
    obj["blacklist"] = blacklist_array;
    obj["whitelist"] = whitelist_array;
    console.log(obj);
    chrome.storage.sync.set(obj);
    chrome.runtime.reload();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ2IsS0FBSyxJQUFJckIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHYixlQUFlLENBQUNTLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7TUFDL0MsSUFBSW9CLEdBQUcsSUFBSWpDLGVBQWUsQ0FBQ2EsQ0FBQyxDQUFDLEVBQUU7UUFDN0JzQixLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ25CRCxLQUFLLEdBQUcsQ0FBQztRQUNUO01BQ0Y7SUFDRjtJQUNBLElBQUlBLEtBQUssRUFBRTtNQUNUbEMsZUFBZSxDQUFDNkIsSUFBSSxDQUFDSSxHQUFHLENBQUM7TUFDekJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ2pDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3hCLGVBQWUsQ0FBQztNQUM1Qk8sU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUNwQjtFQUNGLENBQUMsQ0FBQztFQUVGTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ3NCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3JFLElBQUlXLEdBQUcsR0FBRyxJQUFJQyxNQUFNLEVBQUU7SUFDdEJELEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBR3JDLGVBQWU7SUFDbENxQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUdwQyxlQUFlO0lBQ2xDdUIsT0FBTyxDQUFDQyxHQUFHLENBQUNZLEdBQUcsQ0FBQztJQUNoQnBCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNvQixHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUU1QnBCLE1BQU0sQ0FBQ3VCLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO0VBQ3pCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkLy4vc3JjL29wdGlvbnMvc2Nzcy9ib290c3RyYXBfZ3JpZF9yZWJvb3Quc2Nzcz8xMTQ4Iiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL3Njc3Mvb3B0aW9ucy5zY3NzPzZkZDEiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXktZm9jdXNlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Njc3MvYm9vdHN0cmFwX2dyaWRfcmVib290LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3NzL29wdGlvbnMuc2Nzc1wiO1xyXG5cclxudmFyIGJsYWNrbGlzdF9hcnJheSA9IFtdO1xyXG52YXIgd2hpdGVsaXN0X2FycmF5ID0gW107XHJcbnZhciBibGFja2xpc3RfaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxhY2tsaXN0X3Nob3dlZFwiKTtcclxudmFyIHdoaXRlbGlzdF9odG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aGl0ZWxpc3Rfc2hvd2VkXCIpO1xyXG52YXIgYmxhY2tsaXN0X2RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlX2JcIik7XHJcbnZhciB3aGl0ZWxpc3RfZGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfd1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dfbGlzdChrKSB7XHJcbiAgaWYgKGsgPT0gXCJibGFja1wiKSB7XHJcbiAgICBpZiAoYmxhY2tsaXN0X2FycmF5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGJsYWNrbGlzdF9kZWxldGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBibGFja2xpc3RfaHRtbC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J3JvdyBjZW50ZXInPuePvuWcqOm7keWQjeWWruepuueZveWTpjwvc3Bhbj5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmxhY2tsaXN0X2RlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgYmxhY2tsaXN0X2h0bWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibGFja2xpc3RfYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJsYWNrbGlzdF9hcnJheVtpXTtcclxuICAgICAgICBibGFja2xpc3RfaHRtbC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICBcImFmdGVyYmVnaW5cIixcclxuICAgICAgICAgIGA8bGFiZWwgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiJHtpfVwiIGNsYXNzPVwiY2hlY2tcIiB2YWx1ZT1cIiR7dmFsdWV9XCIvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0X3RleHRcIj4ke3ZhbHVlfTwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChrID09IFwid2hpdGVcIikge1xyXG4gICAgaWYgKHdoaXRlbGlzdF9hcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB3aGl0ZWxpc3RfZGVsZXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgd2hpdGVsaXN0X2h0bWwuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdyb3cgY2VudGVyJz7nj77lnKjnmb3lkI3llq7nqbrnmb3lk6Y8L3NwYW4+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaXRlbGlzdF9kZWxldGUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgIHdoaXRlbGlzdF9odG1sLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2hpdGVsaXN0X2FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB3aGl0ZWxpc3RfYXJyYXlbaV07XHJcbiAgICAgICAgd2hpdGVsaXN0X2h0bWwuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgXCJhZnRlcmJlZ2luXCIsXHJcbiAgICAgICAgICBgPGxhYmVsIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidyR7aX1cIiBjbGFzcz1cImNoZWNrXCIgdmFsdWU9XCIke3ZhbHVlfVwiLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdF90ZXh0XCI+JHt2YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQobnVsbCwgKGl0ZW1zKSA9PiB7XHJcbiAgYmxhY2tsaXN0X2FycmF5ID0gaXRlbXMuYmxhY2tsaXN0O1xyXG4gIHdoaXRlbGlzdF9hcnJheSA9IGl0ZW1zLndoaXRlbGlzdDtcclxuXHJcbiAgY29uc29sZS5sb2coYmxhY2tsaXN0X2FycmF5KTtcclxuICBjb25zb2xlLmxvZyh3aGl0ZWxpc3RfYXJyYXkpO1xyXG5cclxuICBzaG93X2xpc3QoXCJibGFja1wiKTtcclxuICBzaG93X2xpc3QoXCJ3aGl0ZVwiKTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9mcm9tX2JsYWNrbGlzdFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGxldCBkZWxldGVfbGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYWNrbGlzdF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJcIiArIGkpO1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgIGRlbGV0ZV9saXN0LnB1c2goZWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJsYWNrbGlzdF9hcnJheSA9IGJsYWNrbGlzdF9hcnJheS5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGRlbGV0ZV9saXN0LmluZGV4T2YoaXRlbSkgPT09IC0xXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzaG93X2xpc3QoXCJibGFja1wiKTtcclxuICAgIH0pO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfZnJvbV93aGl0ZWxpc3RcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBsZXQgZGVsZXRlX2xpc3QgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aGl0ZWxpc3RfYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3XCIgKyBpKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICBkZWxldGVfbGlzdC5wdXNoKGVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aGl0ZWxpc3RfYXJyYXkgPSB3aGl0ZWxpc3RfYXJyYXkuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBkZWxldGVfbGlzdC5pbmRleE9mKGl0ZW0pID09PSAtMVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2hvd19saXN0KFwid2hpdGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9ja19pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3VybFwiKS52YWx1ZTtcclxuICAgIGxldCBjaGVjayA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYWNrbGlzdF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodXJsID09IGJsYWNrbGlzdF9hcnJheVtpXSkge1xyXG4gICAgICAgIGFsZXJ0KFwi5q2k57ay56uZ5bey5Zyo5ZCN5Zau5Lit77yB77yBXCIpO1xyXG4gICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgIGJsYWNrbGlzdF9hcnJheS5wdXNoKHVybCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBibGFja2xpc3Q6XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgICBzaG93X2xpc3QoXCJibGFja1wiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbG93X2l0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdXJsXCIpLnZhbHVlO1xyXG4gICAgbGV0IGNoZWNrID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2hpdGVsaXN0X2FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh1cmwgPT0gd2hpdGVsaXN0X2FycmF5W2ldKSB7XHJcbiAgICAgICAgYWxlcnQoXCLmraTntrLnq5nlt7LlnKjlkI3llq7kuK3vvIHvvIFcIik7XHJcbiAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2spIHtcclxuICAgICAgd2hpdGVsaXN0X2FycmF5LnB1c2godXJsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHdoaXRlbGlzdDpcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICAgIHNob3dfbGlzdChcIndoaXRlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZV9saXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgb2JqID0gbmV3IE9iamVjdCgpO1xyXG4gICAgb2JqW1wiYmxhY2tsaXN0XCJdID0gYmxhY2tsaXN0X2FycmF5O1xyXG4gICAgb2JqW1wid2hpdGVsaXN0XCJdID0gd2hpdGVsaXN0X2FycmF5O1xyXG4gICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KG9iaik7XHJcblxyXG4gICAgY2hyb21lLnJ1bnRpbWUucmVsb2FkKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYmxhY2tsaXN0X2FycmF5Iiwid2hpdGVsaXN0X2FycmF5IiwiYmxhY2tsaXN0X2h0bWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2hpdGVsaXN0X2h0bWwiLCJibGFja2xpc3RfZGVsZXRlIiwid2hpdGVsaXN0X2RlbGV0ZSIsInNob3dfbGlzdCIsImsiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJpIiwidmFsdWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsIml0ZW1zIiwiYmxhY2tsaXN0Iiwid2hpdGVsaXN0IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxldGVfbGlzdCIsImVsZW1lbnQiLCJjaGVja2VkIiwicHVzaCIsImZpbHRlciIsIml0ZW0iLCJpbmRleE9mIiwidXJsIiwiY2hlY2siLCJhbGVydCIsIm9iaiIsIk9iamVjdCIsInNldCIsInJ1bnRpbWUiLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9