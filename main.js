document.addEventListener("DOMContentLoaded", () => {
  // Navigate to contact page on click
  const contactMeBtn = document.getElementById("contact-me-cta");
  contactMeBtn.onclick = function () {
    window.location.assign("./contact.html");
  };

  // Hide show header and scroll to top button on scroll
  // let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Scroll event listener
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > header.offsetHeight) {
      // Scrolling down -> Hide header
      header.classList.add("transparent");
    } else if (currentScrollY < header.offsetHeight) {
      // Back to top -> Show header
      header.classList.remove("transparent");
    }

    // Show/hide scroll to top button
    if (currentScrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }

    // lastScrollY = currentScrollY;
  });

  // Scroll to top on button click
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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

    // Close navigation menu on "x" button click
    const closeNavBtn = document.getElementById("close-nav");
    closeNavBtn.addEventListener("click", () => {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("show");
    });

    // Close navigation menu on click anywhere else in the window
  }
});
