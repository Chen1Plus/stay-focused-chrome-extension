import "./assets/normalize.css";
import "./scss/options.scss";

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
        blacklist_html.insertAdjacentHTML(
          "afterbegin",
          `<label class="item">
          <input type="checkbox" id="b${i}" class="check" value="${value}"/>
          <span class="list_text">${value}</span>
        </label>`
        );
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
        whitelist_html.insertAdjacentHTML(
          "afterbegin",
          `<label class="item">
          <input type="checkbox" id="w${i}" class="check" value="${value}"/>
          <span class="list_text">${value}</span>
        </label>`
        );
      }
    }
  }
}

chrome.storage.sync.get(null, (items) => {
  blacklist_array = items.blacklist;
  whitelist_array = items.whitelist;

  console.log(blacklist_array);
  console.log(whitelist_array);

  show_list("black");
  show_list("white");

  document
    .getElementById("delete_from_blacklist")
    .addEventListener("click", () => {
      let delete_list = [];
      for (let i = 0; i < blacklist_array.length; i++) {
        const element = document.getElementById("b" + i);
        if (element.checked) {
          delete_list.push(element.value);
        }
      }
      blacklist_array = blacklist_array.filter(
        (item) => delete_list.indexOf(item) === -1
      );

      show_list("black");
    });
  document
    .getElementById("delete_from_whitelist")
    .addEventListener("click", () => {
      let delete_list = [];
      for (let i = 0; i < whitelist_array.length; i++) {
        const element = document.getElementById("w" + i);
        if (element.checked) {
          delete_list.push(element.value);
        }
      }
      whitelist_array = whitelist_array.filter(
        (item) => delete_list.indexOf(item) === -1
      );

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
