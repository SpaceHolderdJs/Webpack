(()=>{var e={218:()=>{class e{constructor(e){$(document.body).append(`<div class = "card-wrapper">\n               <div class = "image" style = "background: url('./images/bg${Math.floor(4*Math.random())}.jpg'); background-position: 0% 0%;"></div>\n               <section>\n                 <h2>Weather in ${e.name}</h2>\n                 <p>t: ${Math.trunc(e.main.temp-273)}</p>\n                 <p>${e.weather[0].main}</p>\n                 <p>feels like: ${Math.trunc(e.main.feels_like-273)}</p>\n                 <p>humidity: ${e.main.humidity}</p>\n               </section>\n            <div/>`);const t=document.createElement("button");t.addEventListener("click",(()=>{$(".card-wrapper").fadeOut(1e3),setTimeout((()=>{document.body.removeChild(document.querySelector(".card-wrapper"))}),2e3)})),t.textContent="Close",$("section").append(t),$("section").css("background-image",`${document.body.style.backgroundImage}`),$(".card-wrapper").fadeOut(10).fadeIn(1e3)}}$("#btn").click((()=>{const t={async:!0,crossDomain:!0,url:`https://community-open-weather-map.p.rapidapi.com/weather?q=${$("#city").val()}%2C${$("#country").val()}&lat=0&lon=0&id=2172797&lang=null&units=standard&mode=xml%2C%20html`,method:"GET",headers:{"x-rapidapi-key":"2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}};$.ajax(t).done((function(t){console.log(t),new e(t)}))}))},183:()=>{const e=new Date,t=(e,t)=>document.body.style.backgroundImage=`linear-gradient(90deg, ${e}, ${t})`;e.getHours()>=6?t("darkblue, lightblue"):e.getHours()>=15?t("lightblue","wheat"):e.getHours()>=18?t("darkred","darkblue"):t("darkblue","grey")}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";a(183),a(218)})()})();