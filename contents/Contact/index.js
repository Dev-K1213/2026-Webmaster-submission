/* =========================================================
     PILL NAVIGATION ANIMATION LOGIC
     ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const navBox = document.getElementById("nav-box");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const menuPill = document.querySelector(".menu-pill");
  const activeLink = document.querySelector(".nav-link.active");

  function moveNavBox(element) {
    if (!element || !navBox || !menuPill) return;
    const linkRect = element.getBoundingClientRect();
    const pillRect = menuPill.getBoundingClientRect();

    navBox.style.opacity = "1";
    navBox.style.width = `${linkRect.width}px`;
    navBox.style.height = `${linkRect.height}px`;
    navBox.style.left = `${linkRect.left - pillRect.left}px`;
    navBox.style.top = `${linkRect.top - pillRect.top}px`;
  }

  // Initial Position
  if (activeLink) {
    setTimeout(() => moveNavBox(activeLink), 300);
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => moveNavBox(link));
  });

  // Reset when leaving the entire PILL, but stay active if we are in a dropdown
  // Reset when leaving the entire PILL
  menuPill.addEventListener("mouseleave", (e) => {
    // This check prevents the red box from disappearing if you move 
    // your mouse from the link down into the dropdown menu
    const isMovingToDropdown = e.relatedTarget && e.relatedTarget.closest('.dropdown-menu');
    
    if (!isMovingToDropdown) {
      if (activeLink) {
        moveNavBox(activeLink);
      } else {
        navBox.style.opacity = "0";
      }
    }
  });

  // Also ensure the box stays put if we move from the dropdown back to the link
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.addEventListener('mouseleave', (e) => {
      const isMovingToPill = e.relatedTarget && e.relatedTarget.closest('.menu-pill');
      if (!isMovingToPill && activeLink) {
        moveNavBox(activeLink);
      }
    });
  })});