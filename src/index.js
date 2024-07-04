import  './pages/index.css'; // добавьте импорт главного файла стилей 
import {initialCards} from './scripts/cards.js'//добавляем файл с карточками, так как этот файл - точка входа
import {openWindow} from './scripts/modal.js'//функции открытия окон
//Элементы со страницы


const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');

const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const addCloseButton = addPopup.querySelector('.popup__close');
const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopup.querySelector('.popup__close');


export {}


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
