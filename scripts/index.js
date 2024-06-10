// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

// создаём узел места расположения карточек
const place = document.querySelector('.places__list');
// создаём узел с кнопкой удадения


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
    return cardElement;
};

// @todo: Функция удаления карточки

function removeCard(evt) {
    evt.target.closest('.places__item').remove();
};

// @todo: Вывести карточки на страницу

initialCards.forEach(function(card){
    const item = addCards (card, removeCard);
    place.append(item); 
});

