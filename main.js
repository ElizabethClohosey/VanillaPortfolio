const contactMeBtn = document.getElementById("contact-me-cta");
contactMeBtn.onclick = function () {
  window.location.assign("./contact.html");
};

// window.addEventListener("scroll", () => {
//   const header = document.querySelector("header");
//   console.log(header.offsetHeight);
//   if (window.scrollY > header.offsetHeight) {
//     header.classList.add("transparent");
//     console.log("Hello");
//   } else {
//     header.classList.remove("transparent");
//     console.log("Bu Bye");
//   }
// });
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down -> Hide header
    header.classList.add("transparent");
  } else {
    // Scrolling up -> Show header
    header.classList.remove("transparent");
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", () => {
  function scrollToElement(target) {
    const header = document.querySelector(".header");
    const headerOffset = header.offsetHeight;

    // Get the target element's top offset relative to the document
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    const elementPosition = targetElement.offsetTop;

    // Calculate the position accounting for the header height
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Attach to link click events
  document.querySelectorAll("a.scroll-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      scrollToElement(target);
    });
  });

  // Toggle main navigation
  const toggleButton = document.getElementById("toggle-nav");
  const navMenu = document.getElementById("nav-menu");
  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", () => {
      const isHidden = navMenu.classList.contains("hidden");
      if (isHidden) {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("show");
      } else {
        navMenu.classList.add("hidden");
        navMenu.classList.remove("show");
      }
    });
  }
});
