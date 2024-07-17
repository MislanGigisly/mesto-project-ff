
import {cardTemplate, openWindow, imagePopup} from "../index.js";

// @todo: Функция создания карточки
function addCards (card, removeCard, giveLike, showCard) {
    // клонируем содержимое тега template
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    // создаём узел кнопки удадения
    const deleteButton = cardElement.querySelector('.card__delete-button');
    //создаём узел кнопки like
    const likeButton = cardElement.querySelector('.card__like-button')
    // наполняем содержимым
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.link;
    cardElement.querySelector('.card__title').textContent = card.name;
    //добавляем обрабочик кнопки удаления
    deleteButton.addEventListener('click', removeCard);
    //добавляем обрабочик кнопки like
    likeButton.addEventListener('click', giveLike);

    const cardButton = cardElement.querySelector('.card__image');
    //обработчик открытия попапа карточки
    cardButton.addEventListener('click', () =>showCard(card));
    return cardElement;  
};

export {addCards}



