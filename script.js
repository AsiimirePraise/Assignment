document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const toggle = document.getElementById("toggle");
  const navbarMenu = document.getElementById("navMenu");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });

  // Close menu when clicking nav links
  const navbarLinks = document.querySelectorAll("nav ul li a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      navbarMenu.classList.remove("active");
    });
  });

  // Close menu when i am outside
  document.addEventListener("click", function (event) {
    const insideNavbar =
      navbarMenu.contains(event.target) || toggle.contains(event.target);

    if (!insideNavbar && navbarMenu.classList.contains("active")) {
      toggle.classList.remove("active");
      navbarMenu.classList.remove("active");
    }
  });
});

// Hero section
const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function rotateSlides() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(rotateSlides, 6000);

// Feature Card Animations
const featureCards = document.querySelectorAll(".feature_card");
function checkVisibility() {
  featureCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      //delay depending on position
      const positionFactor = (cardTop / windowHeight) * 0.5;
      const delay = Math.min(index * 0.1, 0.6) + positionFactor;
      card.style.transitionDelay = `${delay}s`;
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
      card.style.transitionDelay = "0s"; // Reset
    }
  });
}

checkVisibility();
window.addEventListener("scroll", checkVisibility);
let isScrolling;
window.addEventListener(
  "scroll",
  function () {
    window.clearTimeout(isScrolling);
    // timeout
    isScrolling = setTimeout(function () {
      checkVisibility();
    }, 66);
  },
  false
);

// Modal
const modal = document.getElementById("modal");
const ctaButton = document.getElementById("cta-button");
const closeModal = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");

ctaButton.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Form Submission
const form = document.getElementById("signup-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your request! We will contact you soon.");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  form.reset();
});

// Scroll-to-top Button
const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Testimonial carousel
const cards = document.querySelectorAll(".testimonial-card");
let current = 0;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % cards.length;
  showSlide(current);
}

// 5 seconds
setInterval(nextSlide, 5000);
