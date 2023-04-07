let aboutMeDOM = document.querySelector("#button-1");
let popupDOM = document.querySelector("#popup-1");
let closeDOM = document.querySelector(".close-btn");

// aboutMeDOM.addEventListener("click", function () {
//   popupDOM.style.display = "show";
//   console.log(aboutMeDOM);
// });

// closeDOM.addEventListener("click", function () {
//   popupDOM.style.display = "none";
//   console.log(closeDOM);
// });

document.addEventListener("DOMContentLoaded", function () {
  const aboutMeButton = document.getElementById("aboutMe");
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close");

  aboutMeButton.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
