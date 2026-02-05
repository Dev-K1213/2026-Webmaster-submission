document.addEventListener("DOMContentLoaded", () => {
    const navBox = document.getElementById("nav-box");
    const navLinks = document.querySelectorAll(".nav-link");

    function moveBox(target) {
    if (!target || !navBox || !menuPill) return;
    const rect = target.getBoundingClientRect();
    const pillRect = menuPill.getBoundingClientRect();
    navBox.style.opacity = "1";
    navBox.style.width = `${rect.width}px`;
    navBox.style.left = `${rect.left - pillRect.left}px`;
    }

    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) moveBox(activeLink);

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => moveBox(link));
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            moveBox(link);
        });
    });

    window.addEventListener("resize", () => {
        const current = document.querySelector(".nav-link.active");
        if (current) moveBox(current);
    });
});
