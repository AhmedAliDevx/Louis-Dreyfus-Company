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
