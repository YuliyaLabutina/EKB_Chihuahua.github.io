//смена темы
let page=document.querySelector('.page');

let darkThemeButton=document.querySelector('.theme-button-dark');
let lightThemeButton=document.querySelector('.theme-button-light');

darkThemeButton.onclick = function(){
page.classList.add('dark');
lightThemeButton.classList.remove('active')
darkThemeButton.classList.add('active')
}

lightThemeButton.onclick = function(){
    page.classList.remove('dark');
    lightThemeButton.classList.add('active')
    darkThemeButton.classList.remove('active')  
}
//смена шрифта
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton=document.querySelector('.font-button-sans-serif');

serifFontButton.onclick = function(){
  page.classList.add('serif');
serifFontButton.classList.add('active')
sansSerifFontButton.classList.remove('active')  
}

sansSerifFontButton.onclick = function(){
    page.classList.remove('serif');
    serifFontButton.classList.remove('active')
    sansSerifFontButton.classList.add('active') 
}



//НАВИГАЦИЯ НА МОБИЛЬНОЙ ВЕРСИИ
const gamberger = document.querySelector('.main-nav-toggle');
const mainNav = document.querySelector('.main-nav')
const menu = document.querySelector('.site-navigation')

function interaction_nav(){
    if (mainNav.classList.contains('main-nav-opened')){ 
    mainNav.classList.remove('main-nav-opened');
    mainNav.classList.add('main-nav-closed');
    menu.classList.remove('opened');
    menu.classList.add('closed')
}
else{ mainNav.classList.remove('main-nav-closed')
    mainNav.classList.add('main-nav-opened')
    menu.classList.add('opened');
    menu.classList.remove('closed')
}
}
gamberger.addEventListener('click',interaction_nav);

//галлерея
let activePhoto=document.querySelector('.active-photo')

let previewList=document.querySelectorAll('.preview-list a')
for(let activeImage of previewList ){

activeImage.onclick=function(evt){
    activePhoto.src=activeImage.href
    evt.preventDefault() 
    let currentActive=document.querySelector('.preview-list a.active-item')
currentActive.classList.remove('active-item')
activeImage.classList.add('active-item')
}}

