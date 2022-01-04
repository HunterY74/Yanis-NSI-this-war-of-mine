function createtexte() {
  let réponse = document.createElement('réponse');
  réponse.textContent = 'Vous avez cliqué. Le lien en dessous vous mène à la suite du site';
  document.body.appendChild(para);
}

var button = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  button[i].addEventListener('click', createtexte);
}

