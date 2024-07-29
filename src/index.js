import  './pages/index.css'; // добавьте импорт главного файла стилей 
import {initialCards} from './scripts/cards.js'//добавляем файл с карточками, так как этот файл - точка входа
import {openWindow, closePopup} from './scripts/modal.js'//функции открытия окон
import {addCards} from './scripts/card.js'//функции карточек
import {setEventListeners} from './scripts/validation.js'//валидация
import {editUserData, addNewCard, editAvatar} from './scripts/api.js'//api

//попапы
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const photoPopup = document.querySelector('.popup_type_edit-photo');
const profilePhoto = document.querySelector('.profile__image');

//Элементы форм
const titleOfCard = document.querySelector('.popup__input_type_card-name');
const ancorOfCard = document.querySelector('.popup__input_type_url');
const formProfilePhoto = document.forms['new-photo'];
const ancorOfPhoto = formProfilePhoto.querySelector('.popup__input_type_photo');

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
const formAddCards = document.forms['new-place'];

// создаём узел места расположения карточек
const place = document.querySelector('.places__list');

//Слушатель для добавления новой карточки
formAddCards.addEventListener('submit', (evt) => {
    loading(true, formAddCards.querySelector('.popup__button'));
    evt.preventDefault();
    const newCard = {name: titleOfCard.value, link: ancorOfCard.value}
    addNewCard(newCard.name, newCard.link)
    .then((card) => {
        console.log(card);
        const item = addCards (card, showCard);
        place.prepend(item);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        loading(false, formAddCards.querySelector('.popup__button'));
        closePopup(addPopup);
        titleOfCard.value = "";
        ancorOfCard.value = "";
    })
}); 

//обработчики кнопок на главной странице
//профиль
editButton.addEventListener('click', () =>{
    openWindow(editPopup);
    setEventListeners(formEditElement)
});

//добавление карточки
addButton.addEventListener('click', () =>{
    openWindow(addPopup);
    setEventListeners(formAddCards);
});

//обновление фото профиля
profilePhoto.addEventListener('click', () =>{
    openWindow(photoPopup);
    setEventListeners(formProfilePhoto);
});

//просмотр карточки
function showCard (card){
    imageInCard.src = card.link
    imageInCard.alt = card.link
    titleInCard.textContent = card.name
    openWindow(imagePopup);
}



// Обработчик «отправки» формы для профиля
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    //меняем кнопку на загрузку
    loading(true, formEditElement.querySelector('.popup__button'));
    // Получите значение полей jobInput и nameInput из свойства value
    const valueName = nameInput.value;
    const valueJob = jobInput.value;
   
    //отправляем данные на сервер
    editUserData(valueName, valueJob)
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        //меняем кнопку обратно
        loading(false, formEditElement.querySelector('.popup__button'));
         //Закрываем попап
        closePopup(editPopup)
    })
   

     // Вставьте новые значения с помощью textContent
    username.textContent = valueName;
    profession.textContent = valueJob;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleEditFormSubmit); 

// Обработчик «отправки» формы для профиля
function editPhotoFormSubmit(evt) {
    evt.preventDefault();
    loading(true, formProfilePhoto.querySelector('.popup__button'));
    //отправляем фото на сервер
    editAvatar(ancorOfPhoto.value)
    .then ((data) => {
     //подставляем значения input в стили div с фото профиля
    profilePhoto.setAttribute('style',`background-image: url(${data.avatar}`)})
    .catch((err) => console.log(err))
    .finally(() => {
        loading(false, formProfilePhoto.querySelector('.popup__button'))
        //Закрываем попап
        closePopup(photoPopup);
    })
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfilePhoto.addEventListener('submit', editPhotoFormSubmit); 

//функция изменияни состояния кнопки submit
function loading (isLoading, button) {
    if (isLoading) {
        button.textContent = 'Сохранение...'
    } else {
        button.textContent = 'Сохранить'
    }
}

//  Конфиг валидации 
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

export {cardTemplate, place, showCard, nameInput, jobInput, profilePhoto, username, profession, validationConfig}