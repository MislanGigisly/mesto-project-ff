
import {} from "./api.js";


// ищем template   
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function addCards (card, showCard, id, removeCard, giveLike) {
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
    if (card.owner._id !== id) {
        deleteButton.remove();
    }

    deleteButton.addEventListener('click',  (evt) => {removeCard(evt, card._id)});
    //получаем количество лайков с сервера
    const likeCounter = cardElement.querySelector('.card__like-button-counter');
    if (card.likes == []) {
        likeCounter.textContent = 0
    }
    else {
        likeCounter.textContent = card.likes.length
    }

    //Отмечаем уже лйкнутую карточку
    if (card.likes.some(like => like._id == card.owner._id)) {
        likeButton.classList.add('card__like-button_is-active')
    }

    //добавляем обрабочик кнопки like
    likeButton.addEventListener('click', (evt) =>giveLike(evt, card, likeCounter));

    //обработчик открытия попапа карточки
    cardButtonImg.addEventListener('click', () =>showCard(card));
    return cardElement;  
};



export {addCards}



