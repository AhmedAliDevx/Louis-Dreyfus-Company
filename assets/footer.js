document.addEventListener("DOMContentLoaded", () => {
  const accordionBtns = document.querySelectorAll(".footer-accordion-label");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const target = document.getElementById(targetId);
      const icon = btn.querySelector(".footer-accordion-icon");

      if (!target) return;

      const isOpen = target.style.maxHeight && target.style.maxHeight !== "0px";

      // Close all
      document.querySelectorAll(".footer-accordion-body").forEach((el) => {
        el.style.maxHeight = "0px";
      });
      document.querySelectorAll(".footer-accordion-icon").forEach((ic) => {
        ic.textContent = "+";
      });

      // Open if it was closed
      if (!isOpen) {
        target.style.maxHeight = target.scrollHeight + "px";
        icon.textContent = "−";
      }
    });
  });
});
