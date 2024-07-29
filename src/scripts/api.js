import {addCards} from './card.js'
import {place, showCard,nameInput, jobInput, profilePhoto, username, profession} from '../index.js'
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-18',
    headers: {
      authorization: '5f0ed6d3-adea-4aff-9ea5-e9c5ff15bcf5',
      'Content-Type': 'application/json'
    }
}
  
//получаем карточки
const getAllCards = new Promise((resolve, reject) => {
    resolve(
     fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }

    // если ошибка, отклоняем промис
    reject(`Ошибка: ${res.status}`);
    }))
})



//получаем даные пользователя
const getUserData = new Promise((resolve, reject) => {
    resolve(
        fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }}))
    
    
    // если ошибка, отклоняем промис
    reject(`Ошибка: ${res.status}`);
    });

let userId = null;


//получаем карточки и id вместе
 const getCardsAndMyId = Promise.all([getUserData, getAllCards]) 
 .then(([getUserData,getAllCards])=>{

    userId = getUserData._id;

    getAllCards.forEach(function(card){
        const item = addCards (card, showCard);
        place.append(item); 
    })

    //вставляем данные с сервера при открытии попапа профиля
   
    nameInput.setAttribute('value', getUserData.name);
    jobInput.setAttribute('value', getUserData.about);

    //Размещаем фото профиля

    profilePhoto.setAttribute('style',`background-image: url(${getUserData.avatar}}`);

    //вставляем данные профиля с сервера при загрузке страницы

        username.textContent = getUserData.name;
        profession.textContent = getUserData.about;
  
})
.catch((err) => console.log(err));

//изменяем данные пользователя
function editUserData(newName, newProfession)  {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        name: newName,
        about: newProfession
        })
    })

    .then(res => {
    if (res.ok) {
        return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//добавляем карточку
const addNewCard = (newname, newlink)  => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
        name: newname,
        link: newlink
        })
    }).then(res => {
        if (res.ok) {
            return (res.json());
        }
    
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
        });

}



//удаляем карточку
const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }
 // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//добавляем лайк карточке
const addLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }
 // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//удаляем лайк карточке
const deleteLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers 
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }
 // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

//изменение аватара
const editAvatar = (newAvatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        avatar: newAvatar
        })
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }
 // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}



export { editUserData, addNewCard, deleteCard, addLike, deleteLike, editAvatar, userId} 