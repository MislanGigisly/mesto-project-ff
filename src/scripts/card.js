
import {cardTemplate, openWindow, imagePopup} from "../index.js";

// @todo: Функция создания карточки
function addCards (card , removeCard) {
    // клонируем содержимое тега template
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    // создаём узел кнопки удадения
    const deleteButton = cardElement.querySelector('.card__delete-button');
    // наполняем содержимым
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.link;
    cardElement.querySelector('.card__title').textContent = card.name;
    deleteButton.addEventListener('click', removeCard);
    const cardButton = cardElement.querySelector('.card__image');
    cardButton.addEventListener('click', () =>{openWindow(imagePopup)}); //обработчик открытия попапа карточки
    return cardElement;  
};

export {addCards}



