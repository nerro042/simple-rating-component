"use strict";
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".buttons");
const submit = document.querySelector(".submit-btn");
const content2 = document.querySelector(".content-2");
const content1 = document.querySelector(".content");

content2.classList.add("hidden");

submit.addEventListener("click", function () {
  content1.classList.add("hidden");
  content2.classList.remove("hidden");
});

rates.forEach((rates) => {
  rates.addEventListener("click", () => {
    rating.innerHTML = rates.innerHTML;
  });
});
