"use strict";

const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector(".btn--2");
const toggle1 = document.querySelector(".toggle--1");
const toggle2 = document.querySelector(".toggle--2");

const btn1Toggler = function () {
  toggle1.classList.toggle("right");
};

const btn2Toggler = function () {
  toggle2.classList.toggle("right");
};

btn1.addEventListener("click", btn1Toggler);
btn2.addEventListener("click", btn2Toggler);
