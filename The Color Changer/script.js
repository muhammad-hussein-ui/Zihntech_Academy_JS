const title = document.querySelector("#title");
const btn = document.querySelector("#colorBtn");
const resetBtn = document.querySelector("#resetBtn");

btn.addEventListener("click", function () {
  title.textContent = "You changed me!";
  title.style.color = "maroon";
});

resetBtn.addEventListener("click", function () {
  title.textContent = "Click the button below";
  title.style.color = "black";
});
