let hamburger_menu = document.querySelector('.hamburger-menu');
let menu_bar = document.querySelector('.navbar ul');
console.log(hamburger_menu);
hamburger_menu.addEventListener('click', () => {
    console.log('hello');
    hamburger_menu.classList.toggle('active');
    menu_bar.classList.toggle('active');
});