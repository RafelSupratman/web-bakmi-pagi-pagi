const faqs = document.querySelectorAll(".faq_item");

faqs.forEach(item => {
  const question = item.querySelector(".faq_question");

  question.addEventListener("click", () => {
    faqs.forEach(faq => faq.classList.remove("active"));
    item.classList.add("active");
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".commitment_image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".commitment_content .section_header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".commitment_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".commitment_list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".build_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".build_content .section_header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".build_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".build_grid li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,   
    spaceBetween: 20,       
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });