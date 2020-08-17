function renderSectionOne(div) {
  const section = document.createElement('section');
  section.id = 'landing-page';
  const navSlider = document.createElement('div');
  navSlider.className = 'nav-slider';
  const firstDiv = document.createElement('div');
  firstDiv.className = 'line';
  const secondDiv = document.createElement('div');
  secondDiv.className = 'line';
  const thirdDiv = document.createElement('div');
  thirdDiv.className = 'line';
  const graphicDiv = document.createElement('div');
  graphicDiv.className = 'text-contain';

  const firstChildDiv = document.createElement('div');
  firstChildDiv.className = 'odatabs';
  const firstChildPar = document.createElement('p');
  const em1 = document.createElement('em');
  const firstLink = document.createElement('a');
  const firstText1 = document.createTextNode('contact');
  firstLink.title = 'Drinks';
  firstLink.href = '#Drinks';
  firstLink.className = 'p1';
  firstLink.appendChild(firstText1);
  em1.appendChild(firstLink);
  firstChildPar.appendChild(em1);
  firstChildDiv.appendChild(firstChildPar);
  graphicDiv.appendChild(firstChildDiv);

  const secondChildDiv = document.createElement('div');
  secondChildDiv.className = 'odatabs';
  const secondChildPar = document.createElement('p');
  const em2 = document.createElement('em');
  const secondLink = document.createElement('a');
  const secondText1 = document.createTextNode('food');
  secondLink.title = 'food';
  secondLink.href = '#food';
  secondLink.className = 'p2';
  secondLink.appendChild(secondText1);
  em2.appendChild(secondLink);
  secondChildPar.appendChild(em2);
  secondChildDiv.appendChild(secondChildPar);
  graphicDiv.appendChild(secondChildDiv);

  const thirdChildDiv = document.createElement('div');
  thirdChildDiv.className = 'odatabs';
  const thirdChildPar = document.createElement('p');
  const em3 = document.createElement('em');
  const thirdLink = document.createElement('a');
  const thirdText1 = document.createTextNode('casino');
  thirdLink.title = 'Casino';
  thirdLink.href = '#casino';
  thirdLink.className = 'p3';
  thirdLink.appendChild(thirdText1);
  em3.appendChild(thirdLink);
  thirdChildPar.appendChild(em3);
  thirdChildDiv.appendChild(thirdChildPar);
  graphicDiv.appendChild(thirdChildDiv);

  const fourthChildDiv = document.createElement('div');
  fourthChildDiv.className = 'odatabs';
  const fourthChildPar = document.createElement('p');
  const fourthLink = document.createElement('a');
  const fourthText1 = document.createTextNode('Games&Bar');
  fourthLink.title = 'Games';
  fourthLink.href = '#games';
  fourthLink.className = 'p4';
  fourthLink.appendChild(fourthText1);
  fourthChildPar.appendChild(fourthLink);
  fourthChildDiv.appendChild(fourthChildPar);
  graphicDiv.appendChild(fourthChildDiv);

  const header = document.createElement('header');
  header.className = 'title-background';
  const names = document.createElement('h2');
  const marquee = document.createElement('marquee');
  marquee.innerHTML = 'WE ARE OPEN';
  marquee.className = 'marq';
  names.innerHTML = 'precious bar';
  names.className = 'title';

  const middles = document.createElement('div');
  middles.className = 'middle';
  const middlesPara = document.createElement('p');
  middlesPara.innerHTML = 'COME LETS HAVE A DRINK SIT DOWN';
  middles.appendChild(middlesPara);

  header.appendChild(names);
  header.appendChild(marquee);
  navSlider.appendChild(firstDiv);
  navSlider.appendChild(secondDiv);
  navSlider.appendChild(thirdDiv);
  section.appendChild(navSlider);
  section.appendChild(graphicDiv);
  section.appendChild(header);
  section.appendChild(middles);
  div.appendChild(section);
}

function renderSectionTwo(div) {
  const section = document.createElement('section');
  section.className = 'nav-slider-section';
  const button = document.createElement('button');
  button.className = 'close-nav-slider';
  button.innerHTML = 'X';
  const childSection = document.createElement('section');
  childSection.className = 'nav-links-container';
  const ul = document.createElement('ul');
  const list1 = document.createElement('li');
  const link1 = document.createElement('a');
  link1.className = 'nav-links';
  const text1 = document.createTextNode('Menu');
  link1.appendChild(text1);
  link1.title = 'Menu';
  link1.href = '#menu';
  const list2 = document.createElement('li');
  const link2 = document.createElement('a');
  link2.className = 'nav-links';
  const text2 = document.createTextNode('restaurant information');
  link2.appendChild(text2);
  link2.title = 'restaurant information';
  link2.href = '#restaurant i';
  list1.appendChild(link1);
  list2.appendChild(link2);
  ul.appendChild(list1);
  ul.appendChild(list2);
  childSection.appendChild(ul);
  section.appendChild(button);
  section.appendChild(childSection);
  div.appendChild(section);
}

function renderSectionThree(div) {
  const section = document.createElement('section');
  section.id = 'menu';
  const h2 = document.createElement('h2');
  h2.className = 'menu-title';
  h2.innerHTML = 'menu';
  const secondSection = document.createElement('section');
  secondSection.className = 'tabs-container';
  const tabSection = document.createElement('section');

  // tab section

  tabSection.className = 'tabs';
  const firstButtonTab = document.createElement('button');
  firstButtonTab.className = 'tabHeader active-tab';
  firstButtonTab.innerHTML = 'chimichanga';
  firstButtonTab.setAttribute('data-tab', '1');
  const secondButtonTab = document.createElement('button');
  secondButtonTab.className = 'tabHeader';
  secondButtonTab.innerHTML = 'Drinks';
  secondButtonTab.setAttribute('data-tab', '2');
  const thirdButtonTab = document.createElement('button');
  thirdButtonTab.className = 'tabHeader';
  thirdButtonTab.innerHTML = 'Appetizers';
  thirdButtonTab.setAttribute('data-tab', '3');
  const fourthButtonTab = document.createElement('button');
  fourthButtonTab.className = 'tabHeader';
  fourthButtonTab.innerHTML = 'Deserts';
  fourthButtonTab.setAttribute('data-tab', '4');

  // chimichanga

  const chimichangaSection = document.createElement('section');
  chimichangaSection.id = 'tabSection-1';
  chimichangaSection.className = 'tabSection show-tab';

  const firstChimichanga = document.createElement('p');
  firstChimichanga.innerHTML = '1. burritto';
  const spanFirstChimichanga = document.createElement('span');
  spanFirstChimichanga.className = 'menu-price';
  spanFirstChimichanga.innerHTML = '$10.00';

  const secondChimichanga = document.createElement('p');
  secondChimichanga.innerHTML = '2. chimichanga';
  const spanSecondChimichanga = document.createElement('span');
  spanSecondChimichanga.className = 'menu-price';
  spanSecondChimichanga.innerHTML = '$10.00';

  const thirdChimichanga = document.createElement('p');
  thirdChimichanga.innerHTML = '3. standard-akpu';
  const spanThirdChimichanga = document.createElement('span');
  spanThirdChimichanga.className = 'menu-price';
  spanThirdChimichanga.innerHTML = '$10.00';

  const fourthChimichanga = document.createElement('p');
  fourthChimichanga.innerHTML = '4. starch';
  const spanFourthChimichanga = document.createElement('span');
  spanFourthChimichanga.className = 'menu-price';
  spanFourthChimichanga.innerHTML = '$10.00';

  // DRINKS

  const drinksSection = document.createElement('section');
  drinksSection.id = 'tabSection-2';
  drinksSection.className = 'tabSection hide-tab';

  const firstDrink = document.createElement('p');
  firstDrink.innerHTML = '1. chelsea';
  const spanFirstDrink = document.createElement('span');
  spanFirstDrink.className = 'menu-price';
  spanFirstDrink.innerHTML = '$10.00';

  const secondDrink = document.createElement('p');
  secondDrink.innerHTML = '2. vino tinto';
  const spanSecondDrink = document.createElement('span');
  spanSecondDrink.className = 'menu-price';
  spanSecondDrink.innerHTML = '$10.00';

  const thirdDrink = document.createElement('p');
  thirdDrink.innerHTML = '3. Gold spot';
  const spanThirdDrink = document.createElement('span');
  spanThirdDrink.className = 'menu-price';
  spanThirdDrink.innerHTML = '$10.00';

  const fourthDrink = document.createElement('p');
  fourthDrink.innerHTML = '4. cocacola';
  const spanFourthDrink = document.createElement('span');
  spanFourthDrink.className = 'menu-price';
  spanFourthDrink.innerHTML = '$10.00';

  // appetizers

  const appetizersSection = document.createElement('section');
  appetizersSection.id = 'tabSection-3';
  appetizersSection.className = 'tabSection hide-tab';

  const firstAppetizers = document.createElement('p');
  firstAppetizers.innerHTML = '1. burritto';
  const spanFirstAppetizers = document.createElement('span');
  spanFirstAppetizers.className = 'menu-price';
  spanFirstAppetizers.innerHTML = '$10.00';

  const secondAppetizers = document.createElement('p');
  secondAppetizers.innerHTML = '2. Appetizers';
  const spanSecondAppetizers = document.createElement('span');
  spanSecondAppetizers.className = 'menu-price';
  spanSecondAppetizers.innerHTML = '$10.00';

  const thirdAppetizers = document.createElement('p');
  thirdAppetizers.innerHTML = '3. standard-akpu';
  const spanThirdAppetizers = document.createElement('span');
  spanThirdAppetizers.className = 'menu-price';
  spanThirdAppetizers.innerHTML = '$10.00';

  const fourthAppetizers = document.createElement('p');
  fourthAppetizers.innerHTML = '4. starch';
  const spanFourthAppetizers = document.createElement('span');
  spanFourthAppetizers.className = 'menu-price';
  spanFourthAppetizers.innerHTML = '$10.00';

  // Deserts

  const desertsSection = document.createElement('section');
  desertsSection.id = 'tabSection-4';
  desertsSection.className = 'tabSection hide-tab';

  const firstDeserts = document.createElement('p');
  firstDeserts.innerHTML = '1. Agbo';
  const spanFirstDeserts = document.createElement('span');
  spanFirstDeserts.className = 'menu-price';
  spanFirstDeserts.innerHTML = '$10.00';

  const secondDeserts = document.createElement('p');
  secondDeserts.innerHTML = '2. Noodles';
  const spanSecondDeserts = document.createElement('span');
  spanSecondDeserts.className = 'menu-price';
  spanSecondDeserts.innerHTML = '$10.00';

  const thirdDeserts = document.createElement('p');
  thirdDeserts.innerHTML = '3. standard-akpu';
  const spanThirdDeserts = document.createElement('span');
  spanThirdDeserts.className = 'menu-price';
  spanThirdDeserts.innerHTML = '$10.00';

  const fourthDeserts = document.createElement('p');
  fourthDeserts.innerHTML = '4. starch';
  const spanFourthDeserts = document.createElement('span');
  spanFourthDeserts.className = 'menu-price';
  spanFourthDeserts.innerHTML = '$10.00';


  // appends

  firstChimichanga.appendChild(spanFirstChimichanga);
  secondChimichanga.appendChild(spanSecondChimichanga);
  thirdChimichanga.appendChild(spanThirdChimichanga);
  fourthChimichanga.appendChild(spanFourthChimichanga);

  // chimichanga append

  firstDrink.appendChild(spanFirstDrink);
  secondDrink.appendChild(spanSecondDrink);
  thirdDrink.appendChild(spanThirdDrink);
  fourthDrink.appendChild(spanFourthDrink);

  // drinks append

  firstAppetizers.appendChild(spanFirstAppetizers);
  secondAppetizers.appendChild(spanSecondAppetizers);
  thirdAppetizers.appendChild(spanThirdAppetizers);
  fourthAppetizers.appendChild(spanFourthAppetizers);

  // appetizers append

  firstDeserts.appendChild(spanFirstDeserts);
  secondDeserts.appendChild(spanSecondDeserts);
  thirdDeserts.appendChild(spanThirdDeserts);
  fourthDeserts.appendChild(spanFourthDeserts);

  // deserts appends


  // chimichanga section append

  chimichangaSection.appendChild(firstChimichanga);
  chimichangaSection.appendChild(secondChimichanga);
  chimichangaSection.appendChild(thirdChimichanga);
  chimichangaSection.appendChild(fourthChimichanga);

  // drink section append

  drinksSection.appendChild(firstDrink);
  drinksSection.appendChild(secondDrink);
  drinksSection.appendChild(thirdDrink);
  drinksSection.appendChild(fourthDrink);

  // appetizers section appends

  appetizersSection.appendChild(firstAppetizers);
  appetizersSection.appendChild(secondAppetizers);
  appetizersSection.appendChild(thirdAppetizers);
  appetizersSection.appendChild(fourthAppetizers);

  // desert section appends

  desertsSection.appendChild(firstDeserts);
  desertsSection.appendChild(secondDeserts);
  desertsSection.appendChild(thirdDeserts);
  desertsSection.appendChild(fourthDeserts);

  // tab section appends

  tabSection.appendChild(firstButtonTab);
  tabSection.appendChild(secondButtonTab);
  tabSection.appendChild(thirdButtonTab);
  tabSection.appendChild(fourthButtonTab);

  // second section append

  secondSection.appendChild(tabSection);
  secondSection.appendChild(chimichangaSection);
  secondSection.appendChild(drinksSection);
  secondSection.appendChild(appetizersSection);
  secondSection.appendChild(desertsSection);

  // final section appends

  section.appendChild(h2);
  section.appendChild(secondSection);


  div.appendChild(section);
}

function renderSectionFour(div) {
  const section = document.createElement('section');
  section.id = 'restaurant-info';
  const deputySection = document.createElement('section');
  deputySection.className = 'info-container';
  const address = document.createElement('section');
  address.className = 'address-content';
  const firstH2 = document.createElement('h2');
  firstH2.className = 'restaurant-info-title';
  firstH2.innerHTML = 'Address';
  const firstAddress = document.createElement('p');
  firstAddress.className = 'address';
  firstAddress.innerHTML = '133, NNamdi azikiwe road victoria island';
  const secondAddress = document.createElement('p');
  secondAddress.className = 'address';
  secondAddress.innerHTML = '133, nnamdi azikiwe road victoria island';
  // const br = document.createElement('br')

  address.appendChild(firstH2);
  address.appendChild(firstAddress);
  address.appendChild(secondAddress);
  // business hours

  const businessHours = document.createElement('section');
  businessHours.className = 'business-hours';
  const firstHead = document.createElement('h2');
  firstHead.className = 'restaurant-info-title';
  firstHead.innerHTML = 'Business Hours';
  const firstBusiness = document.createElement('p');
  firstBusiness.className = 'hours';
  firstBusiness.innerHTML = 'weekdays: 8am - 9pm';
  const secondBusiness = document.createElement('p');
  secondBusiness.className = 'hours';
  secondBusiness.innerHTML = 'weekends: 4pm - 10pm';
  // const br = document.createElement('br')

  const openingHours = document.createElement('section');
  openingHours.className = 'contact-content';
  const lastH2 = document.createElement('h2');
  lastH2.className = 'restaurant-info-title';
  lastH2.innerHTML = 'Pick Up';
  const firstHour = document.createElement('p');
  firstHour.className = 'phone';
  firstHour.innerHTML = '0803338888';
  // const br = document.createElement('br')

  businessHours.appendChild(firstHead);
  businessHours.appendChild(firstBusiness);
  businessHours.appendChild(secondBusiness);

  openingHours.appendChild(lastH2);
  openingHours.appendChild(firstHour);

  deputySection.appendChild(address);
  deputySection.appendChild(businessHours);
  deputySection.appendChild(openingHours);

  section.appendChild(deputySection);

  div.appendChild(section);
}

function renderMain() {
  const menu = document.querySelector('#all');
  const div = document.createElement('div');
  div.id = 'suball';
  div.classList = 'biggestdiv';
  renderSectionOne(div);
  renderSectionTwo(div);
  renderSectionThree(div);
  renderSectionFour(div);
  menu.appendChild(div);
  document.body.appendChild(menu);
}

export default renderMain;