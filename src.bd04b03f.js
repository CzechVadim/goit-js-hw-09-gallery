parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"],"./../images/arrow-right.svg":[["arrow-right.3466f657.svg","C0G4"],"C0G4"],"./../images/arrow-left.svg":[["arrow-left.5319aa27.svg","AO6g"],"AO6g"]}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./sass/main.scss");var e=t(require("./index.js"));function t(e){return e&&e.__esModule?e:{default:e}}var o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=o;const i=document.querySelector(".js-gallery"),n=document.querySelector(".js-lightbox"),a=document.querySelector(".lightbox__image"),r=document.querySelector(".lightbox__image"),c=document.querySelector(".lightbox__overlay"),p=document.querySelector(".lightbox__button"),l=document.querySelector(".scroll-right"),s=document.querySelector(".scroll-left");function d(e){return e.map(({preview:e,original:t,description:o})=>`<li class="gallery__item">\n                    <a class="gallery__link"\n                     href=${t}>\n                         <img class="gallery__image"\n                          src=${e}\n                          data-source=${t}\n                          alt=${o} />\n                    </a>\n                    </li>`).join("")}function g(e){e.preventDefault(),"IMG"===e.target.nodeName&&(n.classList.add("is-open"),a.src=e.target.dataset.source,a.alt=e.target.alt,c.addEventListener("click",h),document.addEventListener("keydown",h),p.addEventListener("click",h),window.addEventListener("keydown",m),l.addEventListener("click",m),s.addEventListener("click",m),r.addEventListener("click",m))}function h(e){n.classList.remove("is-open"),a.src="",a.alt="",c.removeEventListener("click",modalCloseByOverlayClick),document.removeEventListener("keydown",u),p.removeEventListener("click",h),window.removeEventListener("keydown",m),l.removeEventListener("click",m),s.removeEventListener("click",m),r.removeEventListener("click",m)}function u(e){"Escape"===e.code&&h(e)}function m(t){let o=e.default.findIndex(e=>e.original===a.src);"ArrowLeft"!==t.code&&"ArrowDown"!==t.code&&s!==t.target||(0===o&&(o+=e.default.length),o-=1),"ArrowRight"!==t.code&&"ArrowUp"!==t.code&&l!==t.target&&r!==t.target||(o===e.default.length-1&&(o-=e.default.length),o+=1),a.src=e.default[o].original,a.alt=e.default[o].description}i.addEventListener("click",g),i.insertAdjacentHTML("beforeend",d(e.default));
},{"./sass/main.scss":"clu1","./index.js":"Focm"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.bd04b03f.js.map