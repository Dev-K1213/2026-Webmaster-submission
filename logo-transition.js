const logo = document.getElementById("site-logo");
const logoText = document.querySelector(".logo-text");
const photoSection = document.getElementById("photo-section");
const navbar = document.querySelector(".navbar");

let isWhite = false;

// height of navbar so the trigger happens exactly at the logo line
const navbarHeight = navbar.offsetHeight;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !isWhite) {
      swapLogo("Photos/graduate-cap-white.png", "#ffffff");
      isWhite = true;
    } 
    else if (!entry.isIntersecting && isWhite) {
      swapLogo("Photos/graduate-cap-black.png", "#0b0b0b");
      isWhite = false;
    }
  },
  {
    rootMargin: `-${navbarHeight}px 0px 0px 0px`,
    threshold: 0,
  }
);

observer.observe(photoSection);

function swapLogo(src, textColor) {
  logo.style.opacity = "0";

  setTimeout(() => {
    logo.src = src;
    if (logoText) logoText.style.color = textColor;
    logo.style.opacity = "1";
  }, 120);
}
