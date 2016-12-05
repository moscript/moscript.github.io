/*
MoScript 2016.
Github: https://github.com/moscript
*/
var n = 0;

var sheet = document.createElement('style');
sheet.innerHTML = ".seconds{position:absolute;margin-left:-11.2px;z-index:19260817;opacity:0;animation:ascend 1.3s;transition:opacity 1s ease-in-out;pointer-events:none;user-drag:none;user-select:none}@keyframes ascend{0%{opacity:0;margin-top:-8.9px}70%{opacity:1}100%{opacity:0;margin-top:-26px}}";
document.head.appendChild(sheet);

function setAttributes(el, attrs) {
   for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
   }
}

function extend(event) {
   n++;
   var onesec = document.createElement("img");
   setAttributes(onesec, {
      "id": "sec" + n,
      "class": "seconds",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAALBAMAAACXG1D+AAAAMFBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AACV3M16AAAAD3RSTlMAd7tEZu6ZiDMi3apVEcyHODI9AAAAWElEQVQI12MAAcb/HxkggF2BgVkMxmH6wMDADOSI/joA5zD+lvrB4KT6SR3E4f7LKQzn8PxXvIDQY7Y+Es7haGD5CDYarOeL2ReQ4WAO5/v/CQxwwGHJAAD4iSArnYbHjwAAAABJRU5ErkJggg==",
      "style": "left:" + event.pageX + "px" + ";top:" + event.pageY + "px"
   });
   document.body.appendChild(onesec);
}

var seconds = document.getElementsByClassName("seconds");
var 续命 = {
   get 知多少() {
      for (i = 0; i < seconds.length; i++) {
         seconds[i].style.opacity = 1;
      };
      return "你为长者续了" + seconds.length + "s";
   },
   get 闷声() {
      for (i = 0; i < seconds.length; i++) {
         seconds[i].style.opacity = 0;
      };
      return "闷声大续命，这是坠吼的！";
   }
}
console.info("%c微小的提示：输入%c 续命.知多少 %c来显示在当前页面中所续的秒数，输入%c 续命.闷声 %c来隐藏所续秒数。", "color:#9e9e9e", "color:#2196f3", "color:#9e9e9e", "color:#2196f3", "color:#9e9e9e");

//document.addEventListener("keydown", 续命.知多少, false);
document.addEventListener("touchstart", extend);
document.addEventListener("mousedown", extend);
