/* =========================
EFEITO DE SCROLL NO HEADER
========================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.background = "rgba(8,47,124,0.98)";
  } else{
    header.style.background = "rgba(8,47,124,0.90)";
  }

});

/* Scroll suave extra */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});

/* =========================================
MENU HAMBURGUER
========================================= */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

});

/* FECHAR MENU AO CLICAR */

document.querySelectorAll(".menu a").forEach(link => {

  link.addEventListener("click", () => {

    hamburger.classList.remove("active");
    menu.classList.remove("active");

  });

});