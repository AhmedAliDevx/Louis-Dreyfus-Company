const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const required = form.querySelectorAll("[required]");
  let valid = true;
  required.forEach((el) => {
    el.style.borderColor = "";
    if (!el.value || (el.type === "checkbox" && !el.checked)) {
      el.style.borderColor = "#e05252";
      valid = false;
    }
  });
  if (!valid) return;

  const btn = form.querySelector(".btn-submit");
  btn.textContent = "Sending…";
  btn.style.opacity = ".7";
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = "Send Message →";
    btn.style.opacity = "1";
    btn.disabled = false;

    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }, 1200);
});

const HambugerMenu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar-parent");
HambugerMenu.addEventListener("click", () => {
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

document.getElementById("Ingredients").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("plus-icon-ingredients").classList.toggle("active");
  document.getElementById("Gc_Dropdown_Ingredients").classList.toggle("active");
});
