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

  document.getElementById("add_url_b").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let url = document.getElementById("add_url_b").value;
      if (array_operate.if_exist(url, blacklist_array)) {
        alert("此網站已在名單中！！");
      } else {
        blacklist_array.push(url);
        html_modify.show_list("black", blacklist_array);
      }
    }
  });
  document.getElementById("add_url_w").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let url = document.getElementById("add_url_w").value;
      if (array_operate.if_exist(url, whitelist_array)) {
        alert("此網站已在名單中！！");
      } else {
        whitelist_array.push(url);
        html_modify.show_list("white", whitelist_array);
      }
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
