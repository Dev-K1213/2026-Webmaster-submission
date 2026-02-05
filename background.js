const backgrounds = [
    'Photos/image1.jpg',
    'Photos/image2.jpg',
    'Photos/image3.jpg'
];

let currentIndex = 0;
let isTransitioning = false;

function changeBackground() {
    if (isTransitioning) return;
    isTransitioning = true;

    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const newBg = document.createElement('div');
    newBg.className = 'background-slide';
    
    newBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${backgrounds[currentIndex]}')`;
    newBg.style.opacity = '0';
    newBg.style.transition = 'opacity 2s ease-in-out';

    heroSection.appendChild(newBg);
    setTimeout(() => {
        newBg.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        const slides = heroSection.querySelectorAll('.background-slide');
        if (slides.length > 1) {
            slides[0].remove();
        }
        isTransitioning = false;
    }, 2000);

    currentIndex = (currentIndex + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 7000);