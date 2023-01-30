/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/options/js/array_operate.js":
/*!*****************************************!*\
  !*** ./src/options/js/array_operate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delete_from_list": () => (/* binding */ delete_from_list)
/* harmony export */ });

function delete_from_list(target, target_array) {
  let prefix = "";
  if (target == "black") {
    prefix = "b";
  } else if (target == "white") {
    prefix = "w";
  }
  for (let i = target_array.length - 1; i > -1; i--) {
    if (document.getElementById(prefix + i).checked) {
      target_array.splice(i, 1);
    }
  }
}

/***/ }),

/***/ "./src/options/js/html_modify.js":
/*!***************************************!*\
  !*** ./src/options/js/html_modify.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_list_item": () => (/* binding */ add_list_item),
/* harmony export */   "clear_innerHTML": () => (/* binding */ clear_innerHTML),
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "list_empty": () => (/* binding */ list_empty),
/* harmony export */   "show_list": () => (/* binding */ show_list)
/* harmony export */ });

function add_list_item(list_id, item_id, value) {
  document.getElementById(list_id).insertAdjacentHTML("afterbegin", `<div class="px-4">
      <label class="list-item list-item-check px-3 py-1">
        <input type="checkbox" id="${item_id}" class="checkbox-1 vertical-mid" value="${value}" />
        <span class="list_text px-2 vertical-mid">${value}</span>
      </label>
    </div>`);
}
function list_empty(target_id) {
  document.getElementById(target_id).innerHTML = `
    <div class="list-item text-center py-1">現在名單空白哦</div>
    <div class="py-2"></div>`;
}
function clear_innerHTML(target_id) {
  document.getElementById(target_id).innerHTML = "";
}
function display(target_id, status) {
  document.getElementById(target_id).style.display = status;
}
function show_list(k, target_array) {
  let target = "";
  let prefix = "";
  let delete_btn = "";
  if (k == "black") {
    target = "blacklist_showed";
    prefix = "b";
    delete_btn = "delete_b";
  } else if (k == "white") {
    target = "whitelist_showed";
    delete_btn = "delete_w";
    prefix = "w";
  }
  if (target_array.length == 0) {
    display(delete_btn, "none");
    list_empty(target);
  } else {
    display(delete_btn, "");
    clear_innerHTML(target);
    for (let i = 0, len = target_array.length; i < len; i++) {
      add_list_item(target, prefix + i, target_array[i]);
    }
  }
}

/***/ }),

/***/ "./src/options/js/style-third-party.js":
/*!*********************************************!*\
  !*** ./src/options/js/style-third-party.js ***!
  \*********************************************/
/***/ (() => {

/* from https://codepen.io/jakob-e/pen/XZoZWQ
  *************************************************/
[].map.call(document.querySelectorAll('[anim="ripple"]'), function (el) {
  el.addEventListener('click', function (e) {
    e = e.touches ? e.touches[0] : e;
    var r = el.getBoundingClientRect(),
      d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
    el.style.cssText = "--s: 0; --o: 1;";
    el.offsetTop;
    el.style.cssText = "--t: 1; --o: 0; --d: ".concat(d, "; --x:").concat(e.clientX - r.left, "; --y:").concat(e.clientY - r.top, ";");
  });
});
/****************************************************/

/***/ }),

/***/ "./src/options/scss/bootstrap-custom.scss":
/*!************************************************!*\
  !*** ./src/options/scss/bootstrap-custom.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/options/scss/main.scss":
/*!************************************!*\
  !*** ./src/options/scss/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_bootstrap_custom_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/bootstrap-custom.scss */ "./src/options/scss/bootstrap-custom.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/options/scss/main.scss");
/* harmony import */ var _js_style_third_party__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/style-third-party */ "./src/options/js/style-third-party.js");
/* harmony import */ var _js_style_third_party__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_style_third_party__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_html_modify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/html_modify */ "./src/options/js/html_modify.js");
/* harmony import */ var _js_array_operate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/array_operate */ "./src/options/js/array_operate.js");





var blacklist_array = [];
var whitelist_array = [];
chrome.storage.sync.get(null, items => {
  blacklist_array = items.blacklist;
  whitelist_array = items.whitelist;

  // console
  console.log(blacklist_array);
  console.log(whitelist_array);
  _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("black", blacklist_array);
  _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("white", whitelist_array);
  document.getElementById("delete_from_blacklist").addEventListener("click", () => {
    _js_array_operate__WEBPACK_IMPORTED_MODULE_4__.delete_from_list("black", blacklist_array);
    _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("black", blacklist_array);
  });
  document.getElementById("delete_from_whitelist").addEventListener("click", () => {
    _js_array_operate__WEBPACK_IMPORTED_MODULE_4__.delete_from_list("white", whitelist_array);
    _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("white", whitelist_array);
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
      _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("black", blacklist_array);
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
      _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("white", whitelist_array);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQyxJQUFJeUQsR0FBRyxJQUFJVixlQUFlLENBQUMvQyxDQUFDLENBQUMsRUFBRTtRQUM3QjJELEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDbkJELEtBQUssR0FBRyxDQUFDO1FBQ1Q7TUFDRjtJQUNGO0lBQ0EsSUFBSUEsS0FBSyxFQUFFO01BQ1RYLGVBQWUsQ0FBQ2EsSUFBSSxDQUFDSCxHQUFHLENBQUM7TUFDekJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ2pDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsZUFBZSxDQUFDO01BRTVCSCxzREFBcUIsQ0FBQyxPQUFPLEVBQUVHLGVBQWUsQ0FBQztJQUNqRDtFQUNGLENBQUMsQ0FBQztFQUVGN0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUN1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUNyRSxJQUFJbUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sRUFBRTtJQUN0QkQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHZixlQUFlO0lBQ2xDZSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUdkLGVBQWU7SUFDbENRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUM7SUFDaEJiLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNhLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBRTVCYixNQUFNLENBQUNnQixPQUFPLENBQUNDLE1BQU0sRUFBRTtFQUN6QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL2pzL2FycmF5X29wZXJhdGUuanMiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkLy4vc3JjL29wdGlvbnMvanMvaHRtbF9tb2RpZnkuanMiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkLy4vc3JjL29wdGlvbnMvanMvc3R5bGUtdGhpcmQtcGFydHkuanMiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkLy4vc3JjL29wdGlvbnMvc2Nzcy9ib290c3RyYXAtY3VzdG9tLnNjc3MiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkLy4vc3JjL29wdGlvbnMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXktZm9jdXNlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXktZm9jdXNlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlbGV0ZV9mcm9tX2xpc3QgfTtcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZV9mcm9tX2xpc3QodGFyZ2V0LCB0YXJnZXRfYXJyYXkpIHtcclxuICBsZXQgcHJlZml4ID0gXCJcIjtcclxuICBpZiAodGFyZ2V0ID09IFwiYmxhY2tcIikge1xyXG4gICAgcHJlZml4ID0gXCJiXCI7XHJcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICBwcmVmaXggPSBcIndcIjtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSB0YXJnZXRfYXJyYXkubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyBpKS5jaGVja2VkKSB7XHJcbiAgICAgIHRhcmdldF9hcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB7IGFkZF9saXN0X2l0ZW0sIGxpc3RfZW1wdHksIGNsZWFyX2lubmVySFRNTCwgZGlzcGxheSwgc2hvd19saXN0IH07XHJcblxyXG5mdW5jdGlvbiBhZGRfbGlzdF9pdGVtKGxpc3RfaWQsIGl0ZW1faWQsIHZhbHVlKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdF9pZCkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgXCJhZnRlcmJlZ2luXCIsXHJcbiAgICBgPGRpdiBjbGFzcz1cInB4LTRcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwibGlzdC1pdGVtIGxpc3QtaXRlbS1jaGVjayBweC0zIHB5LTFcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke2l0ZW1faWR9XCIgY2xhc3M9XCJjaGVja2JveC0xIHZlcnRpY2FsLW1pZFwiIHZhbHVlPVwiJHt2YWx1ZX1cIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdF90ZXh0IHB4LTIgdmVydGljYWwtbWlkXCI+JHt2YWx1ZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5gXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdF9lbXB0eSh0YXJnZXRfaWQpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRfaWQpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0gdGV4dC1jZW50ZXIgcHktMVwiPuePvuWcqOWQjeWWruepuueZveWTpjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInB5LTJcIj48L2Rpdj5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcl9pbm5lckhUTUwodGFyZ2V0X2lkKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0X2lkKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5KHRhcmdldF9pZCwgc3RhdHVzKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0X2lkKS5zdHlsZS5kaXNwbGF5ID0gc3RhdHVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93X2xpc3QoaywgdGFyZ2V0X2FycmF5KSB7XHJcbiAgbGV0IHRhcmdldCA9IFwiXCI7XHJcbiAgbGV0IHByZWZpeCA9IFwiXCI7XHJcbiAgbGV0IGRlbGV0ZV9idG4gPSBcIlwiO1xyXG5cclxuICBpZiAoayA9PSBcImJsYWNrXCIpIHtcclxuICAgIHRhcmdldCA9IFwiYmxhY2tsaXN0X3Nob3dlZFwiO1xyXG4gICAgcHJlZml4ID0gXCJiXCI7XHJcbiAgICBkZWxldGVfYnRuID0gXCJkZWxldGVfYlwiO1xyXG4gIH0gZWxzZSBpZiAoayA9PSBcIndoaXRlXCIpIHtcclxuICAgIHRhcmdldCA9IFwid2hpdGVsaXN0X3Nob3dlZFwiO1xyXG4gICAgZGVsZXRlX2J0biA9IFwiZGVsZXRlX3dcIjtcclxuICAgIHByZWZpeCA9IFwid1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhcmdldF9hcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgZGlzcGxheShkZWxldGVfYnRuLCBcIm5vbmVcIik7XHJcbiAgICBsaXN0X2VtcHR5KHRhcmdldCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXkoZGVsZXRlX2J0biwgXCJcIik7XHJcbiAgICBjbGVhcl9pbm5lckhUTUwodGFyZ2V0KTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXJnZXRfYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgYWRkX2xpc3RfaXRlbSh0YXJnZXQsIHByZWZpeCArIGksIHRhcmdldF9hcnJheVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL2pha29iLWUvcGVuL1hab1pXUVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbltdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thbmltPVwicmlwcGxlXCJdJyksIGZ1bmN0aW9uIChlbCkge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgIHZhciByID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGQgPSBNYXRoLnNxcnQoTWF0aC5wb3coci53aWR0aCwgMikgKyBNYXRoLnBvdyhyLmhlaWdodCwgMikpICogMjtcclxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IFwiLS1zOiAwOyAtLW86IDE7XCI7XHJcbiAgICAgIGVsLm9mZnNldFRvcDtcclxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IFwiLS10OiAxOyAtLW86IDA7IC0tZDogXCIuY29uY2F0KGQsIFwiOyAtLXg6XCIpLmNvbmNhdChlLmNsaWVudFggLSByLmxlZnQsIFwiOyAtLXk6XCIpLmNvbmNhdChlLmNsaWVudFkgLSByLnRvcCwgXCI7XCIpO1xyXG4gIH0pO1xyXG59KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9ib290c3RyYXAtY3VzdG9tLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2pzL3N0eWxlLXRoaXJkLXBhcnR5XCI7XHJcbmltcG9ydCAqIGFzIGh0bWxfbW9kaWZ5IGZyb20gXCIuL2pzL2h0bWxfbW9kaWZ5XCI7XHJcbmltcG9ydCAqIGFzIGFycmF5X29wZXJhdGUgZnJvbSBcIi4vanMvYXJyYXlfb3BlcmF0ZVwiO1xyXG5cclxudmFyIGJsYWNrbGlzdF9hcnJheSA9IFtdO1xyXG52YXIgd2hpdGVsaXN0X2FycmF5ID0gW107XHJcblxyXG5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCAoaXRlbXMpID0+IHtcclxuICBibGFja2xpc3RfYXJyYXkgPSBpdGVtcy5ibGFja2xpc3Q7XHJcbiAgd2hpdGVsaXN0X2FycmF5ID0gaXRlbXMud2hpdGVsaXN0O1xyXG5cclxuICAvLyBjb25zb2xlXHJcbiAgY29uc29sZS5sb2coYmxhY2tsaXN0X2FycmF5KTtcclxuICBjb25zb2xlLmxvZyh3aGl0ZWxpc3RfYXJyYXkpO1xyXG5cclxuICBodG1sX21vZGlmeS5zaG93X2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfZnJvbV9ibGFja2xpc3RcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBhcnJheV9vcGVyYXRlLmRlbGV0ZV9mcm9tX2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgICBodG1sX21vZGlmeS5zaG93X2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgfSk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9mcm9tX3doaXRlbGlzdFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGFycmF5X29wZXJhdGUuZGVsZXRlX2Zyb21fbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICAgIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9ja19pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3VybFwiKS52YWx1ZTtcclxuICAgIGxldCBjaGVjayA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYWNrbGlzdF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodXJsID09IGJsYWNrbGlzdF9hcnJheVtpXSkge1xyXG4gICAgICAgIGFsZXJ0KFwi5q2k57ay56uZ5bey5Zyo5ZCN5Zau5Lit77yB77yBXCIpO1xyXG4gICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgIGJsYWNrbGlzdF9hcnJheS5wdXNoKHVybCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBibGFja2xpc3Q6XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgICBodG1sX21vZGlmeS5zaG93X2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsb3dfaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxldCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF91cmxcIikudmFsdWU7XHJcbiAgICBsZXQgY2hlY2sgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aGl0ZWxpc3RfYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHVybCA9PSB3aGl0ZWxpc3RfYXJyYXlbaV0pIHtcclxuICAgICAgICBhbGVydChcIuatpOe2suermeW3suWcqOWQjeWWruS4re+8ge+8gVwiKTtcclxuICAgICAgICBjaGVjayA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGVjaykge1xyXG4gICAgICB3aGl0ZWxpc3RfYXJyYXkucHVzaCh1cmwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgd2hpdGVsaXN0OlwiKTtcclxuICAgICAgY29uc29sZS5sb2cod2hpdGVsaXN0X2FycmF5KTtcclxuXHJcbiAgICAgIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlX2xpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxldCBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBvYmpbXCJibGFja2xpc3RcIl0gPSBibGFja2xpc3RfYXJyYXk7XHJcbiAgICBvYmpbXCJ3aGl0ZWxpc3RcIl0gPSB3aGl0ZWxpc3RfYXJyYXk7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQob2JqKTtcclxuXHJcbiAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkZWxldGVfZnJvbV9saXN0IiwidGFyZ2V0IiwidGFyZ2V0X2FycmF5IiwicHJlZml4IiwiaSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwic3BsaWNlIiwiYWRkX2xpc3RfaXRlbSIsImxpc3RfZW1wdHkiLCJjbGVhcl9pbm5lckhUTUwiLCJkaXNwbGF5Iiwic2hvd19saXN0IiwibGlzdF9pZCIsIml0ZW1faWQiLCJ2YWx1ZSIsImluc2VydEFkamFjZW50SFRNTCIsInRhcmdldF9pZCIsImlubmVySFRNTCIsInN0YXR1cyIsInN0eWxlIiwiayIsImRlbGV0ZV9idG4iLCJsZW4iLCJtYXAiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b3VjaGVzIiwiciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImQiLCJNYXRoIiwic3FydCIsInBvdyIsIndpZHRoIiwiaGVpZ2h0IiwiY3NzVGV4dCIsIm9mZnNldFRvcCIsImNvbmNhdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImh0bWxfbW9kaWZ5IiwiYXJyYXlfb3BlcmF0ZSIsImJsYWNrbGlzdF9hcnJheSIsIndoaXRlbGlzdF9hcnJheSIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiaXRlbXMiLCJibGFja2xpc3QiLCJ3aGl0ZWxpc3QiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiY2hlY2siLCJhbGVydCIsInB1c2giLCJvYmoiLCJPYmplY3QiLCJzZXQiLCJydW50aW1lIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==