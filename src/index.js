// import _ from 'lodash';
import './main.css';
import './front.jpg';
import './resta.jpg';
import './contact.jpg';
import renderMain from '../interface';
import renderMainOne from './about';
import renderMainTwo from './food';
import renderMainThree from './drink';
import renderMainFour from './contact';

renderMain();
renderMainOne();
renderMainTwo();
renderMainThree();
renderMainFour();
const openNavClick = document.querySelector('.nav-slider');
const closeNavClick = document.querySelector('.close-nav-slider');
const navSliderSection = document.querySelector('.nav-slider-section');
const navLinks = document.querySelectorAll('.nav-links');
const navbarlinks = document.querySelector('.p4');
const navbarlinks1 = document.querySelector('.p3');
const navbarlinks2 = document.querySelector('.p2');
const abouthomelink = document.querySelector('.HOMEabout');
const foodlink = document.querySelector('.foodlinks');
const casinoabout = document.querySelector('.casinoabout');
const href = document.querySelector('.btn1');
const contact = document.querySelector('.p1');
const homecontact = document.querySelector('.tohome');
const aboutdrinks = document.querySelector('.aboutdrinks');
const aboutfood = document.querySelector('.aboutfood');
const drinklink = document.querySelector('.linkdrink');
const fordrinks = document.querySelector('.fordrinks');
const forcontact = document.querySelector('.forcontact');
const menucard = document.querySelector('.btn2');
const menucard1 = document.querySelector('.btn3');
const menucard2 = document.querySelector('.btn4');
const reserved = document.querySelector('.reserved');
const contactfood = document.querySelector('.contactfood');
const foodmenu = document.querySelector('.foodmenucard');


function closeNavSlider() {
  navSliderSection.classList.remove('openNav');
  navSliderSection.classList.add('closeNav');
}

navLinks.forEach((link) => {
  link.onclick = closeNavSlider;
});

navbarlinks.onclick = function whatever() {
  document.querySelector('.biggestdiv').classList.remove('show-tab');
  document.querySelector('.biggestdiv').classList.add('hide-tab');
  document.querySelector('.new').classList.remove('hide-tab');
  document.querySelector('.new').classList.add('show-tab');
};

navbarlinks1.onclick = function casinolink() {
  document.querySelector('.biggestdiv').classList.remove('show-tab');
  document.querySelector('.biggestdiv').classList.add('hide-tab');
  document.querySelector('.foodclass').classList.remove('hide-tab');
  document.querySelector('.foodclass').classList.add('show-tab');
};

navbarlinks2.onclick = function drinklink() {
  document.querySelector('.biggestdiv').classList.remove('show-tab');
  document.querySelector('.biggestdiv').classList.add('hide-tab');
  document.querySelector('.drinkspage').classList.remove('hide-tab');
  document.querySelector('.drinkspage').classList.add('show-tab');
};

abouthomelink.onclick = function homepage() {
  document.querySelector('.new').classList.remove('show-tab');
  document.querySelector('.new').classList.add('hide-tab');
  document.querySelector('.biggestdiv').classList.remove('hide-tab');
  document.querySelector('.biggestdiv').classList.add('show-tab');
};

foodlink.onclick = function foodlinkss() {
  document.querySelector('.biggestdiv').classList.remove('hide-tab');
  document.querySelector('.biggestdiv').classList.add('show-tab');
  document.querySelector('.foodclass').classList.remove('show-tab');
  document.querySelector('.foodclass').classList.add('hide-tab');
};

casinoabout.onclick = function casinoabout() {
  document.querySelector('.new').classList.remove('show-tab');
  document.querySelector('.new').classList.add('hide-tab');
  document.querySelector('.foodclass').classList.remove('hide-tab');
  document.querySelector('.foodclass').classList.add('show-tab');
};

href.onclick = function drinkslink() {
  document.querySelector('.drinkspage').classList.remove('show-tab');
  document.querySelector('.drinkspage').classList.add('hide-tab');
  document.querySelector('.biggestdiv').classList.remove('hide-tab');
  document.querySelector('.biggestdiv').classList.add('show-tab');
};

contact.onclick = function lastpage() {
  document.querySelector('.biggestdiv').classList.remove('show-tab');
  document.querySelector('.biggestdiv').classList.add('hide-tab');
  document.querySelector('.contact').classList.remove('hide-tab');
  document.querySelector('.contact').classList.add('show-tab');
};

homecontact.onclick = function lasthome() {
  document.querySelector('.contact').classList.remove('show-tab');
  document.querySelector('.contact').classList.add('hide-tab');
  document.querySelector('.biggestdiv').classList.remove('hide-tab');
  document.querySelector('.biggestdiv').classList.add('show-tab');
};

aboutdrinks.onclick = function lasthome1() {
  document.querySelector('.aboutpage').classList.remove('show-tab');
  document.querySelector('.aboutpage').classList.add('hide-tab');
  document.querySelector('.drinkspage').classList.remove('hide-tab');
  document.querySelector('.drinkspage').classList.add('show-tab');
};

aboutfood.onclick = function lasthome2() {
  document.querySelector('.aboutpage').classList.remove('show-tab');
  document.querySelector('.aboutpage').classList.add('hide-tab');
  document.querySelector('.contact').classList.remove('hide-tab');
  document.querySelector('.contact').classList.add('show-tab');
};

drinklink.addEventListener('click', () => {
  document.querySelector('.foodclass').classList.remove('show-tab');
  document.querySelector('.foodclass').classList.add('hide-tab');
  document.querySelector('.new').classList.remove('hide-tab');
  document.querySelector('.new').classList.add('show-tab');
});

fordrinks.addEventListener('click', () => {
  document.querySelector('.foodclass').classList.remove('show-tab');
  document.querySelector('.foodclass').classList.add('hide-tab');
  document.querySelector('.drinkspage').classList.remove('hide-tab');
  document.querySelector('.drinkspage').classList.add('show-tab');
});

forcontact.addEventListener('click', () => {
  document.querySelector('.foodclass').classList.remove('show-tab');
  document.querySelector('.foodclass').classList.add('hide-tab');
  document.querySelector('.contact').classList.remove('hide-tab');
  document.querySelector('.contact').classList.add('show-tab');
});

menucard.onclick = function forreserve() {
  document.querySelector('.drinkspage').classList.remove('show-tab');
  document.querySelector('.drinkspage').classList.add('hide-tab');
  document.querySelector('.aboutpage').classList.remove('hide-tab');
  document.querySelector('.aboutpage').classList.add('show-tab');
  document.querySelector('.new').classList.remove('hide-tab');
  document.querySelector('.new').classList.add('show-tab');
};

menucard1.addEventListener('click', () => {
  document.querySelector('.drinkspage').classList.remove('show-tab');
  document.querySelector('.drinkspage').classList.add('hide-tab');
  document.querySelector('.foodclass').classList.remove('hide-tab');
  document.querySelector('.foodclass').classList.add('show-tab');
});

menucard2.addEventListener('click', () => {
  document.querySelector('.drinkspage').classList.remove('show-tab');
  document.querySelector('.drinkspage').classList.add('hide-tab');
  document.querySelector('.contact').classList.remove('hide-tab');
  document.querySelector('.contact').classList.add('show-tab');
});

reserved.addEventListener('click', () => {
  document.querySelector('.contact').classList.remove('show-tab');
  document.querySelector('.contact').classList.add('hide-tab');
  document.querySelector('.aboutpage').classList.remove('hide-tab');
  document.querySelector('.aboutpage').classList.add('show-tab');
  document.querySelector('.new').classList.remove('hide-tab');
  document.querySelector('.new').classList.add('show-tab');
});

contactfood.addEventListener('click', () => {
  document.querySelector('.contact').classList.remove('show-tab');
  document.querySelector('.contact').classList.add('hide-tab');
  document.querySelector('.foodclass').classList.remove('hide-tab');
  document.querySelector('.foodclass').classList.add('show-tab');
});

foodmenu.addEventListener('click', () => {
  document.querySelector('.contact').classList.remove('show-tab');
  document.querySelector('.contact').classList.add('hide-tab');
  document.querySelector('.drinkspage').classList.remove('hide-tab');
  document.querySelector('.drinkspage').classList.add('show-tab');
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
