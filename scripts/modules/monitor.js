/*=============== SHOW MODAL ===============*/
export const showGif = (openButton, gifContent) =>{
  const openBtn = document.getElementById(openButton),
  gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0];
  
  
  if(openBtn && gifContainer){
    openBtn.addEventListener('click', ()=>{
      selectContainer.classList.add('hide')
      gameLogo.classList.add('hide')
      gifContainer.classList.add('show-gif')
      
    })
  }
}
showGif('open-gif','gif-container');
// showModal('open-modal2','modal-container2');

/*=============== CLOSE MODAL ===============*/
export const closeGif = document.getElementsByClassName('close-gif')[0]
// export const closeBtn2 = document.querySelectorAll('.close-modal2')

export function closeGifContainer(gifContent){
  console.log("TESTE")
  const gifContainer = document.getElementById(gifContent),
  selectContainer = document.getElementsByClassName('container-select')[0],
  gameLogo = document.getElementsByClassName('game-logo')[0];
  selectContainer.classList.remove('hide');
  gameLogo.classList.remove('hide');
  gifContainer.classList.remove('show-gif');
}
// export function closeModal2(){
//   const modalContainer = document.getElementById('modal-container2')
//   modalContainer.classList.remove('show-modal')
// }
console.log(closeGif)
closeGif.addEventListener('click', () => closeGifContainer('gif-container'));
// closeBtn.forEach(c => c.addEventListener('click', closeModal2))