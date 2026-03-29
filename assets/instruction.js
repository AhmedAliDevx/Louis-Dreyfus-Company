const track = document.getElementById("carouselTrack");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const total = 3;
let current = 0;

function goTo(index) {
  current = Math.max(0, Math.min(total - 1, index));
  track.style.transform = `translateX(-${current * 100}%)`;
  btnPrev.classList.toggle("disabled", current === 0);
  btnNext.classList.toggle("disabled", current === total - 1);
}

btnPrev.addEventListener("click", () => goTo(current - 1));
btnNext.addEventListener("click", () => goTo(current + 1));

// Touch swipe support
let startX = 0;
track.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true },
);
track.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
});
