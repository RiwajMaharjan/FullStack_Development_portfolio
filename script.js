const menuBtn = document.getElementById("menuBtn");
const navContent = document.querySelector(".nav-content");
const navLinks = document.querySelectorAll(".nav-content li a");

menuBtn.addEventListener("click", function () {
  if (navContent.classList.contains("show")) {
    navContent.classList.remove("show");
  } else {
    navContent.classList.add("show");
  }
});
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navContent.classList.remove("show");
  });
});

// Simple form validation
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let valid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  successMessage.classList.remove("show");

  // Validate fields
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  }
  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "Subject is required";
    valid = false;
  }
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    valid = false;
  }

  // Show success message if valid
  if (valid) {
    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);

    // Clear inputs after showing success
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  }
});
