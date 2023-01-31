export { add_list_item, list_empty, clear_innerHTML, display, show_list };

function add_list_item(list_id, item_id, value) {
  document.getElementById(list_id).insertAdjacentHTML(
    "afterbegin",
    `<div>
      <label class="full-width list-item-check px-3 py-1">
        <input type="checkbox" id="${item_id}" class="checkbox-1 vertical-mid" value="${value}" />
        <span class="list_text px-2 vertical-mid">${value}</span>
      </label>
    </div>`
  );
}

function list_empty(target_id) {
  document.getElementById(target_id).innerHTML = `
    <div class="full-width text-center py-3">
    The list is empty. <br>
    Type a URL and press Enter.
    </div>`;
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
