// About Section Carousel
const aboutCarousel = {
  currentIndex: 3, // Starting at 2020 (index 3)
  years: document.querySelectorAll('#about .year'),
  image: document.querySelector('#about .carrousel > img'),
  prevButton: document.querySelector(
    '#about .carrousel-nav button:first-child',
  ),
  nextButton: document.querySelector('#about .carrousel-nav button:last-child'),

  init() {
    this.prevButton.addEventListener('click', () => this.prev());
    this.nextButton.addEventListener('click', () => this.next());

    // Prevent year links from reloading page
    this.years.forEach((year, index) => {
      year.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToYear(index);
      });
    });
  },

  animateImage() {
    this.image.classList.add('changing');
    setTimeout(() => {
      this.image.classList.remove('changing');
    }, 600);
  },

  goToYear(index) {
    this.years[this.currentIndex].classList.remove('active');
    this.currentIndex = index;
    this.years[this.currentIndex].classList.add('active');
    this.animateImage();
  },

  prev() {
    this.years[this.currentIndex].classList.remove('active');
    this.currentIndex =
      (this.currentIndex - 1 + this.years.length) % this.years.length;
    this.years[this.currentIndex].classList.add('active');
    this.animateImage();
  },

  next() {
    this.years[this.currentIndex].classList.remove('active');
    this.currentIndex = (this.currentIndex + 1) % this.years.length;
    this.years[this.currentIndex].classList.add('active');
    this.animateImage();
  },
};

// Services Section Carousel
const servicesCarousel = {
  currentIndex: 1, // Starting at Branding (index 1)
  cards: document.querySelectorAll('#services .service-card'),
  prevButton: document.querySelector(
    '#services .carrousel-nav button:first-child',
  ),
  nextButton: document.querySelector(
    '#services .carrousel-nav button:last-child',
  ),

  init() {
    this.prevButton.addEventListener('click', () => this.prev());
    this.nextButton.addEventListener('click', () => this.next());

    // Make service cards clickable
    this.cards.forEach((card, index) => {
      card.addEventListener('click', () => this.goToCard(index));
      card.style.cursor = 'pointer';
    });
  },

  goToCard(index) {
    this.cards[this.currentIndex].classList.remove('active');
    this.currentIndex = index;
    this.cards[this.currentIndex].classList.add('active');
  },

  prev() {
    this.cards[this.currentIndex].classList.remove('active');
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.cards[this.currentIndex].classList.add('active');
  },

  next() {
    this.cards[this.currentIndex].classList.remove('active');
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.cards[this.currentIndex].classList.add('active');
  },
};

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Close mobile menu if open
          const menuToggle = document.getElementById('menu-toggle');
          if (menuToggle) {
            menuToggle.checked = false;
          }
        }
      }
    });
  });
}

// Button functionality
function initButtons() {
  // Hero "Recent Work" button
  const heroButton = document.querySelector('#hero button.primary');
  if (heroButton) {
    heroButton.addEventListener('click', () => {
      document.querySelector('#works').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // About "Contact Us" button
  const aboutButton = document.querySelector('#about button.primary');
  if (aboutButton) {
    aboutButton.addEventListener('click', () => {
      document
        .querySelector('#contacts')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Works "Contact Us" button
  const worksButton = document.querySelector('#works button.primary');
  if (worksButton) {
    worksButton.addEventListener('click', () => {
      document
        .querySelector('#contacts')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Jobs "Available Jobs" button
  const jobsButton = document.querySelector('#jobs button.primary');
  if (jobsButton) {
    jobsButton.addEventListener('click', () => {
      const firstJobCard = document.querySelector('.job-card');
      if (firstJobCard) {
        firstJobCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Contacts CTA buttons
  const ctaButtons = document.querySelectorAll('#contacts button');
  ctaButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Thank you for your interest! This is a demo site.');
    });
  });

  // Header "Contact Us" button
  const headerButton = document.querySelector('header button.dark');
  if (headerButton) {
    headerButton.addEventListener('click', () => {
      document
        .querySelector('#contacts')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Footer mobile menu functionality
function initFooterMenu() {
  const mobileMenu = document.getElementById('menu-mobile');
  if (mobileMenu) {
    mobileMenu.addEventListener('change', (e) => {
      const section = e.target.value;
      const target = document.querySelector(`#${section}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Add subtle fade-in on page load
function initPageLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
}

// Job cards interaction
function initJobCards() {
  const jobCards = document.querySelectorAll('.job-card');
  jobCards.forEach((card) => {
    card.addEventListener('click', () => {
      alert('Thank you for your interest! This is a demo site.');
    });
  });
}

// Project cards interaction
function initProjectCards() {
  const projectButtons = document.querySelectorAll('#works .card button');
  projectButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      alert('Thank you for your interest! This is a demo site.');
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initPageLoad();
  aboutCarousel.init();
  servicesCarousel.init();
  initSmoothScroll();
  initButtons();
  initFooterMenu();
  initJobCards();
  initProjectCards();
});
