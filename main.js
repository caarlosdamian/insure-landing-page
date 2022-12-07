const hambuergerMenu = document.querySelector(".header-hambuerger-menu");
const menuContainer = document.querySelector(".menu-container");
let isOpen = false;
hambuergerMenu.addEventListener("click", () => {
  isOpen = !isOpen;
  hambuergerMenu.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";
  menuContainer.style.display = isOpen ? "flex" : "none";
});
