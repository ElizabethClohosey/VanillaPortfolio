document.addEventListener("DOMContentLoaded", () => {
  // Utility function: Detect mobile/tablet or touch devices.  Lazy load backgrounds and parallax
  function isTabletOrMobile() {
    const ua = navigator.userAgent.toLowerCase();
    console.log(navigator);
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const isTabletOrPhone = /android|iphone|ipad|ipod/.test(ua);
    const isLargeTouchDevice = isTouch && window.innerWidth <= 1366;

    return isTabletOrPhone || isLargeTouchDevice;
    // return isTabletOrPhone;
  }

  console.log("Is tablet or mobile", isTabletOrMobile());

  // IntersectionObserver for lazy loading + parallax control
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;

        // Lazy load background image
        section.style.backgroundImage = `url("${section.dataset.bg}")`;

        // Disable parallax if on tablet/mobile
        if (isTabletOrMobile()) {
          section.style.backgroundAttachment = "scroll";
          section.style.backgroundPosition = "center";
          section.style.backgroundSize = "cover";
        }

        observer.unobserve(section);
      }
    });
  });

  // Observe all lazy-bg elements
  lazyBackgrounds.forEach((bg) => lazyObserver.observe(bg));

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

  function scrollToElement(target, offsetElement) {
    // Get the target element's top offset relative to the document
    const targetElement = document.querySelector(target);
    const elementPosition = targetElement.offsetTop;
    if (!targetElement || !offsetElement) return;

    // Calculate the position accounting for the element height
    const offsetPosition = elementPosition - offsetElement;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Attach to link click events
  document.querySelectorAll("a.scroll-link").forEach((link) => {
    // const header = document.querySelector(".header");
    // const headerOffset = header.offsetHeight;
    const introSection = document.querySelector(".intro-section");
    const introSectionOffset = introSection.offsetHeight;
    let offsetElement;

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // If it's not an internal anchor, let it behave normally
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      let target = this.hash;

      // Scroll to top when navigating to the #skills section, otherwise scroll to the target element
      if (target === "#skills") {
        // offsetElement = headerOffset + "10px";
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        offsetElement = introSectionOffset;
      }

      scrollToElement(target, offsetElement);
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
        navMenu.classList.add("hidden");
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

  const fadeElements = document.querySelectorAll(
    ".fade-in, .fade-in-left, .fade-in-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => observer.observe(element));
});
