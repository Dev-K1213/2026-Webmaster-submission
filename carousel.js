window.addEventListener("load", () => {
  const track = document.querySelector(".carousel-track");
  const carousel = document.querySelector(".carousel");
  if (!track || !carousel) return;

  // 1. Clone the cards to create the infinite effect
  const originalCards = Array.from(track.children);
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  // 2. Calculate dimensions
  // We get the width of one card + the gap (30px)
  const cardStyle = window.getComputedStyle(originalCards[0]);
  const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
  const cardWidth = originalCards[0].offsetWidth + cardMarginRight + 30; // 30 is your CSS gap
  
  // The reset point is the width of the original set
  const scrollLimit = cardWidth * originalCards.length;

  let position = 0;
  const speed = 1.67; // Lower number = smoother/slower
  let paused = false;

  function animate() {
    if (!paused) {
      position -= speed;

      // If we've scrolled past the first set, reset to 0
      // We use <= because position is moving into negative numbers
      if (Math.abs(position) >= scrollLimit) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  carousel.addEventListener("mouseenter", () => (paused = true));
  carousel.addEventListener("mouseleave", () => (paused = false));

  animate();
});