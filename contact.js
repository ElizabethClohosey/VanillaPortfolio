document.addEventListener("DOMContentLoaded", () => {
  //Navigate Home
  const homeBtn = document.getElementById("home-btn");
  homeBtn.onclick = function () {
    window.location.assign("./index.html");
  };

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
});
