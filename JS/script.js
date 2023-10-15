// // alert('hello world');
// const inputEl = document.getElementById("input-el")
// const btnEl = document.getElementById("btn-el")

// btnEl.addEventListener("click", function(){
//     console.log("clicked")
// })

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
  
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});