export { delete_from_list };

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
