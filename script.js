// Menu mobile, fechamento ao navegar e ano automático do rodapé.
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector(".navbar");
  const menuLinks = document.querySelectorAll(".menu a");
  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("open");
      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menu");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        navbar.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
});