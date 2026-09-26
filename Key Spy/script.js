const output = document.querySelector("#output");
const box = document.querySelector("#box");

document.addEventListener("keydown", function (e) {
  output.textContent = `You pressed: ${e.key}`;

  if (e.key === "Enter") {
    box.classList.add("active");
  } else if (e.key === "Escape") {
    box.classList.remove("active");
  }
});
