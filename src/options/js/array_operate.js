export { delete_from_list, if_exist };

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
