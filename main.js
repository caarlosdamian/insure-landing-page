const hambuergerMenu = document.querySelector(".header-hambuerger-menu");
const menuContainer = document.querySelector(".menu-container");
const featureContainer = document.querySelector(".features-wrapper");
let featureData = [
 {
  title: "Snappy Process",
  img: "./images/icon-snappy-process.svg",
  description:
   "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
 },
 {
  title: "Affordable Prices",
  img: "./images/icon-affordable-prices.svg",
  description:
   "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
 },
 {
  title: "People First",
  img: "./images/icon-people-first.svg",
  description:
   "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
 },
];
let isOpen = false;

hambuergerMenu.addEventListener("click", () => {
 isOpen = !isOpen;
 hambuergerMenu.src = isOpen
  ? "./images/icon-close.svg"
  : "./images/icon-hamburger.svg";
 menuContainer.style.display = isOpen ? "flex" : "none";
});

const displayFeatures = () => {
 featureContainer.innerHTML = featureData
  .map((item) => {
   return `
  <div class="feature-content">
  <img src="${item.img}" alt="${item.title}" class="feature-img" />
  <span class="feature-title">${item.title}</span>
  <article class="feature-description">
  ${item.description}
  </article>
</div>
  `;
  })
  .join("");
};

displayFeatures();
