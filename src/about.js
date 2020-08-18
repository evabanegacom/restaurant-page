function about(div) {
  const newdiv = document.createElement('div');
  newdiv.className = 'new hide-tab';
  newdiv.id = 'about';
  const anotherdiv = document.createElement('div');
  anotherdiv.className = 'anotherdiv';
  const divpar1 = document.createElement('div');
  const divitem1 = document.createElement('p');
  divitem1.innerHTML = 'HOME';
  divitem1.className = 'HOMEabout';
  const divpar2 = document.createElement('div');
  const divitem2 = document.createElement('p');
  divitem2.innerHTML = 'casino';
  divitem2.className = 'casinoabout';
  const divpar3 = document.createElement('div');
  const divitem3 = document.createElement('p');
  divitem3.innerHTML = 'drinks';
  divitem3.className = 'aboutdrinks';
  const divpar4 = document.createElement('div');
  const divitem4 = document.createElement('p');
  divitem4.innerHTML = 'contact';
  divitem4.className = 'aboutfood';

  const reservationdiv = document.createElement('div');
  reservationdiv.className = 'reserve';
  const paragraph = document.createElement('p');
  const babydiv = document.createElement('div');
  babydiv.className = 'baby';
  const babydivpara = document.createElement('p');
  babydivpara.innerHTML = 'MAKE YOUR RESERVATION FOR YOUR DESIRED CATEGORY AND ORDER FILL IN';
  babydiv.appendChild(babydivpara);
  paragraph.innerHTML = 'NEED A RESERVATION?';
  const buttons = document.createElement('button');
  buttons.innerHTML = 'contact us today';
  buttons.className = 'butt';
  const formdiv = document.createElement('div');
  const form = document.createElement('form');
  form.className = 'forms';
  const input1 = document.createElement('input');
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'name');
  label1.className = 'colors';
  label1.innerHTML = 'FULLNAME';
  const input2 = document.createElement('input');
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'name');
  label2.className = 'colors';
  label2.innerHTML = 'LOCATION';
  const input3 = document.createElement('input');
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'name');
  label3.className = 'colors';
  label3.innerHTML = 'PAYMENTS';

  const input4 = document.createElement('input');
  const label4 = document.createElement('label');
  label4.setAttribute('for', 'name');
  label4.className = 'colors';
  label4.innerHTML = 'DESCRIBE ORDER';
  input4.className = 'desc';

  const input5 = document.createElement('input');
  const label5 = document.createElement('label');
  label5.setAttribute('for', 'name');
  label5.className = 'colors';
  label5.innerHTML = 'NUMBER OF TABLES';
  input5.className = 'desc';

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(label4);
  form.appendChild(input4);
  form.appendChild(label5);
  form.appendChild(input5);
  form.appendChild(buttons);

  formdiv.appendChild(form);

  reservationdiv.appendChild(paragraph);
  reservationdiv.appendChild(babydiv);
  reservationdiv.appendChild(formdiv);

  divpar1.appendChild(divitem1);
  divpar2.appendChild(divitem2);
  divpar3.appendChild(divitem3);
  divpar4.appendChild(divitem4);
  anotherdiv.appendChild(divpar1);
  anotherdiv.appendChild(divpar2);
  anotherdiv.appendChild(divpar3);
  anotherdiv.appendChild(divpar4);
  newdiv.append(anotherdiv);
  newdiv.appendChild(reservationdiv);

  div.appendChild(newdiv);
}


function renderMainOne() {
  const menu = document.querySelector('#all');
  const div = document.createElement('div');
  div.className = 'aboutpage';
  about(div);
  menu.appendChild(div);
  document.body.appendChild(menu);
}

export default renderMainOne;