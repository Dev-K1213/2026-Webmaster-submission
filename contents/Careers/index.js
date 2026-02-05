/* =========================================================
   1. CAREER DATA (HIGH SCHOOL–APPROPRIATE, REAL JOBS)
   ========================================================= */

const careerData = [
  {
    title: "Retail Associate",
    interests: ["Business"],
    description:
      "Helps customers, manages inventory, and supports daily store operations.",
    outlook: "Entry Level",
    salary: "$25k – $40k",
    url: "#"
  },
  {
    title: "Lifeguard",
    interests: ["Healthcare"],
    description:
      "Ensures swimmer safety, monitors pools or beaches, and provides first aid when needed.",
    outlook: "Seasonal",
    salary: "$22k – $35k",
    url: "#"
  },
  {
    title: "Hospital Support Assistant",
    interests: ["Healthcare"],
    description:
      "Assists medical staff with patient transport, room setup, and basic care tasks.",
    outlook: "Stable",
    salary: "$30k – $45k",
    url: "#"
  },
  {
    title: "STEM Program Instructor",
    interests: ["Technology"],
    description:
      "Teaches basic science, math, and engineering concepts to younger students.",
    outlook: "Growing",
    salary: "$45k – $75k",
    url: "#"
  },
  {
    title: "Office Assistant",
    interests: ["Business"],
    description:
      "Handles filing, scheduling, data entry, and front-desk responsibilities.",
    outlook: "Stable",
    salary: "$28k – $42k",
    url: "#"
  },
  {
    title: "Library Assistant",
    interests: ["Creative"],
    description:
      "Supports library operations, organizes materials, and helps patrons find resources.",
    outlook: "Steady",
    salary: "$25k – $38k",
    url: "#"
  }
];

/* =========================================================
   2. RENDER CAREER CARDS
   ========================================================= */

function renderCareers(data) {
  const resultsGrid = document.getElementById("results");

  if (!resultsGrid) return;

  resultsGrid.innerHTML = data
    .map(
      career => `
      <a href="${career.url}" class="card">
        <div class="tags">${career.outlook}</div>
        <h2>${career.title}</h2>
        <div class="amount-tag">${career.salary}</div>
        <p>${career.description}</p>
      </a>
    `
    )
    .join("");
}

// Initial render
renderCareers(careerData);

/* =========================================================
   3. SEARCH + FILTER LOGIC
   ========================================================= */

const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const clearBtn = document.getElementById("clearFilters");

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const activeFilters = Array.from(filters)
    .filter(f => f.checked)
    .map(f => f.value);

  const filteredCareers = careerData.filter(career => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchValue) ||
      career.description.toLowerCase().includes(searchValue);

    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.some(filter =>
        career.interests.includes(filter)
      );

    return matchesSearch && matchesFilters;
  });

  renderCareers(filteredCareers);
}

searchInput.addEventListener("input", applyFilters);
filters.forEach(filter => filter.addEventListener("change", applyFilters));

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filters.forEach(f => (f.checked = false));
  renderCareers(careerData);
});

/* =========================================================
   4. NAVBAR PILL ANIMATION (HOMEPAGE STYLE — FIXED)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const navBox = document.getElementById("nav-box");
  const menuPill = document.querySelector(".menu-pill");
  const links = document.querySelectorAll(".navbar .nav-link");
  const activeLink = document.querySelector(".nav-link.active");

  if (!navBox || !menuPill || links.length === 0) return;

  function moveBox(link) {
    const linkRect = link.getBoundingClientRect();
    const pillRect = menuPill.getBoundingClientRect();

    navBox.style.opacity = "1";
    navBox.style.width = `${linkRect.width}px`;
    navBox.style.left = `${linkRect.left - pillRect.left}px`;
    navBox.style.top = `${linkRect.top - pillRect.top}px`;
  }

  // Initial position
  if (activeLink) {
    setTimeout(() => moveBox(activeLink), 100);
  }

  links.forEach(link => {
    link.addEventListener("mouseenter", () => moveBox(link));
  });

  menuPill.addEventListener("mouseleave", () => {
    if (activeLink) moveBox(activeLink);
    else navBox.style.opacity = "0";
  });
});
