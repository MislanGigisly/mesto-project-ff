
import {cardTemplate} from "../index.js";

//Функция удаления карточки
function removeCard(evt) {
    evt.target.closest('.places__item').remove();
};

// @todo: Функция создания карточки
function addCards (card, showCard) {
    // клонируем содержимое тега template
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    // создаём узел кнопки удадения
    const deleteButton = cardElement.querySelector('.card__delete-button');
    //создаём узел кнопки like
    const likeButton = cardElement.querySelector('.card__like-button')
    //находим элементы карточки
    const cardButtonImg = cardElement.querySelector('.card__image');
    const cardButtonTitle = cardElement.querySelector('.card__title');
    // наполняем содержимым
    cardButtonImg.src = card.link;
    cardButtonImg.alt = card.link;
    cardButtonTitle.textContent = card.name;
    //добавляем обрабочик кнопки удаления
    deleteButton.addEventListener('click', removeCard);
    //добавляем обрабочик кнопки like
    likeButton.addEventListener('click', giveLike);
    //обработчик открытия попапа карточки
    cardButtonImg.addEventListener('click', () =>showCard(card));
    return cardElement;  
};

//функция лайка карточки и разлайка
function giveLike(evt) {
    if (evt.target.classList.contains('card__like-button_is-active')){
     evt.target.classList.remove('card__like-button_is-active')
    }else {
     evt.target.classList.add('card__like-button_is-active')
    }
 }


export {addCards}



