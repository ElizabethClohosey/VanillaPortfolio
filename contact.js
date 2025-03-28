document.addEventListener("DOMContentLoaded", () => {

  // Enforces max character limit with dynamic counter, auto-resize, and visual cues
  const maxChars = 500;
  const textarea = document.querySelector("textarea");
  const counter = document.querySelector("#char-count");

  textarea.addEventListener("input", function () {
    // Auto-resize
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";

    // Update counter
    const remaining = maxChars - this.value.length;
    counter.textContent = `${remaining}/${maxChars} characters remaining`;

    // Visual feedback
    counter.classList.toggle("warning-message", remaining < 50);
  });

  // Scroll to keep character count in view
  // const counterRect = counter.getBoundingClientRect();
  // const isCounterOutOfView = counterRect.bottom > window.innerHeight;
  // if (isCounterOutOfView) {
  //   counter.scrollIntoView({ behavior: "smooth", block: "end" });
  // }

  // Prevent pasting excess characters
  textarea.addEventListener("paste", function (e) {
    const pastedText = e.clipboardData.getData("text");
    if (this.value.length + pastedText.length > maxChars) {
      e.preventDefault();
      const allowedText = pastedText.slice(0, maxChars - this.value.length);
      this.value += allowedText;
      this.dispatchEvent(new Event("input")); // Trigger resize and counter update
    }
  });

  // Send contact form email
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Obfuscated email construction
    const user = "elizabethclohosey";
    const domain = "gmail.com";
    const email = user + "@" + domain;

    // Get form values
    const name = this.querySelector('input[name="name"]').value;
    const senderEmail = this.querySelector('input[name="email"]').value;
    const subject = "Contact Request - Portfolio";
    const message = this.querySelector('textarea[name="message"]').value;

    // Construct mailto link with name, email, subject, and message
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name} (${senderEmail})\n\nMessage:\n${message}`
    )}`;

    // Trigger email client
    window.location.href = mailtoLink;
  });
});
