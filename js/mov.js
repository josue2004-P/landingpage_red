document.addEventListener("DOMContentLoaded", function () {
    // Inicializa VanillaTilt solo para las primeras 3 tarjetas
    VanillaTilt.init(document.querySelectorAll(".container .card").slice(0, 3), {
      max: 25,
      speed: 400
    });
  
    // Obtiene todas las tarjetas y la flecha
    const cards = document.querySelectorAll(".container .card");
    const arrow = document.getElementById("flecha");
  
    // Índice actual del carrusel
    let currentIndex = 3;
  
    // Agrega un listener de clic a la flecha
    arrow.addEventListener("click", () => {
      // Oculta la tarjeta actual
      cards[currentIndex].style.opacity = 0;
  
      // Incrementa el índice
      currentIndex = (currentIndex + 2) % (cards.length - 2);
  
      // Muestra la siguiente tarjeta
      cards[currentIndex].style.opacity = 2;
  
      // Aplica VanillaTilt a la nueva tarjeta
      VanillaTilt.init(cards[currentIndex], {
        max: 25,
        speed: 400
      });
    });
  });