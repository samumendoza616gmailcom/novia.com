const noButton = document.getElementById('noButton');

// Función para mover el botón a una posición aleatoria
noButton.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
});

// Función para mostrar respuesta
function showResponse(answer) {
  const response = document.getElementById('response');
  if (answer === 'yes') {
    response.textContent = "¡Sí! Me has hecho muy feliz 😊❤️";
  } else {
    response.textContent = "Oh no... 😢 ¿Estás segura?";
  }
  response.style.opacity = 1; // Hace visible el mensaje
}

