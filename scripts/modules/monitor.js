/*=============== SHOW MODAL ===============*/
export const showGif = (openButton, gifContent) =>{
  const openBtn = document.getElementById(openButton),
  gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0],
  mouse = document.getElementById('click');
  
  
  if(openBtn && gifContainer){
    openBtn.addEventListener('click', ()=>{
      selectContainer.classList.add('hide')
      gameLogo.classList.add('hide')
      gifContainer.classList.add('show-gif')
      mouse.classList.add('hide')
    })
  }
}
showGif('open-gif','gif-container');
showGif('open-gif2','gif-container2');

/*=============== CLOSE MODAL ===============*/
export const closeGif = document.getElementsByClassName('close-gif');

export function closeGifContainer(gifContent){
  const gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0];
  selectContainer.classList.remove('hide');
  gameLogo.classList.remove('hide');
  gifContainer.classList.remove('show-gif');
}

closeGif[0].addEventListener('click', () => closeGifContainer('gif-container2'));
closeGif[1].addEventListener('click', () => closeGifContainer('gif-container'));
