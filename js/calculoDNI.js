/*
    Autor: Fran Jimenez
    email: fjimenezjob@gmail.com
    Version: 2.0


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

const BOTON = document.getElementById("boton");
const INPUT_DNI = document.getElementById("dni");
const ARTICLE = document.getElementById("main-contenido_comprovacion");

function verificar(dni) {
  var valido = false;
  var comprovacion = dni.toString().length;

  if (comprovacion === 9) {
    valido = true;
  } else if ((comprovacion > 9) | (comprovacion < 9)) {
    valido = false;
  }

  return valido;
}

function calcular(dni) {
  var dniOk = false;
  if (verificar(dni)) {
    var dniCortado = Number(dni.slice(0, 8));
    var calculo = dniCortado % 23;
    var letraCorrecta = letrasDNI[calculo];
    var dniCorrecto = dniCortado + letraCorrecta;
    if (dniCorrecto === dni) {
      dniOk = true;
    }
    return dniOk;
  }
}

BOTON.addEventListener("click", function () {
  var dni = INPUT_DNI.value;

  if (calcular(dni)) {
    var correcto = document.createElement("article");
    correcto.innerHTML = `DNI: ${dni} es <strong>CORRECTO</strong>`;
    ARTICLE.appendChild(correcto);

  } else {
    var incorrecto = document.createElement("article");
    incorrecto.innerHTML = `DNI: ${dni} es <strong>INCORRECTO</strong>`;
    ARTICLE.appendChild(incorrecto);
  }
});