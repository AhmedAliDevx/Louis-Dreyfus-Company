const HambugerMenu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar-parent");
HambugerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
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

sideBar.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
