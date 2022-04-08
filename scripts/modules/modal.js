/*=============== SHOW MODAL ===============*/
export const showModal = (openButton, modalContent) =>{
  const openBtn = document.getElementById(openButton),
  modalContainer = document.getElementById(modalContent)
  
  if(openBtn && modalContainer){
      openBtn.addEventListener('click', ()=>{
          modalContainer.classList.add('show-modal')
      })
  }
}
showModal('open-modal','modal-container');
showModal('open-modal2','modal-container2');
showModal('open-modal3','modal-container3');

/*=============== CLOSE MODAL ===============*/
export const closeBtn = document.querySelectorAll('.close-modal')
export const closeBtn2 = document.querySelectorAll('.close-modal2')
export const closeBtn3 = document.querySelectorAll('.close-modal3')

export function closeModal(){
  const modalContainer = document.getElementById('modal-container')
  modalContainer.classList.remove('show-modal')
}
export function closeModal2(){
  const modalContainer = document.getElementById('modal-container2')
  modalContainer.classList.remove('show-modal')
}
export function closeModal3(){
  const modalContainer = document.getElementById('modal-container3')
  modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
closeBtn.forEach(c => c.addEventListener('click', closeModal2))
closeBtn.forEach(c => c.addEventListener('click', closeModal3))