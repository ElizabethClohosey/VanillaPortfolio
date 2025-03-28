document.addEventListener("DOMContentLoaded", () => {
  //Navigate Home
  const homeBtn = document.getElementById("home-btn");
  homeBtn.onclick = function () {
    window.location.assign("./index.html");
  };
});
