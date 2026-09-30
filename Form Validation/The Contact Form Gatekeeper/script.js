const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#messageBox");
const formMsg = document.querySelector("#formMsg");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    formMsg.textContent = "Please enter your name";
    formMsg.style.color = "red";
  } else if (email === "") {
    formMsg.textContent = "Please enter your email";
    formMsg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMsg.textContent = "Please enter a valid email";
    formMsg.style.color = "red";
  } else if (message === "") {
    formMsg.textContent = "Please write a message";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Message sent, thank you!";
    formMsg.style.color = "green";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
