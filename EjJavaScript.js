document.getElementById('verificarPalindromo').addEventListener('click', function() {
    verificarPalindromo();
  });
  
  function verificarPalindromo() {
    var palabra = document.getElementById('palabra').value.toLowerCase();
    palabra = palabra.replace(/\s/g, '');  //para eliminar todos los espacios en blanco de una cadena de texto en JavaScript.
  
    var caracteres = palabra.split('');
    var caracteresRevertidos = caracteres.reverse();
    var palabraRevertida = caracteresRevertidos.join('');
  
    if (palabra === palabraRevertida) {
      document.getElementById('resultado').innerHTML = '¡La palabra es un palíndromo!';
    } else {
      document.getElementById('resultado').innerHTML = 'La palabra no es un palíndromo.';
    }
  }

  document.getElementById('verificarMayor').addEventListener('click', function() {
    verificarNumeroMayor();
  });

  function verificarNumeroMayor() {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
  
    if (num1 > num2) {
      document.getElementById('resultadoNumeroMayor').innerHTML = 'El numero ' + num1 + ' es el mayor';
    } else if (num1 == num2){
        document.getElementById('resultadoNumeroMayor').innerHTML = 'El numero ' + num1 + ' es igual que el' + num2;
    } else{
        document.getElementById('resultadoNumeroMayor').innerHTML = 'El numero ' + num2 + ' es el mayor';
    }
    
  }


  document.getElementById('encontrarVocales').addEventListener('click', function() {
    encontrarVocalesFrase();
  });
  
  function encontrarVocalesFrase() {
    
    var frase = document.getElementById('fraseVocales').value.toLowerCase();
    var vocalesEncontradas = "";
    // Bucle a través de cada carácter en la frase
    for (var i = 0; i < frase.length; i++) {
      // Verificar si el carácter actual es una vocal
      if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
        // Agregar la vocal a la cadena de vocales encontradas
        vocalesEncontradas += frase[i];
      }
    }

    if (vocalesEncontradas !== "") {
      document.getElementById('resultado3').innerHTML = 'Las vocales encontradas en la frase son: ' + vocalesEncontradas;
    } else {
      document.getElementById('resultado3').innerHTML = 'No se encontraron vocales en la frase.';
    }
  }


  document.getElementById('encontrarNVocales').addEventListener('click', function() {
    encontrarNumeroVocalesFrase();
  });
  
  function encontrarNumeroVocalesFrase() {
    
    var frase = document.getElementById('fraseNVocales').value.toLowerCase();
    // Inicializar contadores para cada vocal
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;

    for (var i = 0; i < frase.length; i++) {
      // Verificar si el carácter actual es una vocal y aumentar el contador correspondiente
      switch (frase[i]) {
        case 'a':
          contadorA++;
          break;
        case 'e':
          contadorE++;
          break;
        case 'i':
          contadorI++;
          break;
        case 'o':
          contadorO++;
          break;
        case 'u':
          contadorU++;
          break;
      }
    }

    document.getElementById('resultado4').innerHTML = 'Número de veces que aparece la vocal a: ' + contadorA + '\n' + 'Número de veces que aparece la vocal e: ' + contadorE + '\n' + 
    'Número de veces que aparece la vocal i: ' + contadorI + '\n' + 'Número de veces que aparece la vocal o: ' + contadorO + '\n' + 'Número de veces que aparece la vocal u: ' + contadorU;
    
  }


