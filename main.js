const clickMeBtn = document.getElementById("click-me-btn");
clickMeBtn.onclick = function () {
  console.log("Button clicked!");
  window.location.assign("./contact.html");
};

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
