document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleMode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
  });

  // Dropdown menu functionality
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
      menu.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
      menu.classList.remove("show");
    });
  });

  // Remove the window click event listener as it's no longer needed

  // Carousel functionality
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");
  const nav = document.querySelector(".carousel-nav");
  let currentSlide = 0;
  let slideInterval;
  const slideDelay = 5000; // 5 seconds

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    nav.children[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    nav.children[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlideshow() {
    stopSlideshow(); // Ensure any existing interval is cleared
    slideInterval = setInterval(nextSlide, slideDelay);
  }

  function stopSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function resetSlideshow() {
    stopSlideshow();
    startSlideshow();
  }

  // Create navigation dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(index);
      resetSlideshow();
    });
    nav.appendChild(dot);
  });

  // Add event listeners
  prevButton.addEventListener("click", () => {
    prevSlide();
    resetSlideshow();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetSlideshow();
  });

  carousel.addEventListener("mouseenter", stopSlideshow);
  carousel.addEventListener("mouseleave", startSlideshow);

  // Show first slide and start slideshow
  showSlide(0);
  startSlideshow();
});
