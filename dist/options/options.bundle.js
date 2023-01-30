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
/* harmony export */   "delete_from_list": () => (/* binding */ delete_from_list),
/* harmony export */   "if_exist": () => (/* binding */ if_exist)
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
function if_exist(target, target_array) {
  for (let i = 0, len = target_array.length; i < len; i++) {
    if (target == target_array[i]) {
      return 1;
    }
  }
  return 0;
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
    if (_js_array_operate__WEBPACK_IMPORTED_MODULE_4__.if_exist(url, blacklist_array)) {
      alert("此網站已在名單中！！");
    } else {
      blacklist_array.push(url);
      _js_html_modify__WEBPACK_IMPORTED_MODULE_3__.show_list("black", blacklist_array);
    }
  });
  document.getElementById("allow_it").addEventListener("click", () => {
    let url = document.getElementById("add_url").value;
    if (_js_array_operate__WEBPACK_IMPORTED_MODULE_4__.if_exist(url, whitelist_array)) {
      alert("此網站已在名單中！！");
    } else {
      whitelist_array.push(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ksSUFBSSxDQUFDRixHQUFHLENBQUM7TUFDekJiLHNEQUFxQixDQUFDLE9BQU8sRUFBRUcsZUFBZSxDQUFDO0lBQ2pEO0VBQ0YsQ0FBQyxDQUFDO0VBRUY3QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3JFLElBQUlrQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxFQUFFO0lBQ3RCRCxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUdkLGVBQWU7SUFDbENjLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBR2IsZUFBZTtJQUNsQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEdBQUcsQ0FBQztJQUNoQlosTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ1ksR0FBRyxDQUFDRixHQUFHLENBQUM7SUFFNUJaLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNLEVBQUU7RUFDekIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvLi9zcmMvb3B0aW9ucy9qcy9hcnJheV9vcGVyYXRlLmpzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL2pzL2h0bWxfbW9kaWZ5LmpzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL2pzL3N0eWxlLXRoaXJkLXBhcnR5LmpzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL3Njc3MvYm9vdHN0cmFwLWN1c3RvbS5zY3NzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC8uL3NyYy9vcHRpb25zL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3N0YXktZm9jdXNlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3RheS1mb2N1c2VkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGF5LWZvY3VzZWQvLi9zcmMvb3B0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWxldGVfZnJvbV9saXN0LCBpZl9leGlzdCB9O1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlX2Zyb21fbGlzdCh0YXJnZXQsIHRhcmdldF9hcnJheSkge1xyXG4gIGxldCBwcmVmaXggPSBcIlwiO1xyXG4gIGlmICh0YXJnZXQgPT0gXCJibGFja1wiKSB7XHJcbiAgICBwcmVmaXggPSBcImJcIjtcclxuICB9IGVsc2UgaWYgKHRhcmdldCA9PSBcIndoaXRlXCIpIHtcclxuICAgIHByZWZpeCA9IFwid1wiO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IHRhcmdldF9hcnJheS5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArIGkpLmNoZWNrZWQpIHtcclxuICAgICAgdGFyZ2V0X2FycmF5LnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlmX2V4aXN0KHRhcmdldCwgdGFyZ2V0X2FycmF5KSB7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhcmdldF9hcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKHRhcmdldCA9PSB0YXJnZXRfYXJyYXlbaV0pIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcbiIsImV4cG9ydCB7IGFkZF9saXN0X2l0ZW0sIGxpc3RfZW1wdHksIGNsZWFyX2lubmVySFRNTCwgZGlzcGxheSwgc2hvd19saXN0IH07XHJcblxyXG5mdW5jdGlvbiBhZGRfbGlzdF9pdGVtKGxpc3RfaWQsIGl0ZW1faWQsIHZhbHVlKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdF9pZCkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgXCJhZnRlcmJlZ2luXCIsXHJcbiAgICBgPGRpdiBjbGFzcz1cInB4LTRcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwibGlzdC1pdGVtIGxpc3QtaXRlbS1jaGVjayBweC0zIHB5LTFcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke2l0ZW1faWR9XCIgY2xhc3M9XCJjaGVja2JveC0xIHZlcnRpY2FsLW1pZFwiIHZhbHVlPVwiJHt2YWx1ZX1cIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdF90ZXh0IHB4LTIgdmVydGljYWwtbWlkXCI+JHt2YWx1ZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5gXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdF9lbXB0eSh0YXJnZXRfaWQpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRfaWQpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0gdGV4dC1jZW50ZXIgcHktMVwiPuePvuWcqOWQjeWWruepuueZveWTpjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInB5LTJcIj48L2Rpdj5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcl9pbm5lckhUTUwodGFyZ2V0X2lkKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0X2lkKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5KHRhcmdldF9pZCwgc3RhdHVzKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0X2lkKS5zdHlsZS5kaXNwbGF5ID0gc3RhdHVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93X2xpc3QoaywgdGFyZ2V0X2FycmF5KSB7XHJcbiAgbGV0IHRhcmdldCA9IFwiXCI7XHJcbiAgbGV0IHByZWZpeCA9IFwiXCI7XHJcbiAgbGV0IGRlbGV0ZV9idG4gPSBcIlwiO1xyXG5cclxuICBpZiAoayA9PSBcImJsYWNrXCIpIHtcclxuICAgIHRhcmdldCA9IFwiYmxhY2tsaXN0X3Nob3dlZFwiO1xyXG4gICAgcHJlZml4ID0gXCJiXCI7XHJcbiAgICBkZWxldGVfYnRuID0gXCJkZWxldGVfYlwiO1xyXG4gIH0gZWxzZSBpZiAoayA9PSBcIndoaXRlXCIpIHtcclxuICAgIHRhcmdldCA9IFwid2hpdGVsaXN0X3Nob3dlZFwiO1xyXG4gICAgZGVsZXRlX2J0biA9IFwiZGVsZXRlX3dcIjtcclxuICAgIHByZWZpeCA9IFwid1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhcmdldF9hcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgZGlzcGxheShkZWxldGVfYnRuLCBcIm5vbmVcIik7XHJcbiAgICBsaXN0X2VtcHR5KHRhcmdldCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXkoZGVsZXRlX2J0biwgXCJcIik7XHJcbiAgICBjbGVhcl9pbm5lckhUTUwodGFyZ2V0KTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXJnZXRfYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgYWRkX2xpc3RfaXRlbSh0YXJnZXQsIHByZWZpeCArIGksIHRhcmdldF9hcnJheVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL2pha29iLWUvcGVuL1hab1pXUVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbltdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thbmltPVwicmlwcGxlXCJdJyksIGZ1bmN0aW9uIChlbCkge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgIHZhciByID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGQgPSBNYXRoLnNxcnQoTWF0aC5wb3coci53aWR0aCwgMikgKyBNYXRoLnBvdyhyLmhlaWdodCwgMikpICogMjtcclxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IFwiLS1zOiAwOyAtLW86IDE7XCI7XHJcbiAgICAgIGVsLm9mZnNldFRvcDtcclxuICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IFwiLS10OiAxOyAtLW86IDA7IC0tZDogXCIuY29uY2F0KGQsIFwiOyAtLXg6XCIpLmNvbmNhdChlLmNsaWVudFggLSByLmxlZnQsIFwiOyAtLXk6XCIpLmNvbmNhdChlLmNsaWVudFkgLSByLnRvcCwgXCI7XCIpO1xyXG4gIH0pO1xyXG59KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9ib290c3RyYXAtY3VzdG9tLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2pzL3N0eWxlLXRoaXJkLXBhcnR5XCI7XHJcbmltcG9ydCAqIGFzIGh0bWxfbW9kaWZ5IGZyb20gXCIuL2pzL2h0bWxfbW9kaWZ5XCI7XHJcbmltcG9ydCAqIGFzIGFycmF5X29wZXJhdGUgZnJvbSBcIi4vanMvYXJyYXlfb3BlcmF0ZVwiO1xyXG5cclxudmFyIGJsYWNrbGlzdF9hcnJheSA9IFtdO1xyXG52YXIgd2hpdGVsaXN0X2FycmF5ID0gW107XHJcblxyXG5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCAoaXRlbXMpID0+IHtcclxuICBibGFja2xpc3RfYXJyYXkgPSBpdGVtcy5ibGFja2xpc3Q7XHJcbiAgd2hpdGVsaXN0X2FycmF5ID0gaXRlbXMud2hpdGVsaXN0O1xyXG5cclxuICAvLyBjb25zb2xlXHJcbiAgY29uc29sZS5sb2coYmxhY2tsaXN0X2FycmF5KTtcclxuICBjb25zb2xlLmxvZyh3aGl0ZWxpc3RfYXJyYXkpO1xyXG5cclxuICBodG1sX21vZGlmeS5zaG93X2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVfZnJvbV9ibGFja2xpc3RcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBhcnJheV9vcGVyYXRlLmRlbGV0ZV9mcm9tX2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgICBodG1sX21vZGlmeS5zaG93X2xpc3QoXCJibGFja1wiLCBibGFja2xpc3RfYXJyYXkpO1xyXG4gICAgfSk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9mcm9tX3doaXRlbGlzdFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGFycmF5X29wZXJhdGUuZGVsZXRlX2Zyb21fbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICAgIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9ja19pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3VybFwiKS52YWx1ZTtcclxuICAgIGlmIChhcnJheV9vcGVyYXRlLmlmX2V4aXN0KHVybCwgYmxhY2tsaXN0X2FycmF5KSkge1xyXG4gICAgICBhbGVydChcIuatpOe2suermeW3suWcqOWQjeWWruS4re+8ge+8gVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJsYWNrbGlzdF9hcnJheS5wdXNoKHVybCk7XHJcbiAgICAgIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcImJsYWNrXCIsIGJsYWNrbGlzdF9hcnJheSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxvd19pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3VybFwiKS52YWx1ZTtcclxuICAgIGlmIChhcnJheV9vcGVyYXRlLmlmX2V4aXN0KHVybCwgd2hpdGVsaXN0X2FycmF5KSkge1xyXG4gICAgICBhbGVydChcIuatpOe2suermeW3suWcqOWQjeWWruS4re+8ge+8gVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaXRlbGlzdF9hcnJheS5wdXNoKHVybCk7XHJcbiAgICAgIGh0bWxfbW9kaWZ5LnNob3dfbGlzdChcIndoaXRlXCIsIHdoaXRlbGlzdF9hcnJheSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlX2xpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxldCBvYmogPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBvYmpbXCJibGFja2xpc3RcIl0gPSBibGFja2xpc3RfYXJyYXk7XHJcbiAgICBvYmpbXCJ3aGl0ZWxpc3RcIl0gPSB3aGl0ZWxpc3RfYXJyYXk7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQob2JqKTtcclxuXHJcbiAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkZWxldGVfZnJvbV9saXN0IiwiaWZfZXhpc3QiLCJ0YXJnZXQiLCJ0YXJnZXRfYXJyYXkiLCJwcmVmaXgiLCJpIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJzcGxpY2UiLCJsZW4iLCJhZGRfbGlzdF9pdGVtIiwibGlzdF9lbXB0eSIsImNsZWFyX2lubmVySFRNTCIsImRpc3BsYXkiLCJzaG93X2xpc3QiLCJsaXN0X2lkIiwiaXRlbV9pZCIsInZhbHVlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGFyZ2V0X2lkIiwiaW5uZXJIVE1MIiwic3RhdHVzIiwic3R5bGUiLCJrIiwiZGVsZXRlX2J0biIsIm1hcCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvdWNoZXMiLCJyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZCIsIk1hdGgiLCJzcXJ0IiwicG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjc3NUZXh0Iiwib2Zmc2V0VG9wIiwiY29uY2F0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiaHRtbF9tb2RpZnkiLCJhcnJheV9vcGVyYXRlIiwiYmxhY2tsaXN0X2FycmF5Iiwid2hpdGVsaXN0X2FycmF5IiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJpdGVtcyIsImJsYWNrbGlzdCIsIndoaXRlbGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJhbGVydCIsInB1c2giLCJvYmoiLCJPYmplY3QiLCJzZXQiLCJydW50aW1lIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==