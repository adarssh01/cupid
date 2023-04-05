const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
      } else {
        entry.target.classList.remove("aos-animate");
      }
    });
  });

  const elements = document.querySelectorAll("[data-aos]");

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Get all the circles
var circles = document.querySelectorAll('.timeline__circle');

// Add data-aos attribute to each circle
circles.forEach(function(circle, index) {
  circle.setAttribute('data-aos', 'fade-in');
  circle.setAttribute('data-aos-delay', index * 200);
});

// Initialize AOS with desired options
AOS.init({
  offset: 100,
  duration: 800,
});