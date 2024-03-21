const lightOne = document.getElementById("light-one");
const lightTwo = document.getElementById("light-two");
const lightThree = document.getElementById("light-three");

const colorOne = window.getComputedStyle(lightOne).backgroundColor;
const colorTwo = window.getComputedStyle(lightTwo).backgroundColor;
const colorThree = window.getComputedStyle(lightThree).backgroundColor;

lightOne.style.backgroundColor = colorThree;
lightTwo.style.backgroundColor = colorOne;
lightThree.style.backgroundColor = colorTwo;