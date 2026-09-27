const welcomeForm = document.querySelector("#welcomeForm");
const username = document.querySelector("#username");
const message = document.querySelector("#message");

welcomeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = username.value.trim();

  if (name === "") {
    message.textContent = "Please type your name";
    message.style.color = "red";
  } else if (name.length < 3) {
    message.textContent = "Name must be at least 3 characters";
    message.style.color = "orange";
  } else {
    message.textContent = `Welcome, ${name}!`;
    message.style.color = "green";
    username.value = "";
  }
});
