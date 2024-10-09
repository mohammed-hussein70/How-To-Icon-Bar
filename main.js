let titleName = "Icon Bar";
document.title = titleName;
document.querySelector("h1").innerHTML = titleName;
let items = document.querySelectorAll(".icon-bar a");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
