const canvas = document.getElementById("staticCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function generateStatic() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const randomNoise = Math.random() * 70; // Reduce la intensidad (0-100 en lugar de 0-255)
    data[i] = data[i + 1] = data[i + 2] = randomNoise; // Color gris oscuro
    data[i + 3] = 200; // Opacidad baja para suavizar
  }

  ctx.putImageData(imageData, 0, 0);
}

let glitchFrame = 0;

function animateStatic() {
  generateStatic();

  glitchFrame++;
  if (glitchFrame % 50 === 0) { // Cada 100 cuadros, se activa el glitch
    ctx.fillStyle = `rgba(255, 0, 0, 0.2)`; // Efecto glitch rojo
    ctx.fillRect(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      canvas.width * 0.5,
      canvas.height * 0.02
    );
  }

  if (glitchFrame > 1000) glitchFrame = 0; // Reiniciar el contador

  setTimeout(() => requestAnimationFrame(animateStatic), 10); // Movimiento más lento
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateStatic();
