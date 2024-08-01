(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),e.addEventListener("click",n),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function n(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t(e.target.closest(".popup"))}function r(e){"Escape"===e.key&&(t(document.querySelector(".popup_is-opened")),document.removeEventListener("keydown",r))}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-18",headers:{authorization:"5f0ed6d3-adea-4aff-9ea5-e9c5ff15bcf5","Content-Type":"application/json"}};function c(e){return e.ok?e.json():"Ошибка: ".concat(e.status)}var a=Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{method:"GET",headers:o.headers}).then((function(e){return c(e)})),fetch("".concat(o.baseUrl,"/cards"),{method:"GET",headers:o.headers}).then((function(e){return c(e)}))]),i=document.querySelector("#card-template").content;function u(e,t,n,r,o){var c=i.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__delete-button"),u=c.querySelector(".card__like-button"),l=c.querySelector(".card__image"),s=c.querySelector(".card__title");l.src=e.link,l.alt=e.link,s.textContent=e.name,e.owner._id!==n&&a.remove(),a.addEventListener("click",(function(t){r(t,e._id)}));var d=c.querySelector(".card__like-button-counter");return e.likes==[]?d.textContent=0:d.textContent=e.likes.length,e.likes.some((function(t){return t._id==e.owner._id}))&&u.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(t){return o(t,e,d)})),l.addEventListener("click",(function(){return t(e)})),c}var l=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){l(e,o,t),d(n,r,t)}))}))};function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),m=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_image"),h=document.querySelector(".popup_type_edit-photo"),b=document.querySelector(".profile__image"),S=document.forms["new-place"],g=document.forms["new-photo"],k=document.forms["edit-profile"],q=document.querySelector(".popup__input_type_card-name"),C=document.querySelector(".popup__input_type_url"),L=g.querySelector(".popup__input_type_photo"),E=g.querySelector(".popup__button"),x=S.querySelector(".popup__button"),A=k.querySelector(".popup__button"),w=document.querySelector(".popup__image"),U=document.querySelector(".popup__caption"),T=document.querySelector(".profile__title"),O=document.querySelector(".profile__description"),j=k.elements.name,B=k.elements.description,D=document.querySelector(".places__list"),P=null;function M(t){w.src=t.link,w.alt=t.link,U.textContent=t.name,e(y)}function N(e,t){(function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){return c(e)}))})(t).then((function(){return e.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function I(e,t,n){var r;e.target.classList.contains("card__like-button_is-active")?(r=t._id,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then((function(e){return c(e)}))).then((function(t){e.target.classList.remove("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){return c(e)}))}(t._id).then((function(t){n.textContent=t.likes.length,e.target.classList.add("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function J(e,t){t.textContent=e?"Сохранение...":"Сохранить"}a.then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];P=o._id,c.forEach((function(e){var t=u(e,M,o._id,N,I);D.append(t)})),b.setAttribute("style","background-image: url(".concat(o.avatar,"}")),T.textContent=o.name,O.textContent=o.about,j.value=o.name,B.value=o.about})).catch((function(e){return console.log(e)})),S.addEventListener("submit",(function(e){J(!0,S.querySelector(".popup__button")),e.preventDefault();var n,r,a={name:q.value,link:C.value};(n=a.name,r=a.link,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return c(e)}))).then((function(e){console.log(e);var n=u(e,M,P,N,I);D.prepend(n),t(v),S.reset(),d(Array.from(S),x,G)})).catch((function(e){console.log(e)})).finally((function(){J(!1,S.querySelector(".popup__button"))}))})),f.addEventListener("click",(function(){j.value=T.textContent,l(k,j,G),B.value=O.textContent,l(k,B,G),A.classList.remove(G.inactiveButtonClass),A.disabled=!1,e(_)})),m.addEventListener("click",(function(){e(v)})),b.addEventListener("click",(function(){e(h)})),k.addEventListener("submit",(function(e){e.preventDefault(),J(!0,A);var n,r,a=j.value,i=B.value;(n=a,r=i,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return c(e)}))).then((function(){t(_),T.textContent=a,O.textContent=i})).catch((function(e){console.log(e)})).finally((function(){J(!1,A)}))})),g.addEventListener("submit",(function(e){var n;e.preventDefault(),J(!0,E),(n=L.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:n})}).then((function(e){return c(e)}))).then((function(e){b.setAttribute("style","background-image: url(".concat(e.avatar)),t(h),g.reset(),d(Array.from(g),E,G)})).catch((function(e){return console.log(e)})).finally((function(){J(!1,E)}))}));var G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};s(k,G),s(S,G),s(g,G)})();