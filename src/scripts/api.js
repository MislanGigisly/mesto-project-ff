
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-18',
    headers: {
      authorization: '5f0ed6d3-adea-4aff-9ea5-e9c5ff15bcf5',
      'Content-Type': 'application/json'
    }
}
  
//получаем карточки
function getAllCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }

    // если ошибка, отклоняем промис
    return(`Ошибка: ${res.status}`);
    })
}



//получаем даные пользователя
function getUserData() {

    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    })
    .then(res => {
    if (res.ok) {
        return res.json();
    }})
    
    
    // если ошибка, отклоняем промис
    return(`Ошибка: ${res.status}`)
};




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

    .then(res => {
    if (res.ok) {
        return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
    });
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
    }).then(res => {
        if (res.ok) {
            return (res.json());
        }
    
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
        });

}



//удаляем карточку
function deleteCard (cardId) {
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
function addLike (cardId) {
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
function deleteLike (cardId) {
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
function editAvatar (newAvatar) {
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



export { editUserData, addNewCard, deleteCard, addLike, deleteLike, editAvatar, getCardsAndMyId} 