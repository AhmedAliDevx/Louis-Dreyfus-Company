const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  const required = form.querySelectorAll("[required]");
  let valid = true;
  required.forEach((el) => {
    el.style.borderColor = "";
    if (!el.value || (el.type === "checkbox" && !el.checked)) {
      el.style.borderColor = "#e05252";
      valid = false;
    }
  });

  if (!valid) {
    e.preventDefault();
    return;
  }

  const btn = form.querySelector(".btn-submit");
  btn.textContent = "Sending…";
  btn.style.opacity = ".7";
  btn.disabled = true;
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
