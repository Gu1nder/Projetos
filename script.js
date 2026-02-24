function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light');
  
   //pegar a img  
  const img = document.querySelector('#profile img');

  //substituir a imagem

  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light-mode.png', 'alt="Foto de Mayk Brito sorrindo utilizando oculos, usando óculos e camisa preta e fundo azul"')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar-dark-mode.png')
  }


  //se tiver sem light mode, manter a imagem normal
  //substituir a imagem
}