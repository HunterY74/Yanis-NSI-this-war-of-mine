function createParagraph() {
  let para = document.createElement('réponse');
  para.textContent = 'Vous avez cliqué. Le lien en dessous vous mène à la suite du site';
  document.body.appendChild(para);
}

let button = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  button[i].addEventListener('click', createParagraph);
}

