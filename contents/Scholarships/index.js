// 1. Unified Scholarship Data
const scholarshipData = [
    { 
        title: "Coca-Cola Scholars Program", 
        interests: ["Leadership", "Merit-Based"], 
        description: "An achievement-based scholarship awarded to graduating high school seniors.", 
        amount: "$20,000", 
        deadline: "October 31", 
        url: "https://www.coca-colascholarsfoundation.org/" 
    },
    { 
        title: "Gates Scholarship", 
        interests: ["STEM", "Full-Ride", "Need-Based"], 
        description: "Highly selective scholarship for outstanding, minority, high school seniors from low-income households.", 
        amount: "Full Cost", 
        deadline: "September 15", 
        url: "https://www.thegatesscholarship.org/" 
    },
    { 
        title: "Jack Kent Cooke Foundation", 
        interests: ["General", "Research", "Need-Based"], 
        description: "Available to high-achieving high school seniors with financial need.", 
        amount: "Up to $55,000/year", 
        deadline: "November 14", 
        url: "https://www.jkcf.org/" 
    },
    { 
        title: "Equitable Excellence Scholarship", 
        interests: ["Business", "Niche"], 
        description: "Awards students who show leadership and a commitment to their community.", 
        amount: "$2,500 - $25,000", 
        deadline: "December 18", 
        url: "https://equitable.com/foundation/scholarships" 
    },
    { 
        title: "QuestBridge National College Match", 
        interests: ["Full-Ride", "Need-Based"], 
        description: "Connects high-achieving low-income seniors with full four-year scholarships to top-tier colleges.", 
        amount: "Full-Ride", 
        deadline: "September 26", 
        url: "https://www.questbridge.org/" 
    },
    { 
        title: "Regeneron Science Talent Search", 
        interests: ["STEM", "Research", "Merit-Based"], 
        description: "The nation's oldest and most prestigious science and math competition for high school seniors.", 
        amount: "Up to $250,000", 
        deadline: "November 8", 
        url: "https://www.societyforscience.org/regeneron-sts/" 
    },
    { 
        title: "YoungArts National Competition", 
        interests: ["Arts", "Merit-Based"], 
        description: "Identifies exceptional young artists in visual, literary, and performing arts.", 
        amount: "Up to $10,000", 
        deadline: "October 13", 
        url: "https://youngarts.org/competition/" 
    },
    { 
        title: "Davidson Fellows Scholarship", 
        interests: ["STEM", "Arts", "Merit-Based"], 
        description: "Recognizes students who have completed a significant piece of work in STEM or the Arts.", 
        amount: "Up to $50,000", 
        deadline: "February 12", 
        url: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/" 
    },
    { 
        title: "ELKS Most Valuable Student", 
        interests: ["Leadership", "Need-Based", "Merit-Based"], 
        description: "Evaluates students on leadership, academic achievements, and financial need.", 
        amount: "Up to $50,000", 
        deadline: "November 12", 
        url: "https://www.elks.org/scholars/scholarships/mvs.cfm" 
    },
    { 
        title: "Burger King Scholars", 
        interests: ["Niche", "General"], 
        description: "Created in memory of Burger King co-founder James W. McLamore; rewards community service.", 
        amount: "Up to $50,000", 
        deadline: "December 15", 
        url: "https://www.burgerkingfoundation.org/" 
    },
    { 
        title: "National Merit Scholarship", 
        interests: ["Merit-Based"], 
        description: "Awarded based on PSAT/NMSQT scores and academic record.", 
        amount: "$2,500+", 
        deadline: "Varies", 
        url: "https://www.nationalmerit.org/" 
    },
    { 
        title: "Horatio Alger Scholarship", 
        interests: ["Need-Based", "Niche"], 
        description: "Designed for students who have overcome great obstacles while exhibiting strength of character.", 
        amount: "$10,000 - $25,000", 
        deadline: "March 15", 
        url: "https://horatioalger.org/scholarships/" 
    }
];

// 2. DOM Elements
const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
const filterCheckboxes = document.querySelectorAll(".filter");
const clearBtn = document.getElementById("clearFilters");

// 3. Scholarship Rendering Logic
function renderScholarships() {
    if (!resultsDiv) return;
    
    const searchText = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckboxes)
        .filter(f => f.checked)
        .map(f => f.value);

    resultsDiv.innerHTML = "";

    const filtered = scholarshipData.filter(s => {
        const matchesSearch = s.title.toLowerCase().includes(searchText) || 
                             s.description.toLowerCase().includes(searchText);
        
        // Matches if no filters are selected, OR if the item has at least one of the active filter tags
        const matchesFilter = activeFilters.length === 0 || 
                             activeFilters.some(f => s.interests.includes(f));
        
        return matchesSearch && matchesFilter;
    });

    filtered.forEach((s, index) => {
        const card = document.createElement("a");
        card.className = "card";
        card.href = s.url;
        card.target = "_blank";
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;

        card.innerHTML = `
            <div class="tags" style="color: #803939; font-weight: 700; font-size: 0.75rem; text-transform: uppercase;">
                ${s.interests.join(" • ")}
            </div>
            <h2 style="font-family: 'Playfair Display', serif; margin: 10px 0;">${s.title}</h2>
            <div class="amount-tag" style="color: #803939; font-weight: 800; font-size: 1.2rem;">${s.amount}</div>
            <p style="font-size: 0.9rem; color: #555; margin: 15px 0;">${s.description}</p>
            <div class="deadline" style="font-size: 0.75rem; opacity: 0.6; font-weight: 600;">Deadline: ${s.deadline}</div>
        `;
        resultsDiv.appendChild(card);
    });
}

// 4. Navigation Slider Logic
function initSlider() {
    const navBox = document.getElementById('nav-box');
    const menuPill = document.querySelector('.menu-pill');
    const navLinks = document.querySelectorAll('.nav-link');
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

    menuPill.addEventListener('mouseleave', () => {
        leaveTimeout = setTimeout(() => {
            const active = document.querySelector('.nav-link.active');
            if (active) move(active);
            else navBox.style.opacity = "0";
        }, 200);
    });

    // Set initial position
    setTimeout(() => {
        const active = document.querySelector('.nav-link.active');
        if (active) move(active);
    }, 300);
}

// 5. Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
    initSlider();
    renderScholarships();

    if (searchInput) {
        searchInput.addEventListener("input", renderScholarships);
    }

    filterCheckboxes.forEach(f => {
        f.addEventListener("change", renderScholarships);
    });

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            filterCheckboxes.forEach(f => f.checked = false);
            renderScholarships();
        });
    }
});

function renderScholarships() {
    const searchText = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckboxes)
        .filter(f => f.checked)
        .map(f => f.value);

    resultsDiv.innerHTML = "";

    const filtered = scholarshipData.filter(s => {
        const matchesSearch = s.title.toLowerCase().includes(searchText);
        // Uses .some to see if any of the scholarship's tags match the selected filters
        const matchesFilter = activeFilters.length === 0 || 
                             s.interests.some(tag => activeFilters.includes(tag));
        return matchesSearch && matchesFilter;
    });

    filtered.forEach((s, i) => {
        resultsDiv.innerHTML += `
            <a href="${s.url}" class="card" style="animation-delay: ${i * 0.05}s">
                <div class="tags">${s.interests.join(" • ")}</div>
                <h2>${s.title}</h2>
                <div class="amount-tag">${s.amount}</div>
                <p>${s.description}</p>
                <div class="deadline">Deadline: ${s.deadline}</div>
            </a>
        `;
    });
}