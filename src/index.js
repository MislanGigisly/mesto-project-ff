import  './pages/index.css'; // добавьте импорт главного файла стилей 
import {initialCards} from './scripts/cards.js'//добавляем файл с карточками, так как этот файл - точка входа
import {openWindow, closePopup} from './scripts/modal.js'//функции открытия окон
import {addCards} from './scripts/card.js'//функции карточек

//попапы
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

//Элементы форм
const titleOfCard = document.querySelector('.popup__input_type_card-name');
const ancorOfCard = document.querySelector('.popup__input_type_url');

//Элементы карточки
const imageInCard = document.querySelector('.popup__image');
const titleInCard = document.querySelector('.popup__caption');

// Выберите элементы, куда должны быть вставлены значения полей
const username = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__description');
// Находим форму профиля в DOM
const formEditElement = document.forms['edit-profile']
// Находим поля формы в DOM
const nameInput = formEditElement.elements.name
const jobInput = formEditElement.elements.description
//Подставляем имя и профессию со страницы в popup

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

//создаём узлы формы и инпутов
const formAddCards = document.forms[1];

// создаём узел места расположения карточек
const place = document.querySelector('.places__list');



//функция лайка карточки и разлайка
function giveLike(evt) {
   if (evt.target.classList.contains('card__like-button_is-active')){
    evt.target.classList.remove('card__like-button_is-active')
   }else {
    evt.target.classList.add('card__like-button_is-active')
   }
}

//Вывести карточки на страницу
initialCards.forEach(function(card){
    const item = addCards (card, giveLike, showCard);
    place.append(item); 
});

//Слушатель для добавления новой карточки
formAddCards.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newCard = {name: titleOfCard.value, link: ancorOfCard.value}
    const item = addCards (newCard, giveLike, showCard);
    place.prepend(item);
    closePopup(addPopup);
    titleOfCard.value = "";
    ancorOfCard.value = "";
}); 

//обработчики кнопок на главной странице
//профиль
editButton.addEventListener('click', () =>{
    openWindow(editPopup);
});

//добавление карточки
addButton.addEventListener('click', () =>{
    openWindow(addPopup);
});

//просмотр карточки
function showCard (card){
    imageInCard.src = card.link
    imageInCard.alt = card.link
    titleInCard.textContent = card.name
    openWindow(imagePopup);
}

//профиль
nameInput.setAttribute('value', username.textContent)
jobInput.setAttribute('value', profession.textContent)
// Обработчик «отправки» формы для профиля
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    const valueName = nameInput.value;
    const valueJob = jobInput.value;
    // Вставьте новые значения с помощью textContent
    username.textContent = valueName;
    profession.textContent = valueJob;
    closePopup(editPopup)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleEditFormSubmit); 

export {cardTemplate}
