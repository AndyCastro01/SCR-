// Importa la biblioteca ScrollReveal
import ScrollReveal from 'scrollreveal';

// Inicializa la biblioteca ScrollReveal
ScrollReveal().reveal('.textoprincipal', {
  duration: 1000,   // Duración de la animación en milisegundos
  origin: 'bottom', // Dirección desde la que aparecerá el elemento
  distance: '50px', // Distancia desde la que aparecerá el elemento
  delay: 200,       // Retardo en milisegundos antes de que comience la animación
  easing: 'ease-in-out', // Tipo de animación
  reset: true       // Reiniciar la animación en cada desplazamiento
});
