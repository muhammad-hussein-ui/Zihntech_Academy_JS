const users = [
  { username: "ada", password: "zihntech123" },
  { username: "tobi", password: "frontend456" },
  { username: "amina", password: "javascript789" },
];
let attempts = 0;

const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");
const loginMsg = document.querySelector("#loginMsg");
const toggleLoginPassword = document.querySelector("#toggleLoginPassword");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameValue = loginUsername.value.trim();

  if (attempts >= 3) {
    loginMsg.textContent = "Too many attempts. Try again later.";
    loginMsg.style.color = "red";
    return;
  }

  let foundUser = null;

  for (const user of users) {
    if (user.username === usernameValue) {
      foundUser = user;
    }
  }

  if (foundUser === null) {
    loginMsg.textContent = "Username not found";
    loginMsg.style.color = "red";
    attempts++;
  } else if (loginPassword.value !== foundUser.password) {
    loginMsg.textContent = "Incorrect password";
    loginMsg.style.color = "red";
    attempts++;
  } else {
    loginMsg.textContent = "Login successful! Welcome back.";
    loginMsg.style.color = "green";
    attempts = 0;
  }
});

toggleLoginPassword.addEventListener("click", function () {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    toggleLoginPassword.classList.add("revealed");
  } else {
    loginPassword.type = "password";
    toggleLoginPassword.classList.remove("revealed");
  }
});
