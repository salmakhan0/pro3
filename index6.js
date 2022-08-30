const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
  if (e.repeat) {
    alert("do not repeat");
  }
});