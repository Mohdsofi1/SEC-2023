let aboutMeDOM = document.querySelector("#button-1");
let popupDOM = document.querySelector("#popup-1");
let closeDOM = document.querySelector(".close-btn");

aboutMeDOM.addEventListener("click", function () {
  popupDOM.style.display = "show";
  console.log(aboutMeDOM);
});

closeDOM.addEventListener("click", function () {
  popupDOM.style.display = "none";
  console.log(closeDOM);
});
