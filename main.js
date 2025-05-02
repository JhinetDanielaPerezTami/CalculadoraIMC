document.addEventListener('DOMContentLoaded', () => {
  const nombre = document.getElementById('nombre');
  const edad = document.getElementById('edad');
  const peso = document.getElementById('peso');
  const estatura = document.getElementById('estatura');
  const resultado = document.getElementById('resultado');
  const calcular = document.getElementById('calcular');
  const limpiar = document.getElementById('limpiar');
  const imagen = document.getElementById('imagen');

  calcular.addEventListener('click', () => {
    const nombreVal = nombre.value.trim();
    const edadVal = edad.value.trim();
    const pesoVal = parseFloat(peso.value);
    const estaturaVal = parseFloat(estatura.value) / 100;

    if (nombreVal && edadVal && !isNaN(pesoVal) && !isNaN(estaturaVal) && estaturaVal > 0) {
      const imc = pesoVal / (estaturaVal * estaturaVal);
      let clasificacion = '';
      let urlImagen = '';

      if (imc < 18.5) {
        clasificacion = 'Muy flaco (bajo peso)';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Underweight_icon.svg/1200px-Underweight_icon.svg.png';
      } else if (imc < 24.9) {
        clasificacion = 'Peso normal';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Healthy_Living_icon.svg/1200px-Healthy_Living_icon.svg.png';
      } else if (imc < 29.9) {
        clasificacion = 'Sobrepeso';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Overweight_icon.svg/1200px-Overweight_icon.svg.png';
      } else if (imc < 34.9) {
        clasificacion = 'Obeso (grado 1)';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Obesity_icon.svg/1200px-Obesity_icon.svg.png';
      } else if (imc < 39.9) {
        clasificacion = 'Obeso (grado 2)';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Obesity_2_icon.svg/1200px-Obesity_2_icon.svg.png';
      } else {
        clasificacion = 'Extremadamente obeso (grado 3)';
        urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Obesity_3_icon.svg/1200px-Obesity_3_icon.svg.png';
      }

      resultado.textContent =
        `Nombre: ${nombreVal}\n` +
        `Edad: ${edadVal} años\n` +
        `Peso: ${pesoVal} kg\n` +
        `Estatura: ${estatura.value} cm\n` +
        `IMC: ${imc.toFixed(2)}\n` +
        `Clasificación: ${clasificacion}`;

      imagen.src = urlImagen;
      imagen.alt = clasificacion;
      imagen.style.display = 'block';

    } else {
      resultado.textContent = 'Por favor, completa todos los campos correctamente.';
      imagen.style.display = 'none';
    }
  });

  limpiar.addEventListener('click', () => {
    nombre.value = '';
    edad.value = '';
    peso.value = '';
    estatura.value = '';
    resultado.textContent = 'Total IMC';
    imagen.style.display = 'none';
  });
});
