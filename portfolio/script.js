// code untuk modal aboutme
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

document.addEventListener("DOMContentLoaded", function () {
  const myProjectButton = document.getElementById("myProject");
  const modal = document.getElementById("modal-1");
  const closeButton = document.querySelector(".close-1");

  myProjectButton.addEventListener("click", function () {
    modal.style.display = "flex";
  });
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === myProject) {
      modal.style.display = "none";
    }
  });
});
