// Cambia automáticamente las imágenes o videos de fondo
let currentIndex = 0;
const backgrounds = [
  'img/fondo1.jpg',
  'img/fondo2.jpg',
  'img/fondo3.jpg'
];
const heroSection = document.getElementById('hero');

function changeBackground() {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  heroSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

setInterval(changeBackground, 5000); // Cambia cada 5 segundos

// Manejo del menú
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const sectionId = item.getAttribute('data-section');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Efecto hover en el portafolio
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});

// Muestra el formulario de contacto (opcional)
const contactButton = document.getElementById('contact-button');
const contactForm = document.getElementById('contact-form');

contactButton.addEventListener('click', () => {
  contactForm.classList.toggle('visible');
});
