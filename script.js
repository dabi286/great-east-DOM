
/*IMG-CONTAINER*/
let imgContainer = document.querySelector('#image-container')
imgContainer.style.textAlign = "center"
imgContainer.style.width = "100%"
imgContainer.style.height = "30%"
imgContainer.style.background = "black"
/*IMG-SECTION */
let img = document.querySelector('#img')
img.src = "https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9jZG4uYnV5bWVhY29mZmVlLmNvbS91cGxvYWRzL3Byb2ZpbGVfcGljdHVyZXMvMjAyMC8wNC9iNjQxMWE0NzM0M2U2OGYxZGZjNmQ5YTBkOGMyZTgwNS5wbmc=&size=300&name=SDPT+Solutions"
img.style.width = "150px"
/*TITLE-SECTION*/
let title = document.querySelector('#main-title')
title.innerHTML = "HELLO DAVE!"
title.style.color = "white"
/*LOREM-SECTION*/
let paragraph = document.querySelector('#p-container')
paragraph.style.width = "100%"
paragraph.style.height = "100%"
paragraph.style.background = "grey"
paragraph.style.overflow = "hidden"

let ptext = document.querySelector('.ptext')
ptext.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ex nulla! Earum aliquam laborum quo soluta culpa nisi odit! Nulla ratione eos explicabo rerum facilis provident possimus sed optio dicta?"
ptext.style.color = "White"
ptext.style.textAlign = "center"
ptext.style.fontFamily = "Arial"

let global = document.querySelector('body')
global.style.margin = "0px"