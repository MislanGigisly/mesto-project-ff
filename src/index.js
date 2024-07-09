import  './pages/index.css'; // добавьте импорт главного файла стилей 
import {initialCards} from './scripts/cards.js'//добавляем файл с карточками, так как этот файл - точка входа
import {openWindow, closePopup} from './scripts/modal.js'//функции открытия окон
//Элементы со страницы

//попапы
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');




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
    const cardButton = cardElement.querySelector('.card__image');
    cardButton.addEventListener('click', () =>{openWindow(imagePopup)}); //обработчик открытия попапа карточки
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

//обработчики кнопок на главной странице

editButton.addEventListener('click', () =>{
    openWindow(editPopup);
});
addButton.addEventListener('click', () =>{
    openWindow(addPopup);
});




//профиль
const username = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');
// Находим форму в DOM
const formElement = document.forms[0]
// Находим поля формы в DOM
const nameInput = formElement.elements.name
const jobInput = formElement.elements.description
//Подставляем имя и профессию со страницы в popup
nameInput.setAttribute('value', username.textContent)
jobInput.setAttribute('value', profession.textContent)
// Обработчик «отправки» формы
function handleFormSubmit(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    const valueName = nameInput.value;
    const valueJob = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    username.textContent = valueName;
    profession.textContent = valueJob;
    closePopup(editPopup)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 