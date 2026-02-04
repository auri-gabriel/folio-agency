// About Section Carousel
const aboutCarousel = {
    currentIndex: 3, // Starting at 2020 (index 3)
    years: document.querySelectorAll('#about .year'),
    image: document.querySelector('#about .carrousel > img'),
    prevButton: document.querySelector('#about .carrousel-nav button:first-child'),
    nextButton: document.querySelector('#about .carrousel-nav button:last-child'),
    
    init() {
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
    },
    
    animateImage() {
        this.image.classList.add('changing');
        setTimeout(() => {
            this.image.classList.remove('changing');
        }, 600);
    },
    
    prev() {
        this.years[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex - 1 + this.years.length) % this.years.length;
        this.years[this.currentIndex].classList.add('active');
        this.animateImage();
    },
    
    next() {
        this.years[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.years.length;
        this.years[this.currentIndex].classList.add('active');
        this.animateImage();
    }
};

// Services Section Carousel
const servicesCarousel = {
    currentIndex: 1, // Starting at Branding (index 1)
    cards: document.querySelectorAll('#services .service-card'),
    prevButton: document.querySelector('#services .carrousel-nav button:first-child'),
    nextButton: document.querySelector('#services .carrousel-nav button:last-child'),
    
    init() {
        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
    },
    
    prev() {
        this.cards[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.cards[this.currentIndex].classList.add('active');
    },
    
    next() {
        this.cards[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.cards[this.currentIndex].classList.add('active');
    }
};

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    aboutCarousel.init();
    servicesCarousel.init();
});
