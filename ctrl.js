window.addEventListener("keydown", function (e) {
  if (
    e.ctrlKey &&
    (e.which == 65 ||
      e.which == 66 ||
      e.which == 67 ||
      e.which == 73 ||
      e.which == 80 ||
      e.which == 83 ||
      e.which == 85 ||
      e.which == 86)
  ) {
    e.preventDefault();
  }
});
document.keypress = function (e) {
  if (
    e.ctrlKey &&
    (e.which == 65 ||
      e.which == 66 ||
      e.which == 67 ||
      e.which == 73 ||
      e.which == 80 ||
      e.which == 83 ||
      e.which == 85 ||
      e.which == 86)
  ) {
  }
  return false;
};

document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == 123 || e.keyCode == 18) {
    return false;
  }
};
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
