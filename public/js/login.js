// Email validation
document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email pattern
  if (emailRegex.test(email)) {
    this.style.borderColor = "green"; // valid email
  } else {
    this.style.borderColor = "red"; // invalid email
  }
});

// Password validation
document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  // At least 8 characters, 1 number, 1 special character
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  if (passwordRegex.test(password)) {
    this.style.borderColor = "green"; // strong password
  } else {
    this.style.borderColor = "red"; // weak password
  }
});
