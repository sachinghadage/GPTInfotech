window.onscroll = function() {
  stickyNavbar();
};

const navbar = document.getElementById("navbar-custom");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  carousel.style.transform = `translateX(-${i * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

// Auto slide
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 6000); // Change every 6 seconds
