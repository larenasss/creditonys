!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=4)}({4:function(e,t){document.addEventListener("DOMContentLoaded",(function(){for(var e=document.querySelectorAll(".loader"),t=document.querySelectorAll(".form__content"),n=document.querySelectorAll(".form__overlay"),r=document.querySelectorAll(".btn--bg-transparent"),o=function(o){r[o].addEventListener("click",(function(c){c.preventDefault(),r[o].classList.add("active");for(var i=function(r){e[r].classList.add("active"),setTimeout((function(){e[r].classList.remove("active"),t[r].classList.add("active"),n[r].classList.add("active")}),1e3)},u=0;u<e.length;u++)i(u)}))},c=0;c<r.length;c++)o(c);var i=document.querySelector(".credit__mailing-btn"),u=document.querySelector(".credit__mailing-form");i.addEventListener("click",(function(){i.classList.add("active"),u.classList.add("active")}))}))}});