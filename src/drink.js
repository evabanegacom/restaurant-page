function test(div) {
  const firstdiv = document.createElement('div');
  firstdiv.className = 'drinksection';
  const containerdiv = document.createElement('div');
  containerdiv.className = 'container1';
  const divheader = document.createElement('div');
  divheader.className = 'menudiv';
  const divheadertitle = document.createElement('h1');
  divheadertitle.innerHTML = 'MENU CARD';
  const divheaderpar = document.createElement('p');
  divheaderpar.innerHTML = 'lorem ipsum sit dolor amet en nome padre et filli espirito santo';
  divheaderpar.className = 'menuparagraph';
  const divmain = document.createElement('div');
  divmain.className = 'themain';
  const divmainchild = document.createElement('div');
  divmainchild.className = 'card';
  const divimage = new Image(100, 100);
  divimage.setAttribute('src', './resta.jpg');
  divimage.className = 'cardimage';
  const divcontent = document.createElement('div');
  divcontent.className = 'blogcontent';
  const divh3 = document.createElement('h3');
  divh3.innerHTML = 'yes its h3';
  const h3span = document.createElement('p');
  h3span.innerHTML = 'this tutorial is annoying';
  h3span.className = 'h3color';
  const pardiv = document.createElement('p');
  pardiv.innerHTML = 'hello';
  const parlink = document.createElement('p');
  parlink.className = 'btn1 href';
  parlink.innerHTML = 'linking';

  const secondchild = document.createElement('div');
  secondchild.className = 'card';
  const secondimage = new Image(100, 100);
  secondimage.setAttribute('src', './resta.jpg');
  secondimage.className = 'cardimage';
  const secondcontent = document.createElement('div');
  secondcontent.className = 'blogcontent';
  const secondh3 = document.createElement('h3');
  secondh3.innerHTML = 'yes its h3';
  const secondh3span = document.createElement('p');
  secondh3span.innerHTML = 'this tutorial is annoying';
  secondh3span.className = 'h3color';
  const secondpardiv = document.createElement('p');
  secondpardiv.innerHTML = 'hello';
  const secondparlink = document.createElement('p');
  secondparlink.className = 'btn2 href';
  secondparlink.innerHTML = 'linking';


  const thirdcontent = document.createElement('div');
  thirdcontent.className = 'blogcontent';
  const thirdh3 = document.createElement('h3');
  thirdh3.innerHTML = 'yes its h3';
  const thirdh3span = document.createElement('p');
  thirdh3span.innerHTML = 'this tutorial is annoying';
  thirdh3span.className = 'h3color';
  const thirdpardiv = document.createElement('p');
  thirdpardiv.innerHTML = 'hello';
  const thirdparlink = document.createElement('p');
  thirdparlink.className = 'btn1 href';
  thirdparlink.innerHTML = 'linking';


  const fourthcontent = document.createElement('div');
  fourthcontent.className = 'blogcontent';
  const fourthh3 = document.createElement('h3');
  fourthh3.innerHTML = 'yes its h3';
  const fourthh3span = document.createElement('p');
  fourthh3span.innerHTML = 'this tutorial is annoying';
  fourthh3span.className = 'h3color';
  const fourthpardiv = document.createElement('p');
  fourthpardiv.innerHTML = 'hello';
  const fourthparlink = document.createElement('p');
  fourthparlink.className = 'btn1 href';
  fourthparlink.innerHTML = 'linking';


  const thirdchild = document.createElement('div');
  thirdchild.className = 'card';
  const thirdimage = new Image(100, 100);
  thirdimage.setAttribute('src', './resta.jpg');
  thirdimage.className = 'cardimage';

  const fourthchild = document.createElement('div');
  fourthchild.className = 'card';
  const fourthimage = new Image(100, 100);
  fourthimage.setAttribute('src', './resta.jpg');
  fourthimage.className = 'cardimage';


  divcontent.appendChild(divh3);
  divcontent.appendChild(h3span);
  divcontent.appendChild(pardiv);
  divcontent.appendChild(parlink);

  secondcontent.appendChild(secondh3);
  secondcontent.appendChild(secondh3span);
  secondcontent.appendChild(secondpardiv);
  secondcontent.appendChild(secondparlink);

  thirdcontent.appendChild(thirdh3);
  thirdcontent.appendChild(thirdh3span);
  thirdcontent.appendChild(thirdpardiv);
  thirdcontent.appendChild(thirdparlink);

  fourthcontent.appendChild(fourthh3);
  fourthcontent.appendChild(fourthh3span);
  fourthcontent.appendChild(fourthpardiv);
  fourthcontent.appendChild(fourthparlink);


  divmainchild.appendChild(divimage);
  divmainchild.appendChild(divcontent);
  divheader.appendChild(divheadertitle);
  divheader.appendChild(divheaderpar);

  secondchild.appendChild(secondimage);
  secondchild.appendChild(secondcontent);


  thirdchild.appendChild(thirdimage);
  thirdchild.appendChild(thirdcontent);

  fourthchild.appendChild(fourthimage);
  fourthchild.appendChild(fourthcontent);


  divmain.appendChild(divmainchild);
  divmain.appendChild(secondchild);
  divmain.appendChild(thirdchild);
  divmain.appendChild(fourthchild);
  containerdiv.appendChild(divheader);
  containerdiv.appendChild(divmain);
  firstdiv.appendChild(containerdiv);
  div.appendChild(firstdiv);
}


function renderMainThree() {
  const menu = document.querySelector('#all');
  const div = document.createElement('div');
  div.className = 'drinkspage hide-tab';
  test(div);
  menu.appendChild(div);
  document.body.appendChild(menu);
}

export default renderMainThree;