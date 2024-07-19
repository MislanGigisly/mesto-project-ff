
//открытие модальных окон
function openWindow (popup) {
    popup.classList.add('popup_is-opened');
    popup.addEventListener('click', closeOverlay);
    addEventListener('keydown',closeEscape);
}
    

//закрытие модальных окон
function closePopup (popup){
    popup.classList.remove('popup_is-opened');
    removeEventListener('keydown', closeEscape);
}

// функция закрытия попапа по клику на Overlay или кнопке X 
function closeOverlay (evt) {
    if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))) {
      closePopup(evt.target.closest('.popup'));
    }
}

// функция закрытия попапа по нажатию на Escape
function closeEscape (evt) {
  if (evt.key === 'Escape') {
    const OpenedPopup = document.querySelector('.popup_is-opened')
    closePopup(OpenedPopup)
    removeEventListener('keydown', closeEscape);
    }
}

export{openWindow, closePopup};



