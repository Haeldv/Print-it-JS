const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Select elements
const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Initialize slide index
let currentSlide = 0;

// Function to update the banner
function updateBanner() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
}

// Add dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // Highlight the first dot
    }
    dotsContainer.appendChild(dot);
});

// Function to update dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Add event listeners for arrows
leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to last slide
    updateBanner();
    updateDots();
});

rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    updateBanner();
    updateDots();
});

// Initial setup
updateBanner();
