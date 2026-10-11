const themeToggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  htmlEl.dataset.theme = htmlEl.dataset.theme === "dark" ? "light" : "dark";
});

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.className = "form-status";
  formStatus.textContent = "";

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const msgVal = messageInput.value.trim();

  const missingFields = [];
  if (!nameVal) missingFields.push("Name");
  if (!emailVal) missingFields.push("Email");
  if (!msgVal) missingFields.push("Message");

  if (missingFields.length > 0) {
    formStatus.textContent = `Please fill in all required fields: ${missingFields.join(", ")}.`;
    formStatus.classList.add("show", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    formStatus.textContent =
      "Please enter a valid email address (e.g. user@example.com).";
    formStatus.classList.add("show", "error");
    return;
  }

  formStatus.textContent =
    "Thank you! Your message has been sent successfully.";
  formStatus.classList.add("show", "success");
  contactForm.reset();
});
