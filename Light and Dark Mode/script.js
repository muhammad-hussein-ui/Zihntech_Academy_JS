const btn = document.querySelector("#modeBtn");
const body = document.body;

btn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "Go light!";
  } else {
    btn.textContent = "Go dark!";
  }
});
