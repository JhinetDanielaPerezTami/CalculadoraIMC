document.addEventListener('DOMContentLoaded', () => {
    // Accedemos a los elementos del DOM
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const peso = document.getElementById('peso');
    const estatura = document.getElementById('estatura');
    const resultado = document.getElementById('resultado');
    const calcular = document.getElementById('calcular');
    const limpiar = document.getElementById('limpiar');
  
    // Evento para calcular IMC
    calcular.addEventListener('click', () => {
      const nombreVal = nombre.value.trim();
      const edadVal = edad.value.trim();
      const pesoVal = parseFloat(peso.value);
      const estaturaVal = parseFloat(estatura.value) / 100;
  
      if (nombreVal && edadVal && !isNaN(pesoVal) && !isNaN(estaturaVal) && estaturaVal > 0) {
        const imc = pesoVal / (estaturaVal * estaturaVal);
        let clasificacion = '';
  
        if (imc < 18.5) {
          clasificacion = 'Muy flaco (bajo peso)';
        } else if (imc < 24.9) {
          clasificacion = 'Peso normal';
        } else if (imc < 29.9) {
          clasificacion = 'Sobrepeso';
        } else if (imc < 34.9) {
          clasificacion = 'Obeso (grado 1)';
        } else if (imc < 39.9) {
          clasificacion = 'Obeso (grado 2)';
        } else {
          clasificacion = 'Extremadamente obeso (grado 3)';
        }
  
        resultado.textContent =
          Nombre: ${nombreVal}\n +
          Edad: ${edadVal} años\n +
          Peso: ${pesoVal} kg\n +
          Estatura: ${estatura.value} cm\n +
          IMC: ${imc.toFixed(2)}\n +
          Clasificación: ${clasificacion};
      } else {
        resultado.textContent = 'Por favor, completa todos los campos correctamente.';
      }
    });
  
    // Evento para limpiar campos y resultado
    limpiar.addEventListener('click', () => {
      nombre.value = '';
      edad.value = '';
      peso.value = '';
      estatura.value = '';
      resultado.textContent = 'Total IMC';
    });
  });