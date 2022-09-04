"use strict";

// defining the varibles
const output = document.querySelector(".cal-head");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deleteBtn = document.querySelector(".delete-btn");
const resetBtn = document.querySelector(".reset-btn");
const resultBtn = document.querySelector(".equal-btn");
const redTheme = document.querySelector(".one");
const themeTwo = document.querySelector(".two");
const greenTheme = document.querySelector(".three");
/// functionalities
// let num = 3455555;
// num = num.toLocaleString("fr-FR");
// console.log(num);

// num = num.toString().replace(/\B(?=(?:\d{3})+)$/g, ",");
// console.log(num);

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    output.value += numbers[i].value;
  });
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (output.value !== "") {
      output.value = eval(output.value);
    }
    if (output.value !== "" && !output.value.includes(operators[i].value)) {
      output.value += operators[i].value;
    }
    // ask questions
    // output.value = eval(output.value);
  });
}

resultBtn.addEventListener("click", function () {
  let result = eval(output.value);
  output.value = result;
});
resetBtn.addEventListener("click", function () {
  output.value = "";
});

redTheme.addEventListener("click", function () {
  document.querySelector("body").classList.remove("theme-two");
  document.querySelector("body").classList.remove("theme-three");
});
themeTwo.addEventListener("click", function () {
  document.querySelector("body").classList.add("theme-two");
  document.querySelector("body").classList.remove("theme-three");
});
greenTheme.addEventListener("click", function () {
  document.querySelector("body").classList.add("theme-three");
  document.querySelector("body").classList.remove("theme-two");
});
deleteBtn.addEventListener("click", function () {
  let string = output.value.toString();
  output.value = string.substr(0, string.length - 1);
});

// testing functionalities with a small project
// const numberField = document.querySelector(".number-field");
// const calculate = document.querySelector(".btn");
// const result = document.querySelector(".result");

// calculate.addEventListener("click", function () {
//   const number = document.querySelector(".number-field").value;
//   eval(number);
//   result.textContent = eval(number);
//   numberField.value = result.textContent;
//   console.log(result.textContent);c
//
