// const contactMeBtn = document.getElementById("contact-me");
// contactMeBtn.onclick = function () {
//   window.location.assign("./contact.html");
// };

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Get horizontal scroll position
  console.log(window);

  // Set your desired x-position trigger
  const triggerPosition = 200;

  if (scrollPosition >= triggerPosition) {
    // Code to execute when the scroll position is at or beyond the trigger position
    console.log("Scroll position reached " + triggerPosition + "px or more.");
    // Add your desired actions here, e.g., triggering animations, loading content, etc.
  }
});

document.addEventListener("DOMContentLoaded", () => {
  //
  //

  // Adjust main content padding-top dynamically based on .sc-header height
  const header = document.querySelector(".header");
  const mainElement = document.querySelector("main");
  function adjustMainContentOffset() {
    if (header && mainElement) {
      const headerHeight = header.offsetHeight;
      console.log("Header Height: ", headerHeight);
      // mainElement.style.paddingTop = `${headerHeight + 25}px`;
      // mainElement.style.paddingTop = `${headerHeight}px`;
      if (window.innerWidth > 768) {
        mainElement.style.paddingTop = `${headerHeight + 25}px`;
      } else {
        mainElement.style.paddingTop = `${headerHeight}px`;
      }
    }
    //  else {
    //   console.error("No sc header");
    // }
  }

  // Call adjustMainContentOffset initially and on window resize (optional)
  adjustMainContentOffset();
  window.addEventListener("resize", adjustMainContentOffset);

  // Toggle main navigation
  const toggleButton = document.getElementById("toggle-button");
  const navbarLinks = document.getElementById("nav-links");
  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener("click", () => {
      const isActive = navbarLinks.classList.contains("active");

      if (isActive) {
        navbarLinks.classList.remove("active");
      } else {
        navbarLinks.classList.add("active");
      }
    });

    // Close main navigation when open and user clicks anywhere else in window
    document.addEventListener("click", (event) => {
      const target = event.target;
      // if (toggleButton && navbarLinks) {
      const isClickInsideNavbar = navbarLinks.contains(target);
      const isClickInsideToggleButton = toggleButton.contains(target);

      if (!isClickInsideNavbar && !isClickInsideToggleButton) {
        navbarLinks.classList.remove("active");
      }
      // }
    });
  }

  // Show or hide the scroll to top button based on scroll position
  // const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // if (scrollToTopBtn) {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       scrollToTopBtn.style.display = "flex";
  //     } else {
  //       scrollToTopBtn.style.display = "none";
  //     }
  //   });

  //   // Scroll to top of the page when scroll to top button is clicked
  //   scrollToTopBtn.addEventListener("click", () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   });
  // }

  // const themeBtn = document.getElementById("themeBtn");
  // themeBtn.addEventListener("click", (event) => {
  //   const target = event.target;
  //   const themeStyleSheet = document.getElementById("theme-stylesheet");

  //   // If the stylesheet is currently empty, add the theme
  //   if (!themeStyleSheet.getAttribute("href")) {
  //     themeStyleSheet.setAttribute(
  //       "href",
  //       "./css/overrides/themes/darkMode.css"
  //     );
  //   } else {
  //     // Otherwise, remove the theme
  //     themeStyleSheet.removeAttribute("href");
  //   }
  // });

  // const themeBtns = document.querySelectorAll("#themeBtn");

  // // Add an event listener to each button
  // themeBtns.forEach(function (button) {
  //   button.addEventListener("click", function () {
  //       const target = event.target;
  //       const themeStyleSheet = document.getElementById("theme-stylesheet");
  //       // If the stylesheet is currently empty, add the theme
  //       if (!themeStyleSheet.getAttribute("href")) {
  //         themeStyleSheet.setAttribute(
  //           "href",
  //           "./css/overrides/themes/darkMode.css"
  //         );
  //       } else {
  //         // Otherwise, remove the theme
  //         themeStyleSheet.removeAttribute("href");
  //       }
  //   });
  // });
});

// const toggleNav = document.getElementById("toggle-nav");
// let showNav = false;

// toggleNav.onclick = function () {
//   if (!showNav) {
//     showNav = true;
//   } else {
//     showNav = false;
//   }
//   console.log("Show nav: ", showNav);
//   const nav = document.getElementById("nav");

//   // Display the nav
//   if (showNav) {
//     nav.style.display = "flex";
//   } else {
//     nav.style.display = "none";
//     showNav = false;
//   }
// };

// console.log("Show nav: ", showNav);

// function route() {
//   // Retrieve the current hash (remove the '#' symbol)
//   const hash = window.location.hash.substring(1) || "home";
//   // Define valid routes
//   const validRoutes = ["home", "about", "contact"];
//   // Hide all sections
//   document
//     .querySelectorAll("section")
//     .forEach((sec) => (sec.style.display = "none"));

//   // Display the matching section or the 404 section if not found
//   if (validRoutes.includes(hash)) {
//     document.getElementById(hash).style.display = "block";
//   } else {
//     document.getElementById("404").style.display = "block";
//   }
// }

// // Listen for hash changes and call the router
// window.addEventListener("hashchange", route);
// // Run on initial load
// route();

//
//
