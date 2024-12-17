// Liste des images et des textes pour chaque diapositive
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

// Sélection des flèches et des points
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Diapositive actuelle
let currentSlide = 0;

// Mettre à jour l'image et le texte
function updateBanner() {
    const bannerImg = document.querySelector('.banner-img');
    const bannerTagline = document.querySelector('#banner p');
    let imagePath = "./assets/images/slideshow/";
    let imageName = slides[currentSlide].image;
    bannerImg.src = imagePath + imageName; // Changer l'image
    bannerTagline.innerHTML = slides[currentSlide].tagLine; // Changer le texte
}

// Ajouter les petits points (dots)
function addDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('dot_selected'); // Sélectionner le premier point
        }
        dotsContainer.appendChild(dot);
    }
}

// Mettre à jour les points
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].classList.add('dot_selected'); // Activer le point actuel
        } else {
            dots[i].classList.remove('dot_selected'); // Désactiver les autres points
        }
    }
}

// Quand on clique sur la flèche gauche
leftArrow.addEventListener('click', () => {
    currentSlide--; // Aller à la diapositive précédente
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Retourner à la dernière image
    }
    updateBanner();
    updateDots();
});

// Quand on clique sur la flèche droite
rightArrow.addEventListener('click', () => {
    currentSlide++; // Aller à la diapositive suivante
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Retourner à la première image
    }
    updateBanner();
    updateDots();
});

// Ajouter les points et afficher la première image
addDots();
updateBanner();
