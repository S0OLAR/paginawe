document.getElementById('no').addEventListener('click', function() {
    var botonSi = document.getElementById('si');
    var botonSiTransform = window.getComputedStyle(botonSi).transform;
    var escalaActual = botonSiTransform === 'none' ? 1 : parseFloat(botonSiTransform.split(',')[3]); 
    botonSi.style.transform = 'scale(' + (escalaActual + 0.1) + ')'; 
    this.textContent = 'Por favor';
    this.classList.add('por-favor');
  });
  document.getElementById('si').addEventListener('click', function() {
    var respuestaSi = document.getElementById('respuesta-si');
    var botones = document.querySelectorAll('button');
    var titulo = document.getElementById('titulo');
    var contenido = document.getElementById('contenido');
    respuestaSi.style.display = 'block';
    botones.forEach(function(boton) {
      boton.style.display = 'none';
    });
    titulo.style.display = 'none';
    contenido.style.display = 'none';
  });