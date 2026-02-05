const testDates = [
    { date: '2026-02-10', test: 'ACT', info: 'ACT: English, Math, Reading, Science' },
    { date: '2026-03-14', test: 'SAT', info: 'SAT: Reading, Writing, Math' },
    { date: '2026-04-14', test: 'ACT', info: 'ACT: English, Math, Reading, Science' },
    { date: '2026-05-02', test: 'SAT', info: 'SAT: Reading, Writing, Math' },
    { date: '2026-10-16', test: 'PSAT', info: 'PSAT/NMSQT: Practice SAT qualifier' }
];

let current = new Date(2026, 1, 1); 

function render() {
    const cal = document.getElementById('calendar');
    const label = document.getElementById('monthYear');
    const details = document.getElementById('detailsContent');
    if(!cal || !label) return;
    
    const month = current.getMonth();
    const year = current.getFullYear();
    const names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    label.innerText = `${names[month]} ${year}`;
    cal.innerHTML = '';

    ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(d => {
        const header = document.createElement('div');
        header.className = 'day-name';
        header.innerText = d;
        cal.appendChild(header);
    });

    const firstDay = new Date(year, month, 1).getDay();
    for(let i=0; i < firstDay; i++) cal.appendChild(document.createElement('div'));

    const totalDays = new Date(year, month + 1, 0).getDate();
    for(let d=1; d <= totalDays; d++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerText = d;

        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const test = testDates.find(t => t.date === dateStr);
        
        if (test) {
            dayDiv.classList.add('test-day');
            dayDiv.addEventListener('click', () => {
                details.innerHTML = `<h5>${test.test} - ${dateStr}</h5><p>${test.info}</p>`;
            });
        }
        cal.appendChild(dayDiv);
    }
}

function initSlider() {
    const navBox = document.getElementById('nav-box');
    const menuPill = document.querySelector('.menu-pill');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    let leaveTimeout;

    function move(el) {
        if (!el || !navBox) return;
        const rect = el.getBoundingClientRect();
        const pillRect = menuPill.getBoundingClientRect();
        navBox.style.opacity = "1";
        navBox.style.width = `${rect.width}px`;
        navBox.style.left = `${rect.left - pillRect.left}px`;
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            clearTimeout(leaveTimeout);
            move(link);
        });
    });

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-link');
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(leaveTimeout);
            move(toggle);
        });
        
        dropdown.addEventListener('mouseleave', () => {
            leaveTimeout = setTimeout(() => {
                const activeLink = document.querySelector('.nav-link.active');
                if (activeLink) move(activeLink);
                else navBox.style.opacity = "0";
            }, 200);
        });
    });

    menuPill.addEventListener('mouseleave', () => {
        leaveTimeout = setTimeout(() => {
            const active = document.querySelector('.nav-link.active');
            if (active) move(active);
            else navBox.style.opacity = "0";
        }, 200);
    });

    // Initial positioning
    setTimeout(() => {
        const active = document.querySelector('.nav-link.active');
        if (active) move(active);
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    render();
    initSlider();

    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');

    if(prev) prev.addEventListener('click', () => {
        current.setMonth(current.getMonth() - 1);
        render();
    });

    if(next) next.addEventListener('click', () => {
        current.setMonth(current.getMonth() + 1);
        render();
    });
});