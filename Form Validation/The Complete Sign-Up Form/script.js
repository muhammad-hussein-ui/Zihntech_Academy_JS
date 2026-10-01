const form = document.querySelector("#signupForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const terms = document.querySelector("#terms");
const signupMsg = document.querySelector("#signupMsg");
const matchMsg = document.querySelector("#matchMsg");
const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const ageValue = age.value.trim();
  const ageNumber = Number(ageValue);
  if (fullNameValue === "") {
    signupMsg.textContent = "Full name is required";
    signupMsg.style.color = "red";
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    signupMsg.textContent = "Enter a valid email";
    signupMsg.style.color = "red";
  } else if (ageValue === "" || isNaN(ageNumber) || ageNumber < 16) {
    signupMsg.textContent = "You must be at least 16 to sign up";
    signupMsg.style.color = "red";
  } else if (passwordValue.length < 8) {
    signupMsg.textContent = "Password must be at least 8 characters";
    signupMsg.style.color = "red";
  } else if (passwordValue !== confirmPasswordValue) {
    signupMsg.textContent = "Passwords do not match";
    signupMsg.style.color = "red";
  } else if (!terms.checked) {
    signupMsg.textContent = "You must accept the terms to continue";
    signupMsg.style.color = "red";
  } else {
    signupMsg.textContent = `Welcome, ${fullNameValue}! Your account has been created.`;
    signupMsg.style.color = "green";
    form.reset();
  }
});

confirmPassword.addEventListener("input", function (e) {
  if (confirmPassword.value === "") {
    matchMsg.textContent = "Please enter your password confirmation";
    matchMsg.style.color = "orange";
  } else if (confirmPassword.value === password.value) {
    matchMsg.textContent = "Passwords match";
    matchMsg.style.color = "green";
  } else {
    matchMsg.textContent = "Passwords do not match";
    matchMsg.style.color = "red";
  }
});

togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.add("revealed");
  } else {
    password.type = "password";
    togglePassword.classList.remove("revealed");
  }
});

toggleConfirmPassword.addEventListener("click", function () {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    toggleConfirmPassword.classList.add("revealed");
  } else {
    confirmPassword.type = "password";
    toggleConfirmPassword.classList.remove("revealed");
  }
});
