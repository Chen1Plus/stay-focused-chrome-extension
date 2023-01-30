import "./scss/bootstrap-custom.scss";
import "./scss/main.scss";
import "./js/style-third-party";
import * as html_modify from "./js/html_modify";
import * as array_operate from "./js/array_operate";

var blacklist_array = [];
var whitelist_array = [];

chrome.storage.sync.get(null, (items) => {
  blacklist_array = items.blacklist;
  whitelist_array = items.whitelist;

  // console
  console.log(blacklist_array);
  console.log(whitelist_array);

  html_modify.show_list("black", blacklist_array);
  html_modify.show_list("white", whitelist_array);

  document
    .getElementById("delete_from_blacklist")
    .addEventListener("click", () => {
      array_operate.delete_from_list("black", blacklist_array);
      html_modify.show_list("black", blacklist_array);
    });
  document
    .getElementById("delete_from_whitelist")
    .addEventListener("click", () => {
      array_operate.delete_from_list("white", whitelist_array);
      html_modify.show_list("white", whitelist_array);
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
      html_modify.show_list("black", blacklist_array);
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

      html_modify.show_list("white", whitelist_array);
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
