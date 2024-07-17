import  './pages/index.css'; // добавьте импорт главного файла стилей 
import {initialCards} from './scripts/cards.js'//добавляем файл с карточками, так как этот файл - точка входа
import {openWindow, closePopup} from './scripts/modal.js'//функции открытия окон
import {addCards} from './scripts/card.js'


//попапы
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');




// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

//создаём узлы формы и инпутов
const formAddCards = document.forms[1];

// создаём узел места расположения карточек
const place = document.querySelector('.places__list');

//Функция удаления карточки
function removeCard(evt) {
    evt.target.closest('.places__item').remove();
};

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
    const item = addCards (card, removeCard, giveLike, showCard);
    place.append(item); 
});

//Слушатель для добавления новой карточки
formAddCards.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const titleOfCard = document.querySelector('.popup__input_type_card-name');
    const ancorOfCard = document.querySelector('.popup__input_type_url');
    const newCard = {name: titleOfCard.value, link: ancorOfCard.value}
    const item = addCards (newCard, removeCard, giveLike);
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

function showCard (card){
    const imageInCard = document.querySelector('.popup__image');
    const titleInCard = document.querySelector('.popup__caption');
    imageInCard.src = card.link
    titleInCard.textContent = card.name
    openWindow(imagePopup);
}


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
// Обработчик «отправки» формы для профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    const valueName = nameInput.value;
    const valueJob = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    const username = document.querySelector('.profile__title');
    const profession = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    username.textContent = valueName;
    profession.textContent = valueJob;
    closePopup(editPopup)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 





export {cardTemplate, openWindow, imagePopup,}
