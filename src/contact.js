function last(div) {
  const background = document.createElement('div');
  background.className = 'contactform';
  const lastlinks = document.createElement('div');
  lastlinks.className = 'atlast';
  const last1 = document.createElement('p');
  last1.innerHTML = 'HOME';
  last1.className = 'tohome lastlink';
  const last2 = document.createElement('p');
  last2.innerHTML = 'HOME';
  const last3 = document.createElement('p');
  last3.innerHTML = 'HOME';

  const last4 = document.createElement('p');
  last4.innerHTML = 'HOME';

  lastlinks.appendChild(last1);
  lastlinks.appendChild(last2);
  lastlinks.appendChild(last3);
  lastlinks.appendChild(last4);

  background.appendChild(lastlinks);
  div.appendChild(background);
}


function renderMainFour() {
  const menu = document.querySelector('#all');
  const div = document.createElement('div');
  div.className = 'contact hide-tab';
  last(div);
  menu.appendChild(div);
  document.body.appendChild(menu);
}

export default renderMainFour;