const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

function updateBanner() {
    const bannerImg = document.querySelector('.banner-img');
    const bannerTagline = document.querySelector('#banner p');
    let imagePath = "./assets/images/slideshow/";
    let imageName = slides[currentSlide].image;
    bannerImg.src = imagePath + imageName;
    bannerTagline.innerHTML = slides[currentSlide].tagLine;
}

function addDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}

leftArrow.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateBanner();
    updateDots();
});

rightArrow.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateBanner();
    updateDots();
});

addDots();
updateBanner();
