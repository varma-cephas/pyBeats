// selecting elements for the html
const hamburgerButton = document.querySelector("#hamburger-icon");
const logo = document.querySelector("#logo");
const mobileMenu = document.querySelector(".mobile-menu");

// click event for hamburger button to display mobile menu
hamburgerButton.addEventListener("click", ()=>{
    logo.classList.toggle("toggle-logo");
    mobileMenu.classList.toggle("toggle-mobile-menu")
})