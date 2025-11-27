// ===== Mobile Menu Toggle =====
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('fa-xmark');
});

// ===== Close menu on nav link click =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});

// ===== Highlight Active Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });
};
