const sectionPlus = document.querySelector(".section-plus");
const sectionFree = document.querySelector(".section-free");
const sectionPremium = document.querySelector(".section-premium");

if (sectionPlus) {
  sectionPlus.addEventListener("mouseenter", () => {
    sectionPlus.classList.add("animate-hover");
  });
}

if (sectionFree) {
  sectionFree.addEventListener("mouseenter", () => {
    sectionFree.classList.add("animate-hover");
  });
}

if (sectionPremium) {
  sectionPremium.addEventListener("mouseenter", () => {
    sectionPremium.classList.add("animate-hover");
  });
}
