
window.onload=function(){
var verhaal = document.querySelector('section.verhaal'); // het verhaal laten zien
var verhaal2 = document.querySelector('article.next'); // het eerste verhaal 
var verhaal3 = document.querySelector('article.second'); // het tweede verhaal 
var menu = document.querySelector('ul.popup')	// het menu element (alleen op mobiel) 
var buttonnext = document.querySelector('section > button');//volgende knop
var button = document.querySelector('header > button');// verhaal knop 
var trigger = document.querySelector('a.icon') // menuknop 

var move = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: verhaal.dance) */
	verhaal.classList.toggle('move')
}

var next = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: verhaal.dance) */
	verhaal2.classList.toggle('volgende')
}

var next = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: verhaal.dance) */
	verhaal3.classList.toggle('hide')
	verhaal2.classList.toggle('volgende')
}

var open = function () {
	menu.classList.toggle('show')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', move);
buttonnext.addEventListener('click', next);
trigger.addEventListener('click', open);

}





