(()=>{var e={197:()=>{}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(197);var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list");function o(e){e.target.closest(".places__item").remove()}initialCards.forEach((function(r){var a=function(t,r){var o=e.querySelector(".places__item").cloneNode(!0),a=o.querySelector(".card__delete-button");return o.querySelector(".card__image").src=t.link,o.querySelector(".card__image").alt=t.link,o.querySelector(".card__title").textContent=t.name,a.addEventListener("click",r),o}(r,o);t.append(a)}))})()})();