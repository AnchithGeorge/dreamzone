
// let slideIndex = 0;
// const slides = document.querySelectorAll('.lists .items');
// const dots = document.querySelectorAll('.dots li');

// function showSlides() {
//   slides.forEach((slide, index) => {
//     slide.style.display = (index === slideIndex) ? 'block' : 'none';
//     dots[index].classList.toggle('active', index === slideIndex);
//   });
// }

// function nextSlide() {
//   slideIndex = (slideIndex + 1) % slides.length;
//   showSlides();
// }


let currentSlide = 0;
const slidesToShow = 3; // Number of items to display at once
const servicesItems = document.querySelectorAll('.services-item');
const totalSlides = servicesItems.length;
const sliderWrapper = document.querySelector('.slider-wrapper');

// Calculate the width of a single slide dynamically
const slideWidth = servicesItems[0].offsetWidth;

function moveSlide(direction) {
    // Calculate the maximum number of slides that can be displayed
    const maxSlideIndex = totalSlides - slidesToShow;

    // Update current slide index
    currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlideIndex);

    // Move the slider by setting transform property (move by the width of one slide)
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}







