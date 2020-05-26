/*
    CALCULO DE LA LETRA DEL DNI CON JAVASCRPT.
    --------------------------------------------

    1. Preguntar al usuario por los numeros de su dni.
    2. Dividir el numero del DNI entre 23, lo que necesitamos es el resto de la división.
    3. Depende del resto eligiremos una letra o otra.

*/

var letrasDNI = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

var num_DNI = prompt('Introduce el numero de tu DNI: ( 00000000 )');


function verificar(dni) {
  var valido = false;
  var comprovacion = dni.toString().length;

  if (comprovacion < 8 | comprovacion > 8) {
    document.write(
      "<h4 class=\"main-contenido-error\">Numero de dni no válido, por favor vuelva a introducir su DNI</h4>"
    );
  } else if (comprovacion === 8) {
    valido = true;
  }

  return valido;
}

function calcular(dni) {
  if (verificar(dni)) {
    var calculo = dni % 23;
    var letraCorrecta = letrasDNI[calculo];
    document.write(`<h4 class=\"main-contenido-ok\">Tu DNI es: ${dni}-<strong>${letraCorrecta}</strong></h4>`);
  }
}

calcular(num_DNI);