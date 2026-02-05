const activities = [
    // --- STEM INTERNSHIPS ---
    { title: "NASA High School Internship", interests: ["STEM", "Engineering"], description: "Gain hands-on experience at various NASA centers across the US, working on real projects.", types: ["Internship", "Paid"], prestige: 5, url: "https://intern.nasa.gov/" },
    { title: "MIT PRIMES Research Internship", interests: ["STEM", "Mathematics"], description: "Independent math research for high school students guided by MIT faculty.", types: ["Internship", "Unpaid"], prestige: 5, url: "https://math.mit.edu/research/highschool/primes/" },
    { title: "Johns Hopkins Center for Talented Youth Research", interests: ["STEM", "Research"], description: "Work on university-level research projects in science and mathematics.", types: ["Internship", "Unpaid"], prestige: 5, url: "https://cty.jhu.edu/" },

    // --- MEDICAL / BIO INTERNSHIPS ---
    { title: "Stanford SIMR Internship", interests: ["Medical", "Biology"], description: "Direct research with Stanford faculty on medically-oriented projects.", types: ["Internship", "Paid"], prestige: 5, url: "https://simr.stanford.edu/" },
    { title: "Jackson Laboratory High School Internship", interests: ["Biology", "Genetics"], description: "Research experience in genetics and genomics in Maine or Connecticut.", types: ["Internship", "Unpaid"], prestige: 5, url: "https://www.jax.org/education-and-learning/high-school-students" },

    // --- HUMANITIES / LEADERSHIP ---
    { title: "Bank of America Student Leaders", interests: ["Business", "Leadership"], description: "Paid internship and national summit for community-focused students.", types: ["Internship", "Paid"], prestige: 5, url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders" },
    { title: "U.S. Senate Youth Program (USSYP)", interests: ["Political Science", "Law"], description: "Intensive week in D.C. with a $10,000 college scholarship.", types: ["Program"], prestige: 5, url: "https://ussenateyouth.org/" },

    // --- ARTS / WRITING ---
    { title: "Smithsonian Internships", interests: ["Arts", "History", "Public Administration"], description: "Hands-on roles at the world's largest museum and research complex.", types: ["Internship", "Unpaid"], prestige: 4, url: "https://www.smithsonianfi.si.edu/internships" },
    { title: "Polygence Research Mentorship", interests: ["Research", "Advanced"], description: "Personalized research projects guided by university academics.", types: ["Internship", "Paid"], prestige: 4, url: "https://www.polygence.org/" },

    // --- OTHER COMPETITIONS / ACTIVITIES (for completeness) ---
    { title: "Google Code-in", interests: ["Computer Science", "Engineering"], description: "Global contest introducing teens to open source development.", types: ["Competition", "Year Round"], prestige: 4, url: "https://codein.withgoogle.com/" },
    { title: "National Science Bowl", interests: ["STEM", "Physics", "Chemistry"], description: "Fast-paced buzzer competition on all science disciplines.", types: ["Competition", "STEM"], prestige: 4, url: "https://science.osti.gov/wdts/nsb" }
];

// DOM references
const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
const filterCheckboxes = document.querySelectorAll(".filter");
const clearBtn = document.getElementById("clearFilters");
const navBox = document.getElementById('nav-box');
const menuPill = document.querySelector('.menu-pill');

// --- RENDER LOGIC ---
function renderActivities() {
    const searchText = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckboxes).filter(f => f.checked).map(f => f.value);
    if (!resultsDiv) return;

    resultsDiv.innerHTML = "";

    // Filter and sort: show unpaid / stipend / paid last
    const filtered = activities
        .filter(a => {
            const matchesSearch = a.title.toLowerCase().includes(searchText) || a.description.toLowerCase().includes(searchText);
            const matchesFilter = activeFilters.length === 0 || activeFilters.every(f => a.interests.includes(f));
            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            const typeOrder = { "Unpaid": 0, "Stipend": 1, "Paid": 2 };
            const aType = a.types.find(t => typeOrder[t] !== undefined);
            const bType = b.types.find(t => typeOrder[t] !== undefined);
            return (typeOrder[aType] || 0) - (typeOrder[bType] || 0);
        });

    filtered.forEach((a, index) => {
        const card = document.createElement("a");
        card.className = "card";
        card.href = a.url;
        card.target = "_blank";
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="tags">${a.interests.slice(0, 2).join(" • ")}</div>
            <h2>${a.title}</h2>
            <div class="star-rating">${'★'.repeat(a.prestige)}${'☆'.repeat(5-a.prestige)}</div>
            <p>${a.description}</p>
            ${a.prestige === 5 ? '<span class="elite-tag">PREMIER</span>' : ''}
        `;
        resultsDiv.appendChild(card);
    });
}

// --- SLIDER LOGIC ---
function moveBox(target) {
    if (!target || !navBox || !menuPill) return;
    const rect = target.getBoundingClientRect();
    const pillRect = menuPill.getBoundingClientRect();
    navBox.style.opacity = "1";
    navBox.style.width = `${rect.width}px`;
    navBox.style.left = `${rect.left - pillRect.left}px`;
}

function initSlider() {
    let leaveTimeout;
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            clearTimeout(leaveTimeout);
            moveBox(e.target);
        });
    });
    document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(leaveTimeout);
            moveBox(dropdown.querySelector('.nav-link'));
        });
    });
    menuPill.addEventListener('mouseleave', () => {
        leaveTimeout = setTimeout(() => {
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) moveBox(activeLink);
            else navBox.style.opacity = "0";
        }, 250);
    });
}

// --- INITIALIZE ---
document.addEventListener("DOMContentLoaded", () => {
    renderActivities();
    initSlider();
    
    searchInput?.addEventListener("input", renderActivities);
    filterCheckboxes.forEach(f => f.addEventListener("change", renderActivities));
    clearBtn?.addEventListener("click", () => {
        searchInput.value = "";
        filterCheckboxes.forEach(f => f.checked = false);
        renderActivities();
    });

    // Initial position if a link is active
    setTimeout(() => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) moveBox(activeLink);
    }, 100);
});
