import {} from "../index.js";

//открытие модальных окон
function openWindow (popup) {
    popup.classList.add('popup_is-opened');
    console.log ('нажатие на кнопу popup');
    popup.addEventListener('click', closeOverlay);
    addEventListener('keydown', closeEscape);
    
};
//закрытие модальных окон
function closePopup (popup){
    popup.classList.remove('popup_is-opened');
}

// функция закрытия попапа по клику на Overlay или кнопке X 
function closeOverlay (evt) {
    if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))) {
      closePopup(evt.target.closest('.popup'));  
      console.log('нажатие на оверлей или на кнопку закрытия окна')
      removeEventListener('keydown', closeEscape);
    }
}

function closeEscape (evt) {
  if (evt.key === 'Escape') {
    const OpenedPopup = document.querySelector('.popup_is-opened')
    closePopup(OpenedPopup)
    console.log('Нажатие на кнопку: ' + evt.key)
    removeEventListener('keydown', closeEscape);
    }
}
export{openWindow, closePopup};



