const button = document.getElementById("language-dropdown-button");
const dropdown = document.querySelector(".language-dropdown-parent");
button.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});
document.addEventListener("click", () => {
  dropdown.classList.remove("active");
});

const searchButton = document.querySelector(".search-button");
const crossButton = document.querySelector(".btn-close");
const searchbar = document.querySelector(".searchbar-parent");
const serachbarIcon = document.querySelector(".searchbar-icon");
const backdrop = document.getElementById("search-backdrop");
const searchField = document.getElementById("searchField");
const recommended = document.getElementById("recommended");

function openSearch() {
  searchbar.classList.add("active");
  backdrop.classList.add("active");

  setTimeout(() => {
    searchField.classList.add("show");
    recommended.classList.add("show");
  }, 150);
}

function closeSearch() {
  searchField.classList.remove("show");
  recommended.classList.remove("show");
  searchbar.classList.remove("active");
  backdrop.classList.remove("active");
}

searchButton.addEventListener("click", (e) => {
  e.stopPropagation();
  openSearch();
});

serachbarIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  openSearch();
});

crossButton.addEventListener("click", () => closeSearch());
backdrop.addEventListener("click", () => closeSearch());

searchbar.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", () => closeSearch());

const HambugerMenu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar-parent");
HambugerMenu.addEventListener("click", () => {
  serachbarIcon.classList.toggle("active");
  HambugerMenu.classList.toggle("active");
  sideBar.classList.toggle("active");

  function LockScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
  function UnlockScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
  if (sideBar.classList.contains("active")) {
    LockScroll();
  } else {
    UnlockScroll();
  }
});
const firstChild = document.getElementById("first");
const firstGrandChildShow = document.getElementById("first-grandchild");
const firstGrandChildRemove = document.getElementById(
  "first-grandchild-remove",
);
firstChild.addEventListener("click", () => {
  firstGrandChildShow.classList.add("active");
});
firstGrandChildRemove.addEventListener("click", () => {
  firstGrandChildShow.classList.remove("active");
});

const DropdownLink = document.getElementById("Business_Lines");
const plusIcon = document.getElementById("plus-icon");
const DropdownParent = document.getElementById("Gc_Dropdown");
DropdownLink.addEventListener("click", (e) => {
  e.preventDefault();
  plusIcon.classList.toggle("active");
  DropdownParent.classList.toggle("active");
});

const secondChild = document.getElementById("second");
const secondGrandChildShow = document.getElementById("second-grandchild");
const secondGrandChildRemove = document.getElementById(
  "second-grandchild-remove",
);
secondChild.addEventListener("click", () => {
  secondGrandChildShow.classList.add("active");
});
secondGrandChildRemove.addEventListener("click", () => {
  secondGrandChildShow.classList.remove("active");
});

document.getElementById("Food_Beverages").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("plus-icon-food").classList.toggle("active");
  document.getElementById("Gc_Dropdown_Food").classList.toggle("active");
});

const fourthChild = document.getElementById("fourth");
const fourthGrandChildShow = document.getElementById("fourth-grandchild");
const fourthGrandChildRemove = document.getElementById(
  "fourth-grandchild-remove",
);
fourthChild.addEventListener("click", () => {
  fourthGrandChildShow.classList.add("active");
});
fourthGrandChildRemove.addEventListener("click", () => {
  fourthGrandChildShow.classList.remove("active");
});

document.getElementById("Ingredients").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("plus-icon-ingredients").classList.toggle("active");
  document.getElementById("Gc_Dropdown_Ingredients").classList.toggle("active");
});

document
  .querySelector(".language-container-link")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".lcd-parent").classList.toggle("active");
  });
document.addEventListener("click", () => {
  document.querySelector(".lcd-parent")?.classList.remove("active");
});

const shareToggle = document.getElementById("share-toggle");
const secondIconChild = document.querySelector(".hero-icon-second-child");

shareToggle.addEventListener("click", () => {
  secondIconChild.classList.toggle("active");
});
