
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-18',
    headers: {
      authorization: '5f0ed6d3-adea-4aff-9ea5-e9c5ff15bcf5',
      'Content-Type': 'application/json'
    }
}
  
//функция вывода ответа от серыера и его проверки
function checkAnswer (data) {
    if (data.ok) {
        return data.json();
    } else {
        // если ошибка, отклоняем промис
        return(`Ошибка: ${data.status}`); 
    }
}

//получаем карточки
function getAllCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => checkAnswer(res))
}



//получаем даные пользователя
function getUserData() {

    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => checkAnswer(res))
}




//получаем карточки и id вместе
const getCardsAndMyId = Promise.all([getUserData(), getAllCards()])


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
    .then(res => checkAnswer(res))
}

//добавляем карточку
function addNewCard (newname, newlink) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newname,
            link: newlink
            })
        }) 
        .then(res => checkAnswer(res))
    }



//удаляем карточку
function deleteCard (cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => checkAnswer(res))
}

//добавляем лайк карточке
function addLike (cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(res => checkAnswer(res))
}

//удаляем лайк карточке
function deleteLike (cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers 
    })
    .then(res => checkAnswer(res))
}

//изменение аватара
function editAvatar (newAvatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        avatar: newAvatar
        })
    })
    .then(res => checkAnswer(res))
}



export { editUserData, addNewCard, deleteCard, addLike, deleteLike, editAvatar, getCardsAndMyId} 