!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);!function(){const e=document.createElement("h1");e.innerHTML="<h1>Korean Restaurant</h1>";const t=document.createElement("p");t.innerHTML="<p>Welcome to the best Korean restaurant in the world</p>";const n=document.querySelector("#content");n.appendChild(e),n.appendChild(t);const o=document.createElement("ul");o.innerHTML="<button id='home-btn' >Home</button><button id='menu-btn' >Menu</button><button id='contact-btn'>Contact</button>",n.appendChild(o);const c=document.createElement("div");c.classList.add("tab-content"),c.innerHTML="<h3>This is the home page</h3>   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fugit laudantium, impedit enim ipsa odio explicabo officiis eius laborum voluptas.</p>",n.appendChild(c)}();const o=document.querySelector("#contact-btn"),c=document.querySelector("#menu-btn"),i=document.querySelector("#home-btn");i.classList.add("active"),c.classList.remove("active"),o.classList.remove("active"),o.addEventListener("click",()=>{const e=document.querySelector("#contact-btn"),t=document.querySelector("#menu-btn");document.querySelector("#home-btn").classList.remove("active"),t.classList.remove("active"),e.classList.add("active");const n=document.querySelector(".tab-content");n.innerHTML="",n.innerHTML="<h3>Contact us:</h3>   <p>Phone: 123 - 456 - 789</p> <p>Email: korean-restaurant@gmail.com</p>",content.appendChild(n)}),c.addEventListener("click",()=>{const e=document.querySelector("#contact-btn"),t=document.querySelector("#menu-btn");document.querySelector("#home-btn").classList.remove("active"),t.classList.add("active"),e.classList.remove("active");const n=document.querySelector(".tab-content");n.innerHTML="",n.innerHTML="<h3>Menu:</h3>   <p>Bibimbap.......6€</p> <p>Bulgogi.........7€</p>",content.appendChild(n)}),i.addEventListener("click",(function(){i.classList.add("active"),c.classList.remove("active"),o.classList.remove("active");const e=document.querySelector(".tab-content");e.innerHTML="",e.innerHTML="<h3>This is the home page</h3>   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fugit laudantium, impedit enim ipsa odio explicabo officiis eius laborum voluptas.</p>",content.appendChild(e)}))}]);