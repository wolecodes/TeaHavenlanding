'use strict';
//Date setup
const currentYear = document.getElementById('date');
currentYear.innerHTML = new Date().getFullYear();

//Nabar
const navigationBtn = document.querySelector('.nav-btn');
const navigationClose = document.querySelector('.nav-close');
const navbar = document.querySelector('.navbar');

navigationBtn.addEventListener('click', function () {
  navbar.classList.add('show');
});

navigationClose.addEventListener('click', function () {
  navbar.classList.remove('show');
});
