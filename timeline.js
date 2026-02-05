const updateTimeline = () => {
  const timeline = document.querySelector(".timeline");
  const dot = document.querySelector(".timeline-dot");
  const items = document.querySelectorAll(".timeline-item");

  if (!timeline || !dot) return;

  const rect = timeline.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  // Calculate progress: 0 at top of timeline, 1 at bottom
  // Adjusting numbers here to make the dot stay with the user's scroll
  let progress = (viewHeight / 2 - rect.top) / rect.height;
  progress = Math.max(0, Math.min(1, progress));

  dot.style.top = `${progress * 100}%`;

  // Active States
  items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top < viewHeight * 0.7 && itemRect.bottom > viewHeight * 0.3) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", updateTimeline);
window.addEventListener("resize", updateTimeline);
// Run once on load
window.addEventListener("load", updateTimeline);