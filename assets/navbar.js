const WWAButton = document.getElementById("Main_navbar_link_1");
const WWACross = document.getElementById("wwa_cross");
const WWAParent = document.querySelector(".wwa-parent");
const BusinessLines = document.getElementById("business_link");
const WWABizPanel = document.querySelector(".wwa-business-parent");

WWAButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  WWAParent.classList.toggle("active");
});
WWAParent.addEventListener("click", (e) => e.stopPropagation());
WWACross.addEventListener("click", (e) => {
  e.stopPropagation();
  WWAParent.classList.remove("active");
  WWABizPanel.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (!WWAParent.contains(e.target)) {
    WWAParent.classList.remove("active");
    WWABizPanel.classList.remove("active");
  }
});

BusinessLines.addEventListener("click", () => {
  const isOpen = WWABizPanel.classList.contains("active");
  WWABizPanel.classList.toggle("active", !isOpen);
});

const WWAButtonSecond = document.getElementById("Main_navbar_link_2");
const WWACrossSecond = document.getElementById("wwa_cross_2");
const WWAParentSecond = document.getElementById("wwa-parent-2");
const FoodBeverages = document.getElementById("Food_Beverages_link");
const IngredientsLink = document.getElementById("Ingredients_link");
const FoodBevPanel = document.getElementById("food-bev-panel");
const IngredientsPanel = document.getElementById("ingredients-panel");

function closeAllSubPanels() {
  FoodBevPanel.classList.remove("active");
  IngredientsPanel.classList.remove("active");
}

WWAButtonSecond.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  WWAParentSecond.classList.toggle("active");
  if (!WWAParentSecond.classList.contains("active")) closeAllSubPanels();
});
WWAParentSecond.addEventListener("click", (e) => e.stopPropagation());
WWACrossSecond.addEventListener("click", (e) => {
  e.stopPropagation();
  WWAParentSecond.classList.remove("active");
  closeAllSubPanels();
});
document.addEventListener("click", (e) => {
  if (!WWAParentSecond.contains(e.target)) {
    WWAParentSecond.classList.remove("active");
    closeAllSubPanels();
  }
});

FoodBeverages.addEventListener("click", () => {
  const isOpen = FoodBevPanel.classList.contains("active");
  closeAllSubPanels();
  if (!isOpen) FoodBevPanel.classList.add("active");
});

IngredientsLink.addEventListener("click", () => {
  const isOpen = IngredientsPanel.classList.contains("active");
  closeAllSubPanels();
  if (!isOpen) IngredientsPanel.classList.add("active");
});
