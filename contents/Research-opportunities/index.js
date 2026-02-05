const activities = [
    // --- STEM & RESEARCH (PRESTIGE 5) ---
    { title: "Research Science Institute (RSI)", interests: ["STEM", "Research", "Physics"], description: "Six-week intensive summer program at MIT. Globally recognized as the top research program.", types: ["Free", "Summer", "Research"], prestige: 5, url: "https://www.cee.org/programs/research-science-institute" },
    { title: "Summer Science Program (SSP)", interests: ["STEM", "Physics", "Chemistry"], description: "Hands-on research in astrophysics or biochemistry for gifted students.", types: ["Summer", "Research", "Program"], prestige: 5, url: "https://summerscience.org/" },
    { title: "MITES Summer", interests: ["Engineering", "STEM", "Mathematics"], description: "Six-week residential program at MIT for rising seniors from underrepresented backgrounds.", types: ["Free", "Summer", "Engineering"], prestige: 5, url: "https://mites.mit.edu/" },
    { title: "Stanford SIMR", interests: ["Medical", "Biology", "Research"], description: "Direct research with Stanford faculty on medically-oriented projects.", types: ["Summer", "Research", "Medical"], prestige: 5, url: "https://simr.stanford.edu/" },
    { title: "Regeneron Science Talent Search", interests: ["STEM", "Research", "Mathematics"], description: "The oldest and most prestigious science competition in the US.", types: ["Competition", "Year Round"], prestige: 5, url: "https://www.societyforscience.org/regeneron-sts/" },
    { title: "Jackson Laboratory Program", interests: ["Biology", "Genetics", "Research"], description: "Independent research in genetics and genomics in Maine or Connecticut.", types: ["Free", "Summer", "Research"], prestige: 5, url: "https://www.jax.org/education-and-learning/high-school-students" },
    { title: "USA Mathematical Olympiad (USAMO)", interests: ["Mathematics"], description: "The premier high school math competition for students in the United States.", types: ["Competition", "Advanced"], prestige: 5, url: "https://www.maa.org/math-competitions" },

    // --- HUMANITIES & LEADERSHIP (PRESTIGE 5) ---
    { title: "Telluride Association Seminar (TASS)", interests: ["Philosophy", "English Literature Writing"], description: "Critical thinking seminars on social justice and the humanities.", types: ["Free", "Summer", "Program"], prestige: 5, url: "https://www.tellurideassociation.org/" },
    { title: "Bank of America Student Leaders", interests: ["Business", "Leadership"], description: "Paid internship and national summit for community-focused students.", types: ["Free", "Internship", "Summer"], prestige: 5, url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders" },
    { title: "U.S. Senate Youth Program (USSYP)", interests: ["Political Science", "Law"], description: "Intensive week in D.C. with a $10,000 college scholarship.", types: ["Free", "Program"], prestige: 5, url: "https://ussenateyouth.org/" },
    { title: "Boys/Girls Nation", interests: ["Political Science", "Law"], description: "Intensive training in the structure and function of the federal government.", types: ["Free", "Program", "Summer"], prestige: 5, url: "https://www.legion.org/boysnation" },

    // --- COMPETITIONS & ARTS (PRESTIGE 4) ---
    { title: "Scholastic Art & Writing Awards", interests: ["Arts Performance", "English Literature Writing"], description: "The top recognition program for creative teenagers.", types: ["Competition", "Arts"], prestige: 4, url: "https://www.artandwriting.org/" },
    { title: "Concord Review Publication", interests: ["English Literature Writing", "History"], description: "The only quarterly journal to publish student history research.", types: ["Research", "Advanced"], prestige: 4, url: "https://tcr.org/" },
    { title: "NASA High School Internship", interests: ["Engineering", "STEM"], description: "Real-world experience at various NASA centers across the US.", types: ["Internship", "Summer"], prestige: 4, url: "https://intern.nasa.gov/" },
    { title: "National Speech & Debate Tournament", interests: ["English Literature Writing", "Political Science"], description: "The largest academic competition for debate and forensics.", types: ["Competition", "Activity"], prestige: 4, url: "https://www.speechanddebate.org/" },
    { title: "Google Code-in", interests: ["Computer Science", "Engineering"], description: "Global contest introducing teens to open source development.", types: ["Competition", "Year Round"], prestige: 4, url: "https://codein.withgoogle.com/" },

    // --- PRESTIGE 3 & NOTABLE PROGRAMS ---
    { title: "HOSA International Leadership", interests: ["Medical", "Biology"], description: "Competitions and workshops for future health professionals.", types: ["Competition", "Medical"], prestige: 3, url: "https://hosa.org/" },
    { title: "Key Club International", interests: ["Volunteering", "General"], description: "The oldest and largest service program for high school students.", types: ["Volunteering", "Activity"], prestige: 3, url: "https://www.keyclub.org/" },
    { title: "Model United Nations (MUN)", interests: ["Political Science", "Law"], description: "Simulations of the UN to build diplomacy and leadership.", types: ["Activity", "Competition"], prestige: 3, url: "https://www.un.org/en/mun" },
    { title: "DECA Competitive Events", interests: ["Business", "Economics"], description: "Prepares emerging leaders in marketing, finance, and hospitality.", types: ["Competition", "Business"], prestige: 3, url: "https://www.deca.org/" },
    { title: "Junior Achievement", interests: ["Business", "Economics"], description: "Hands-on programs focused on financial literacy and entrepreneurship.", types: ["Activity", "Business"], prestige: 3, url: "https://jausa.ja.org/" },
    { title: "MathCounts", interests: ["Mathematics"], description: "Engaging math programs to build confidence and problem-solving.", types: ["Competition", "Mathematics"], prestige: 3, url: "https://www.mathcounts.org/" },

    // --- EXPANSION PACK (MORE 4-5 STAR PROGRAMS) ---
    { title: "Princeton Summer Journalism", interests: ["English Literature Writing"], description: "Workshop for students from low-income backgrounds interested in journalism.", types: ["Free", "Summer"], prestige: 4, url: "https://psjp.princeton.edu/" },
    { title: "Governor's School (Various States)", interests: ["General", "STEM", "Arts"], description: "State-funded programs for high-achieving high schoolers.", types: ["Free", "Summer", "Program"], prestige: 4, url: "#" },
    { title: "MIT Beaver Works Summer Institute", interests: ["Computer Science", "Engineering"], description: "World-class project-based engineering program.", types: ["Summer", "Engineering"], prestige: 4, url: "https://beaverworks.ll.mit.edu/" },
    { title: "National Science Bowl", interests: ["STEM", "Physics", "Chemistry"], description: "Fast-paced buzzer competition on all science disciplines.", types: ["Competition", "STEM"], prestige: 4, url: "https://science.osti.gov/wdts/nsb" },
    { title: "Ross Mathematics Program", interests: ["Mathematics"], description: "Intensive summer experience in number theory.", types: ["Summer", "Mathematics"], prestige: 5, url: "https://rossprogram.org/" },
    { title: "Lumiere Research Scholar", interests: ["Research", "General"], description: "1-on-1 research mentorship with PhD students from top universities.", types: ["Research", "Advanced"], prestige: 4, url: "https://www.lumiere-education.com/" },
    { title: "NYU Gilder Lehrman History", interests: ["History", "English Literature Writing"], description: "Summer intensive focusing on American history and research.", types: ["Free", "Summer", "History"], prestige: 4, url: "https://www.gilderlehrman.org/" },
    { title: "Inspirit AI Scholars", interests: ["Computer Science", "Data Science"], description: "AI project-based program taught by Stanford and MIT alumni.", types: ["Program", "Computer Science"], prestige: 3, url: "https://www.inspiritai.com/" },
    { title: "Girls Who Code Summer Immersion", interests: ["Computer Science", "Engineering"], description: "Introductory and advanced coding tracks for female-identifying students.", types: ["Free", "Summer", "Computer Science"], prestige: 3, url: "https://girlswhocode.com/" },
    { title: "Smithsonian Internships", interests: ["Arts", "History", "Public Administration"], description: "Hands-on roles at the world's largest museum and research complex.", types: ["Internship", "Summer"], prestige: 4, url: "https://www.smithsonianfi.si.edu/internships" },
    { title: "American Red Cross Volunteer", interests: ["Volunteering", "Medical"], description: "Critical community service roles and disaster relief support.", types: ["Volunteering", "Year Round"], prestige: 2, url: "https://www.redcross.org/volunteer/" },
    { title: "Blue Ocean Competition", interests: ["Business", "Economics"], description: "The world's largest virtual entrepreneurship competition.", types: ["Competition", "Business"], prestige: 3, url: "https://blueoceancompetition.org/" },
    { title: "LaunchX Entrepreneurship", interests: ["Business", "Engineering"], description: "Intensive summer program to build a real startup.", types: ["Summer", "Business"], prestige: 4, url: "https://launchx.com/" },
    { title: "Stanford Pre-Collegiate Studies", interests: ["General", "STEM", "Philosophy"], description: "Advanced academic enrichment in a variety of disciplines.", types: ["Program", "Summer"], prestige: 3, url: "https://spcs.stanford.edu/" },
    { title: "Columbia University Summer Program", interests: ["General"], description: "Rigorous academic study in New York City for high schoolers.", types: ["Program", "Summer"], prestige: 3, url: "https://precollege.sps.columbia.edu/" },
    { title: "Pioneer Academics Research", interests: ["Research", "Advanced"], description: "The only fully accredited online research program for high school students.", types: ["Research", "Summer"], prestige: 4, url: "https://pioneeracademics.com/" },
    { title: "Global Citizen Year", interests: ["Volunteering", "Political Science"], description: "Leadership training through immersive community projects.", types: ["Volunteering", "Program"], prestige: 3, url: "https://www.globalcitizenyear.org/" },
    { title: "Math Camp (Canada/USA)", interests: ["Mathematics"], description: "Advanced summer program for mathematically talented students.", types: ["Summer", "Mathematics"], prestige: 5, url: "https://www.mathcamp.org/" },
    { title: "Horizon Academic Research", interests: ["Research", "Advanced"], description: "Mentorship-based research program in various university-level subjects.", types: ["Research", "Year Round"], prestige: 3, url: "https://www.horizon-academic.org/" },
    { title: "World Science Scholars", interests: ["STEM", "Mathematics"], description: "Program for exceptionally talented math students to apply skills to science.", types: ["Free", "Advanced"], prestige: 4, url: "https://worldsciencescholars.com/" },
    { title: "Civil Air Patrol", interests: ["Engineering", "Leadership"], description: "The official auxiliary of the U.S. Air Force focusing on aerospace.", types: ["Activity", "Leadership"], prestige: 3, url: "https://www.gocivilairpatrol.com/" },
    { title: "Zooniverse Citizen Science", interests: ["Research", "General"], description: "Contribute to real research projects online from astronomy to zoology.", types: ["Volunteering", "Research"], prestige: 2, url: "https://www.zooniverse.org/" },
    { title: "Code.org Volunteer", interests: ["Computer Science", "Volunteering"], description: "Help teach coding to younger students in your community.", types: ["Volunteering", "Year Round"], prestige: 2, url: "https://code.org/" },
    { title: "Amnesty International Student", interests: ["Political Science", "Law"], description: "Human rights advocacy and grassroots organizing program.", types: ["Activity", "Volunteering"], prestige: 3, url: "https://www.amnesty.org/" },
    { title: "The New York Times Student Review", interests: ["English Literature Writing"], description: "Writing contests for film, book, and restaurant reviews.", types: ["Competition"], prestige: 3, url: "https://www.nytimes.com/column/learning-student-contests" },
    { title: "Polygence Research Mentorship", interests: ["Research", "Advanced"], description: "Personalized research projects guided by university academics.", types: ["Research", "Year Round"], prestige: 4, url: "https://www.polygence.org/" },
    { title: "Economics for Leaders (EFL)", interests: ["Economics", "Business"], description: "Learn economics through simulations and leadership exercises.", types: ["Program", "Summer"], prestige: 3, url: "https://www.fte.org/students/2026-programs/" }
];
// ... (Your activities array remains the same) ...

const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
const filterCheckboxes = document.querySelectorAll(".filter");
const clearBtn = document.getElementById("clearFilters");
const navBox = document.getElementById('nav-box');
const menuPill = document.querySelector('.menu-pill');

function renderActivities() {
    const searchText = searchInput.value.toLowerCase();
    const activeFilters = Array.from(filterCheckboxes).filter(f => f.checked).map(f => f.value);

    resultsDiv.innerHTML = "";


    const filtered = activities.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchText) || 
                          a.description.toLowerCase().includes(searchText);

    // CHANGE: from .some() to .every()
    // This means the activity must have ALL selected tags to show up
    const matchesFilter = activeFilters.length === 0 || 
                          activeFilters.every(f => a.interests.includes(f));
    
    return matchesSearch && matchesFilter;
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

// NAVIGATION SLIDER LOGIC
function moveBox(target) {
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const pillRect = menuPill.getBoundingClientRect();
    navBox.style.opacity = "1";
    navBox.style.width = `${rect.width}px`;
    navBox.style.left = `${rect.left - pillRect.left}px`;
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => moveBox(e.target));
});

menuPill.addEventListener('mouseleave', () => {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) moveBox(activeLink);
    else navBox.style.opacity = "0";
});

// INITIALIZE
searchInput.addEventListener("input", renderActivities);
filterCheckboxes.forEach(f => f.addEventListener("change", renderActivities));
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterCheckboxes.forEach(f => f.checked = false);
    renderActivities();
});

document.addEventListener("DOMContentLoaded", () => {
    renderActivities();
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) moveBox(activeLink);
});