// import _ from 'lodash';
import './main.css';
import './front.jpg';
import renderMain from '../interface';

renderMain();
const openNavClick = document.querySelector('.nav-slider');
const closeNavClick = document.querySelector('.close-nav-slider');
const navSliderSection = document.querySelector('.nav-slider-section');
const navLinks = document.querySelectorAll('.nav-links');

function closeNavSlider() {
  navSliderSection.classList.remove('openNav');
  navSliderSection.classList.add('closeNav');
}

navLinks.forEach((link) => {
  link.onclick = closeNavSlider;
});

openNavClick.onclick = function openNavClick() {
  navSliderSection.classList.remove('closeNav');
  navSliderSection.classList.add('openNav');
};

function changeTabSection(tabNumber) {
  const currentTab = document.querySelector('.show-tab');
  currentTab.classList.remove('show-tab');
  currentTab.classList.add('hide-tab');

  const newSection = document.getElementById(`tabSection-${tabNumber}`);
  newSection.classList.remove('hide-tab');
  newSection.classList.add('show-tab');
}

function changeTabHeader() {
  const tabNumber = parseInt(this.dataset.tab);

  document.querySelector('.active-tab').classList.remove('active-tab');

  this.classList.add('active-tab');

  switch (tabNumber) {
    case 1:
      changeTabSection(tabNumber);
      break;
    case 2:
      changeTabSection(tabNumber);
      break;
    case 3:
      changeTabSection(tabNumber);
      break;
    case 4:
      changeTabSection(tabNumber);
      break;
    default:
      break;
  }
}

closeNavClick.onclick = closeNavSlider;

const tabHeader = document.querySelectorAll('.tabHeader');

tabHeader.forEach((button) => {
  button.onclick = changeTabHeader;
});
