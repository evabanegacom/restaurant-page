function tabsagain(div) {
  const headnav = document.createElement('div');
  headnav.className = 'header';
  const casinodiv = document.createElement('div');
  casinodiv.className = 'head';
  const headerh2 = document.createElement('h2');
  headerh2.innerHTML = 'Gallery';
  casinodiv.appendChild(headerh2);
  const newnav = document.createElement('div');
  const newnavlist = document.createElement('div');
  newnavlist.className = 'ul';
  const newlistpar1 = document.createElement('p');
  newlistpar1.innerHTML = 'Drinks';
  newlistpar1.className = 'active foodlinks';
  const newlistpar2 = document.createElement('p');
  newlistpar2.innerHTML = 'food';
  newlistpar2.className = 'linkdrink';

  const newlistpar3 = document.createElement('p');

  newlistpar3.innerHTML = 'casino';
  newlistpar3.classList = 'fordrinks';

  const newlistpar4 = document.createElement('p');
  newlistpar4.innerHTML = 'Contact';
  newlistpar4.className = 'forcontact';


  newnavlist.appendChild(newlistpar1);
  newnavlist.appendChild(newlistpar2);
  newnavlist.appendChild(newlistpar3);
  newnavlist.appendChild(newlistpar4);

  newnav.appendChild(newnavlist);

  headnav.appendChild(casinodiv);
  headnav.appendChild(newnav);

  div.appendChild(headnav);

  const showcase = document.createElement('showcase');
  showcase.className = 'showcase';
  const showdiv = document.createElement('div');
  const category = document.createElement('div');
  category.className = 'category';
  showdiv.className = 'container';
  const h1div = document.createElement('h1');
  const h3div = document.createElement('h3');
  const h4div = document.createElement('h4');
  h4div.innerHTML = 'thai tanic';
  const thaip = document.createElement('p');
  thaip.innerHTML = 'lorem ipsum sit dolor amet en noen et filli espirito santo amen';
  thaip.className = 'snackp';
  const thai = document.createElement('div');
  thai.className = 'thai';
  const snacks = document.createElement('div');
  snacks.className = 'snacks';
  const snacksimg = new Image(300, 200);
  snacksimg.className = 'img';
  snacksimg.setAttribute('src', './fork.jpg');
  const snacksh4 = document.createElement('h4');
  snacksh4.innerHTML = 'Evening snacks';
  const snacksp = document.createElement('p');
  snacksp.innerHTML = 'this is an annoying project incant wait to finshf it i hope it enfs any t';
  snacksp.className = 'snackp';
  snacks.appendChild(snacksimg);
  snacks.appendChild(snacksh4);
  snacks.appendChild(snacksp);

  const grill = document.createElement('div');
  grill.className = 'grill';
  const grillimg = new Image(300, 200);
  grillimg.setAttribute('src', './resta.jpg');
  grillimg.className = 'img';
  const grillh4 = document.createElement('h4');
  grillh4.innerHTML = 'gochew grill';
  const grillp = document.createElement('p');
  grillp.innerHTML = 'this is an annoying project incant wait to finshf it i hope it enfs any t';
  grillp.className = 'snackp';
  grill.appendChild(grillimg);
  grill.appendChild(grillh4);
  grill.appendChild(grillp);

  const image1 = new Image(300, 200);
  image1.setAttribute('src', './forks.jpg');
  image1.className = 'img';
  h3div.innerHTML = 'vegetables are good for you eeat them';
  h1div.innerHTML = 'food tastes better ehrn you eat with youur family';
  // end of show case

  const buttonlink = document.createElement('button');
  const buttonp = document.createElement('p');
  buttonp.innerHTML = 'show more';
  buttonlink.className = 'btn';
  buttonlink.appendChild(buttonp);

  thai.appendChild(image1);
  thai.appendChild(h4div);
  thai.appendChild(thaip);
  category.appendChild(thai);
  category.appendChild(snacks);
  category.appendChild(grill);
  showdiv.appendChild(h1div);
  showdiv.appendChild(h3div);
  showdiv.appendChild(category);
  showcase.appendChild(showdiv);

  div.append(showcase);
  div.append(buttonlink);
}


function renderMainTwo() {
  const menu = document.querySelector('#all');
  const div = document.createElement('div');
  div.className = 'foodclass hide-tab';
  tabsagain(div);
  menu.appendChild(div);
  document.body.appendChild(menu);
}

export default renderMainTwo;