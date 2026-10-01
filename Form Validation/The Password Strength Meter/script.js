const password = document.querySelector("#password");
const strength = document.querySelector("#strength");
const toggleBtn = document.querySelector("#toggleBtn");

password.addEventListener("input", function (e) {
  const value = password.value;
  let hasNumber = false;
  let hasUpper = false;

  for (let i = 0; i < value.length; i++) {
    if ("0123456789".includes(value[i])) {
      hasNumber = true;
    }
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(value[i])) {
      hasUpper = true;
    }
  }

  if (value.length < 6) {
    strength.textContent = "Weak";
    strength.style.color = "red";
  } else if (value.length < 10) {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  } else if (value.length >= 10 && hasNumber && hasUpper) {
    strength.textContent = "Strong";
    strength.style.color = "green";
  } else {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  }
});

toggleBtn.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    toggleBtn.classList.add("revealed");
  } else {
    password.type = "password";
    toggleBtn.classList.remove("revealed");
  }
});
