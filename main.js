document.addEventListener("DOMContentLoaded", () => {
  // Navigate to contact page on click
  const contactMeBtn = document.getElementById("contact-me-cta");
  contactMeBtn.onclick = function () {
    window.location.assign("./contact.html");
  };

  // Hide show header action section and scroll to top button on scroll
  const introSection = document.querySelector(".intro-section");
  const actionSection = document.querySelector(".action-section");
  // Store the original background color at the start
  const originalBackground = getComputedStyle(introSection).background;

  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Scroll event listener
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > actionSection.offsetHeight) {
      // Scrolling down -> Hide action section and update intro section bg color
      actionSection.classList.add("transparent");
      introSection.style.background = "black";
    } else if (currentScrollY < actionSection.offsetHeight) {
      // Back to top -> Show action section and reset bg color
      actionSection.classList.remove("transparent");
      introSection.style.background = originalBackground;
    }

    // Show/hide scroll to top button
    if (currentScrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
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
  const contactLink = document.querySelector('li a[href="./contact.html"]');

  document.querySelectorAll("a.scroll-link").forEach((link) => {
    if (!contactLink) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        scrollToElement(target);
      });
    }
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
        document.body.classList.toggle("no-scroll");
      } else {
        navMenu.classList.add("hidden");
        navMenu.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    });

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll("#nav-menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        document.body.classList.remove("no-scroll");
      });
    });

    // Close menu when clicking outside
    // document.addEventListener("click", (e) => {
    //   if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
    //     navMenu.classList.remove("show");
    //   }
    // });
  }
});
