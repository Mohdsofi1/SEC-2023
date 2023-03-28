// variable dom
let weightDOM = document.querySelector("#weight");
let heightDOM = document.querySelector("#height");
let calculatebtnDOM = document.querySelector("#calculate-btn");
let bmiadviceDOM = document.querySelector("#bmi-advice");

calculatebtnDOM.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(weightDOM.value, heightDOM.value, bmiadviceDOM);

  // calculate
  calculatebtnDOM = parseInt(weightDOM.value) + parseInt(heightDOM.value);

  // condition
  bmiadviceDOM.innerText = calculatebtnDOM.toFixed();
  if (calculatebtnDOM < 18.0) {
    bmiadviceDOM.innerText =
      "underweight : you need to eat more or consult a doctor";
  } else if (calculatebtnDOM >= 18.0 && calculatebtnDOM <= 24.0) {
    bmiadviceDOM.innerText = "ideal : good job for taking care of your health";
  } else if (calculatebtnDOM > 24.0 && calculatebtnDOM > 30.0) {
    bmiadviceDOM.innerText = "overweight : you need to exercise";
  }
});
