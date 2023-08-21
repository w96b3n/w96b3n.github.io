document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    var scrolled = window.scrollY > 0;
    navbar.style.backgroundColor = scrolled ? "rgba(34, 45, 36, 1)" : "rgba(34, 45, 36, 0.8)";
  });

// Inisialisasi saat halaman dimuat
var scrolledOnLoad = window.scrollY > 0;
navbar.style.backgroundColor = scrolledOnLoad ? "rgba(34, 45, 36, 1)" : "rgba(34, 45, 36, 0.8)";
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent default form submission

// Perform any necessary form validation or data processing here

// Show an alert after successful form submission
alert("Form submitted successfully!");

// Clear the input fields after submission
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("massage").value = "";
});

const carouselInner = document.querySelector(".carousel-inner");

carouselInner.addEventListener("mouseover", function () {
  const imageOverlay = this.querySelector(".image-overlay");
  imageOverlay.style.opacity = 1;
});

carouselInner.addEventListener("mouseout", function () {
  const imageOverlay = this.querySelector(".image-overlay");
  imageOverlay.style.opacity = 0;
});




document.addEventListener('DOMContentLoaded', function() {
  const jumbotron = document.querySelector('.jumbotroon');
  const findOutMoreLink = document.getElementById('find-out-more');

  function handleFindOutMoreClick(event) {
    event.preventDefault(); // Prevent default link behavior
    jumbotron.classList.add('show'); // Add show class to trigger animation
    window.scrollTo(0, jumbotron.offsetTop); // Scroll to the position of jumbotron
    findOutMoreLink.removeEventListener('click', handleFindOutMoreClick); // Remove click event listener after animation is triggered
  }

  findOutMoreLink.addEventListener('click', handleFindOutMoreClick);
});





