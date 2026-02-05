class Reference {
    // Add sourceURL here
    constructor(title, imageURL, sourceURL, altText, width, height) {
        this.title = title;
        this.imageURL = imageURL;
        this.sourceURL = sourceURL; // New property
        this.altText = altText;
    }

    displayDetails() {
        return `Title: ${this.title}, Source: ${this.sourceURL}`;
    }

    generateReferenceImageHTML() {
        return `
            <div class="team-member">
                <img src="${this.imageURL}" alt="${this.altText}" loading="lazy">
                <div class="member-info">
                    <span class="tags">Resource</span>
                    <h3>${this.title}</h3>
                    <p><a href="${this.sourceURL}" target="_blank" style="color: var(--russet); text-decoration: none;">View Official Source</a></p>
                </div>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuPill = document.querySelector(".menu-pill");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const navBox = document.querySelector(".nav-box");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      // Show the box
      navBox.style.opacity = "1";
      
      // Get the position/width of the link relative to the pill container
      const linkRect = e.target.getBoundingClientRect();
      const pillRect = menuPill.getBoundingClientRect();

      // Calculate the 'left' position and the 'width'
      const leftPos = linkRect.left - pillRect.left;
      
      navBox.style.width = `${linkRect.width}px`;
      navBox.style.transform = `translateX(${leftPos}px)`;
    });
  });

  // Hide the box when the mouse leaves the entire menu-pill
  menuPill.addEventListener("mouseleave", () => {
    navBox.style.opacity = "0";
  });
});


function openModal() {
    const modal = document.getElementById("copyrightModal");
    const listContainer = document.getElementById("modal-links-list");
    
    listContainer.innerHTML = "";

    referenceImageList.forEach(item => {
        const li = document.createElement("li");
        // Use sourceURL here
        li.innerHTML = `<a href="${item.sourceURL}" target="_blank">Source: ${item.title}</a>`;
        listContainer.appendChild(li);
    });

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("copyrightModal").style.display = "none";
}

// Close modal if user clicks anywhere outside of the white box
window.onclick = function(event) {
    const modal = document.getElementById("copyrightModal");
    if (event.target == modal) {
        closeModal();
    }
}


//under the class team members in reference page
// Update your referenceImageList in index.js
const referenceImageList = [
    new Reference("Graduated Students Throwing Hats", "../../Photos/image3.jpg", "https://www.pexels.com/photo/newly-graduated-people-wearing-black-academy-gowns-throwing-hats-up-in-the-air-267885/", "Graduation"),
    new Reference("Two People Shaking Hands", "../../Photos/image2.jpg", "https://www.pexels.com/photo/close-up-shot-of-two-people-shaking-hands-8276369/", "Handshake"),
    new Reference("Boy Reading Book", "../../Photos/image1.jpg", "https://pixabay.com/photos/boy-book-reading-literature-read-5731001/", "Reading"),
    new Reference("Calculator and Exam Paper", "../../Photos/grade11.jpg", "https://pixabay.com/photos/math-numbers-number-counting-5247958/", "Exam"),
    new Reference("People Holding Grad Caps", "../../Photos/grade12.jpg", "https://www.pexels.com/photo/a-group-of-person-holding-graduation-cap-8093039/", "Caps"),
    new Reference("Children Using Laptops", "../../Photos/grade9.jpg", "https://www.pexels.com/photo/children-using-laptop-5212653/", "Laptops"),
    new Reference("Scientist with Microscope", "../../Photos/grade10.jpg", "https://www.pexels.com/photo/female-scientist-using-microscope-in-laboratory-32213405/", "Science")
];


  
function loadReferenceImages() {
    try {
        const referenceContainer = document.getElementById('team-grid');

        if (typeof referenceImageList !== 'undefined') {
            referenceImageList.forEach(image => {
                referenceContainer.innerHTML += image.generateReferenceImageHTML();
                console.log(image.displayDetails());
            });
        }
        else {
            console.error("referenceImageList is not defined.");
        }
    }
    catch (error) {
        console.log(error);
    } 
}


loadReferenceImages();
