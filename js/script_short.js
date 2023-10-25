setTimeout(function () {
  document.body.className = "";
}, 350);

document
  .querySelector("#navigation_button")
  .addEventListener("click", function () {
    if (document.querySelector("#menu").classList.contains("show")) {
      document.querySelector("#menu").classList.replace("show", "hide");
    } else {
      document.querySelector("#menu").classList.add("show");
      document.querySelector("#menu").classList.remove("hide");
    }
  });

document.querySelector("body").addEventListener("click", (evt) => {
  let button = document.querySelector("#navigation_button");
  let menu = document.querySelector("#menu");
  if (
    evt.target != button &&
    !button.contains(evt.target) &&
    evt.target != menu &&
    !menu.contains(evt.target)
  ) {
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("#menu").classList.add("hide");
  }
});
