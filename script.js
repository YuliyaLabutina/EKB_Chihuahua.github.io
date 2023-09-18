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

//разворачиваем статьи
//нашли коллекцию со статьями
/*let blogArticles=document.querySelectorAll('.blog-article');
for(let blogArticle of blogArticles ){
    let moreButton=blogArticle.querySelector('.more')
moreButton.onclick=function(){
   blogArticle.classList.remove('short') 
}
}*/

//НАВИГАЦИЯ НА МОБИЛЬНОЙ ВЕРСИИ
const gamberger = document.querySelector('.main-nav-toggle');
const mainNav = document.querySelector('.main-nav')
const menu = document.querySelector('.site-navigation')
// gamberger.onclick=function(){
//     mainNav.classList.remove('main-nav-closed')
//     mainNav.classList.add('main-nav-opened')
// }
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


//переключение раскладки карточек
let cardButtonGrid=document.querySelector('.card-view-button-grid');
let cardButtonList=document.querySelector('.card-view-button-list');
let cardsList=document.querySelector('.cards');

cardButtonList.onclick=function(){
    cardsList.classList.add('list')
cardButtonGrid.classList.remove('active')
cardButtonList.classList.add('active')
}

cardButtonGrid.onclick=function(){
    cardsList.classList.remove('list')
    cardButtonGrid.classList.add('active')
    cardButtonList.classList.remove('active')  
}

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
