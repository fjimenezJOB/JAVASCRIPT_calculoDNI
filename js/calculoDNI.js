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
// Definimos las letras, ordenadas para que el calculo sea correcto
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

// Definimos las constantes que vamos a utilizar mas tarde
const BOTON = document.getElementById("boton");
const INPUT_DNI = document.getElementById("dni");
const ARTICLE = document.getElementById("main-contenido_derecha");

function eliminarAnterior() {
  // Elimina el contenido de la anterior consulta para que no se acumule
  var padre = document.getElementById("main-contenido_derecha");
  var hijo = document.querySelectorAll("article")[0];
  // si el padre tiene mas de un hijo significa que ya hay un resultado a parte de la llamada de este script y lo elimina
  if (padre.children.length > 1) {
    hijo.parentNode.removeChild(hijo);
  }
}

function verificar(dni) {
  // Verificamos que el dni tenga la longitud correcta
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
  // hacemos el calculo de la letra con el dni ya comprobado
  var dniOk = false;
  if (verificar(dni)) {
    var numDni = Number(dni.slice(0, 8)); // extraemos los numeros del dni y lo pasamos a tipo Number.
    var letraDni = String(dni.slice(8,9)); // extraemos tambien la letra para convertirla a mayusculas, asi si el usuario introduce la letra en minuscula no pasa nada.
    letraDni = letraDni.toUpperCase(); // convertimos la letra que nos han introducido a mayusculas.
    var dniCorregido = numDni+letraDni; // corregimos el dni que nos han introducido con la letra mayuscula para comprobarla con el dni que salga con el calculo.
    var calculo = numDni % 23; 
    var letraCorrecta = letrasDNI[calculo]; // asignamos el resultado del calculo a la posición pertinente en el array de "letrasDNI" y extraemos la letra que nos devuelva.
    var dniCorrecto = numDni + letraCorrecta; // este es el dni con la letra que deberia tener a partir de los numeros del dni introducidos.
    if (dniCorrecto === dniCorregido) { // si el dni introducido no coincide con el del calculo, el dni será incorrecto.
      dniOk = true;
    }
    return dniOk;
  }
}

BOTON.addEventListener("click", function () {
  // Este evento se ejecuta cuando damos click en el boton "comporbar", elimina el resultado anterior y ejecuta un nuevo calculo. Después imprime el resultado en la web de nuevo.
  var dni = INPUT_DNI.value;
  eliminarAnterior();

  if (calcular(dni)) {
    var correcto = document.createElement("article");
    correcto.innerHTML = `<p class="deleteAfter">DNI: ${dni.toUpperCase()}<br><br><strong>CORRECTO</strong></p>`;
    correcto.className = "resultado";
    correcto.style.backgroundColor = "#56EF65";
    ARTICLE.appendChild(correcto);
  } else {
    var incorrecto = document.createElement("article");
    incorrecto.innerHTML = `<p class="deleteAfter">DNI: ${dni.toUpperCase()}<br><br><strong>INCORRECTO</strong></p>`;
    incorrecto.className = "resultado";
    incorrecto.style.backgroundColor = "#EF7A56";
    ARTICLE.appendChild(incorrecto);
  }
});
