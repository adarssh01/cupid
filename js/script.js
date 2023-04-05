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