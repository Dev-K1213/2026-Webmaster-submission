document.addEventListener("DOMContentLoaded", () => {
    const pill = document.querySelector('.menu-pill');
    const links = document.querySelectorAll('.menu-pill .nav-link');
    
    let navBox = pill.querySelector('.nav-box');
    if (!navBox) {
        navBox = document.createElement('div');
        navBox.classList.add('nav-box');
        pill.appendChild(navBox);
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const linkRect = link.getBoundingClientRect();
            const pillRect = pill.getBoundingClientRect();

            navBox.style.opacity = "1";
            navBox.style.width = `${linkRect.width}px`;
            navBox.style.left = `${linkRect.left - pillRect.left}px`;
            
            links.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');
        });
    });

    pill.addEventListener('mouseleave', () => {
        navBox.style.opacity = "0";
        links.forEach(l => l.classList.remove('active-link'));
    });
});