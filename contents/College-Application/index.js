document.addEventListener("DOMContentLoaded", () => { 
  const display = document.getElementById("results-display");
  const filters = document.querySelectorAll(".filter");
  const searchInput = document.getElementById("searchInput");

  // ✅ NEW: clear button reference
  const clearBtn = document.getElementById("clearSearch");

  const modal = document.getElementById("college-modal");
  const modalClose = document.querySelector(".college-modal-close");

  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalLocation = document.getElementById("modal-location");
  const modalDeadline = document.getElementById("modal-deadline");
  const modalWebsite = document.getElementById("modal-website");

  const colleges = [
    {
      name: "Princeton University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Princeton, NJ",
      deadline: "January 1",
      website: "https://www.princeton.edu",
      info: "Princeton University is a world-renowned private research institution known for its rigorous academics and undergraduate focus. It operates a strict no-loan financial aid policy, allowing qualifying students to graduate debt-free."
    },
    {
      name: "Harvard University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Cambridge, MA",
      deadline: "January 1",
      website: "https://www.harvard.edu",
      info: "Harvard University offers unparalleled academic breadth, research funding, and global prestige. Its need-based financial aid ensures affordability for all income levels."
    },
    {
      name: "Yale University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "New Haven, CT",
      deadline: "January 2",
      website: "https://www.yale.edu",
      info: "Yale emphasizes liberal arts education combined with top-tier research and leadership preparation."
    },
    {
      name: "Stanford University",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Stanford, CA",
      deadline: "January 5",
      website: "https://www.stanford.edu",
      info: "Stanford is a global leader in technology, entrepreneurship, and innovation with unmatched access to Silicon Valley."
    },
    {
      name: "MIT",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Cambridge, MA",
      deadline: "January 6",
      website: "https://www.mit.edu",
      info: "MIT is a powerhouse in engineering, computer science, and scientific research with exceptional career outcomes."
    },
    {
      name: "Columbia University",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "New York, NY",
      deadline: "January 1",
      website: "https://www.columbia.edu",
      info: "Columbia combines Ivy League academics with unmatched access to finance, media, and consulting careers."
    },
    {
      name: "UC Berkeley",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Berkeley, CA",
      deadline: "November 30",
      website: "https://www.berkeley.edu",
      info: "UC Berkeley is a premier public research university with exceptional outcomes in tech and science."
    },
    {
      name: "UCLA",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Los Angeles, CA",
      deadline: "November 30",
      website: "https://www.ucla.edu",
      info: "UCLA blends research excellence with a vibrant campus and strong pipelines into tech and healthcare."
    },
    {
      name: "University of Michigan",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Ann Arbor, MI",
      deadline: "February 1",
      website: "https://www.umich.edu",
      info: "Michigan is a flagship public university with elite academics and nationwide recruiting power."
    },
    {
      name: "Georgia Tech",
      goal: "high-earning",
      debt: "roi",
      type: "public",
      location: "Atlanta, GA",
      deadline: "January 4",
      website: "https://www.gatech.edu",
      info: "Georgia Tech delivers exceptional ROI, especially in engineering and computer science."
    },
    {
      name: "Baruch College",
      goal: "high-earning",
      debt: "zero-debt",
      type: "public",
      location: "New York, NY",
      deadline: "February 1",
      website: "https://www.baruch.cuny.edu",
      info: "Baruch is known for finance and business outcomes with minimal student debt."
    },
    {
      name: "Cornell University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Ithaca, NY",
      deadline: "January 2",
      website: "https://www.cornell.edu",
      info: "Cornell offers Ivy League academics with strong engineering, agriculture, and business programs."
    },
    {
      name: "Duke University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Durham, NC",
      deadline: "January 4",
      website: "https://www.duke.edu",
      info: "Duke is a top research university with excellent pre-med, law, and business outcomes."
    },
    {
      name: "Northwestern University",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Evanston, IL",
      deadline: "January 3",
      website: "https://www.northwestern.edu",
      info: "Northwestern excels in journalism, economics, consulting, and engineering."
    },
    {
      name: "University of Chicago",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Chicago, IL",
      deadline: "January 2",
      website: "https://www.uchicago.edu",
      info: "UChicago is known for intellectual rigor, economics, and strong graduate placement."
    },
    {
      name: "Brown University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Providence, RI",
      deadline: "January 5",
      website: "https://www.brown.edu",
      info: "Brown offers an open curriculum emphasizing student-driven learning."
    },
    {
      name: "Rice University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Houston, TX",
      deadline: "January 4",
      website: "https://www.rice.edu",
      info: "Rice combines elite academics with small class sizes and strong STEM outcomes."
    },
    {
      name: "Vanderbilt University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Nashville, TN",
      deadline: "January 1",
      website: "https://www.vanderbilt.edu",
      info: "Vanderbilt is known for strong academics, student life, and medical research."
    },
    {
      name: "University of Virginia",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Charlottesville, VA",
      deadline: "January 5",
      website: "https://www.virginia.edu",
      info: "UVA blends liberal arts excellence with strong business and law pipelines."
    },
    {
      name: "UNC Chapel Hill",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Chapel Hill, NC",
      deadline: "January 15",
      website: "https://www.unc.edu",
      info: "UNC is a top-ranked public university with strong health and science programs."
    },
    {
      name: "University of Texas at Austin",
      goal: "high-earning",
      debt: "roi",
      type: "public",
      location: "Austin, TX",
      deadline: "December 1",
      website: "https://www.utexas.edu",
      info: "UT Austin provides elite academics and exceptional ROI in tech and business."
    },
    {
      name: "University of Washington",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Seattle, WA",
      deadline: "November 15",
      website: "https://www.washington.edu",
      info: "UW is a major research university with strong ties to tech and healthcare."
    },
    {
      name: "Penn State University",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "State College, PA",
      deadline: "November 30",
      website: "https://www.psu.edu",
      info: "Penn State offers strong engineering, business, and alumni networks."
    },
    {
      name: "Purdue University",
      goal: "high-earning",
      debt: "roi",
      type: "public",
      location: "West Lafayette, IN",
      deadline: "January 15",
      website: "https://www.purdue.edu",
      info: "Purdue is a leader in engineering and STEM education."
    },
    {
      name: "University of Wisconsin–Madison",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Madison, WI",
      deadline: "February 1",
      website: "https://www.wisc.edu",
      info: "UW–Madison is a top public research university with broad academic strengths."
    },
    {
      name: "New York University",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "New York, NY",
      deadline: "January 5",
      website: "https://www.nyu.edu",
      info: "NYU offers strong pipelines into finance, tech, media, and global careers through its NYC campus."
    },
    {
      name: "University of Pennsylvania",
      goal: "high-earning",
      debt: "zero-debt",
      type: "private",
      location: "Philadelphia, PA",
      deadline: "January 5",
      website: "https://www.upenn.edu",
      info: "UPenn combines Ivy League academics with top-ranked business and healthcare programs."
    },
    {
      name: "Johns Hopkins University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Baltimore, MD",
      deadline: "January 2",
      website: "https://www.jhu.edu",
      info: "Johns Hopkins is a global leader in medical research, public health, and STEM fields."
    },
    {
      name: "Carnegie Mellon University",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Pittsburgh, PA",
      deadline: "January 3",
      website: "https://www.cmu.edu",
      info: "CMU is renowned for computer science, engineering, robotics, and strong tech outcomes."
    },
    {
      name: "California Institute of Technology",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Pasadena, CA",
      deadline: "January 3",
      website: "https://www.caltech.edu",
      info: "Caltech offers elite STEM education with a strong focus on research and innovation."
    },
    {
      name: "University of Southern California",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Los Angeles, CA",
      deadline: "January 15",
      website: "https://www.usc.edu",
      info: "USC is known for business, film, engineering, and powerful alumni networks."
    },
    {
      name: "Emory University",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Atlanta, GA",
      deadline: "January 1",
      website: "https://www.emory.edu",
      info: "Emory excels in healthcare, business, and liberal arts education."
    },
    {
      name: "University of Notre Dame",
      goal: "research",
      debt: "zero-debt",
      type: "private",
      location: "Notre Dame, IN",
      deadline: "January 1",
      website: "https://www.nd.edu",
      info: "Notre Dame offers strong academics, ethics-focused education, and loyal alumni support."
    },
    {
      name: "Tufts University",
      goal: "research",
      debt: "roi",
      type: "private",
      location: "Medford, MA",
      deadline: "January 4",
      website: "https://www.tufts.edu",
      info: "Tufts is known for international relations, pre-med programs, and interdisciplinary study."
    },
    {
      name: "Boston College",
      goal: "high-earning",
      debt: "roi",
      type: "private",
      location: "Chestnut Hill, MA",
      deadline: "January 2",
      website: "https://www.bc.edu",
      info: "Boston College offers strong programs in finance, economics, and the liberal arts."
    },
    {
      name: "University of Maryland",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "College Park, MD",
      deadline: "January 20",
      website: "https://www.umd.edu",
      info: "UMD is a major public research university with strengths in CS, engineering, and policy."
    },
    {
      name: "University of Illinois Urbana-Champaign",
      goal: "high-earning",
      debt: "roi",
      type: "public",
      location: "Urbana-Champaign, IL",
      deadline: "January 5",
      website: "https://www.illinois.edu",
      info: "UIUC is a powerhouse in engineering and computer science with excellent ROI."
    },
    {
      name: "University of California, San Diego",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "San Diego, CA",
      deadline: "November 30",
      website: "https://www.ucsd.edu",
      info: "UCSD is known for research excellence in biology, engineering, and data science."
    },
    {
      name: "University of California, Irvine",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Irvine, CA",
      deadline: "November 30",
      website: "https://www.uci.edu",
      info: "UCI offers strong programs in health sciences, engineering, and computer science."
    },
    {
      name: "University of Minnesota",
      goal: "research",
      debt: "roi",
      type: "public",
      location: "Minneapolis, MN",
      deadline: "January 1",
      website: "https://www.umn.edu",
      info: "UMN is a major public research university with strengths across STEM and healthcare."
    }
  ];

  function renderColleges(list) {
    display.innerHTML = "";

    if (list.length === 0) {
      display.innerHTML = "<p>No colleges match your search or filters.</p>";
      return;
    }

    list.forEach(college => {
      const card = document.createElement("div");
      card.className = "result-card";
      card.innerHTML = `
        <div class="badge">${college.goal}</div>
        <h3>${college.name}</h3>
        <p>${college.info.substring(0, 120)}...</p>
      `;

      card.addEventListener("click", () => {
        modalTitle.textContent = college.name;
        modalSummary.textContent = college.info;
        modalLocation.textContent = college.location;
        modalDeadline.textContent = college.deadline;
        modalWebsite.href = college.website;
        modal.style.display = "flex";
      });

      display.appendChild(card);
    });
  }

  function applyFilters() {
    const activeFilters = Array.from(filters)
      .filter(f => f.checked)
      .map(f => f.value);

    const searchTerm = searchInput.value.toLowerCase();

    const filtered = colleges.filter(college => {
      const matchesFilters =
        activeFilters.length === 0 ||
        activeFilters.every(filter =>
          college.goal === filter ||
          college.debt === filter ||
          college.type === filter
        );

      const matchesSearch =
        college.name.toLowerCase().includes(searchTerm);

      return matchesFilters && matchesSearch;
    });

    renderColleges(filtered);
  }

  filters.forEach(f => f.addEventListener("change", applyFilters));
  searchInput.addEventListener("input", applyFilters);

  // ✅ NEW: clear button behavior
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    applyFilters();
    searchInput.focus();
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  renderColleges(colleges);
});

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
  menuPill.addEventListener("mouseleave", () => {
    if (activeLink) {
      moveNavBox(activeLink);
    } else {
      navBox.style.opacity = "0";
    }
  });
});