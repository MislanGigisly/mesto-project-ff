import {} from "../index.js";

//открытие модальных окон
function openWindow (popup) {
    popup.classList.add('popup_is-opened');
    console.log ('нажатие на кнопу popup');
    popup.addEventListener('click', closeOverlay);
    
};
//закрытие модальных окон
function closePopup (popup){
    popup.classList.remove('popup_is-opened');
    console.log ('нажатие на кнопу close');
}

// функция закрытия попапа по клику на Overlay или кнопке X 
function closeOverlay (evt) {
    if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))) {
      closePopup(evt.target.closest('.popup'));  
    }
  }
export{openWindow};



