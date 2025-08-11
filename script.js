// Botón de modo oscuro/claro
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Mensaje en consola
console.log("Portafolio cargado con éxito")

const btnUp = document.getElementById('btn-up');

// Mostrar u ocultar botón según scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
});

// Scroll suave hacia arriba al hacer clic
btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});