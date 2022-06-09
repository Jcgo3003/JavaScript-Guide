∞
console.log('Programacion funcional');// Programacion funcional                                              //
// --------------------------------------------------------------------------------------------------------- //
// - Estilo de programacion.
// - Forma de programación declarativa, se reciben instruciones llamando a un método o función.              //
// - Para evitar mutaciones y otros efectos secundarios se crean funciones                                   //
// - A cambiar o alterar cosas se llama mutación y el resultado se llama efecto secundario.                  //
// - Sin efectos secundarios fuera del alcance de la función: ENTRADA -> PROCESO -> SALIDA.                  //
// - Las soluciones son funciones simples, aisladas; no hay dependencia del estado del programa              //
// - Una función pura tiene la misma entrada siempre da la misma salida y no causa ningún efecto secundario. //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const prepareTea = () => 'greenTea'; // Funcion RETURN 'greenTea'.

let getTea = (numOfCups) => { // Funcion para obtener una lista con tes, entrada # de tazas, 
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    teaCups.push(prepareTea());
  }
  return teaCups;
};

let tea4TeamFCC = getTea(5);    
console.log(tea4TeamFCC);     // -> [ 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea' ]

// - Callbacks -
console.log('- Callbacks -'); 
// - Funciones que se pasan a otra función para que esta decida la invocación de la primer función. 
// - Funciones de primera clase - funciones que se pueden asignar a una variable o función(En JavaScript, todas las funciones son funciones de primera clase.)
// - Funciones de higher order/orden superior - funciones que reciben una función como argumento o devuelven una función como valor de retorno.  
// - Funciones lambda. - funciones que se pasaron o devolvieron desde otra función.

const prepareGreenTea = () => 'greenTea';// CALLBACK 
const prepareBlackTea = () => 'blackTea';// CALLBACK

getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    teaCups.push(prepareTea());
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 2);// -> [ 'greenTea', 'greenTea' ]
const tea4BlackTeamFCC = getTea(prepareBlackTea, 5);// -> [ 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea' ]

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);

console.log('\n- Reglas -');
console.log('\- No modificar variables externas -');
// En programacion funcional no se modifican las variables externas o globales.
let fixedValue = 4;            // Global variable.

// let incrementer = () => fixedValue + 1; // la variable global debe permanecer IGUAL!.

let incrementer = function(){
  var fixedValueMirror = fixedValue;  // Creando una copia de la variable global
  return fixedValueMirror += 1;
}
console.log(fixedValue);    // -> 4
console.log(incrementer()); // -> 5

console.log('\n- Declarar dependencias de forma explicita -');
// - Declarar las dependencias de forma explícita, si la función depende de una variable u objeto, se debe declarar como un argumento.
// - Se deben pasar argumentos para evitar la dependencia externa de valores en una función funcional.
// - La función siempre produciría la misma salida para el mismo conjunto de entradas.

fixedValue = 4;

incrementer = function(fixedValue) {
    var fixedValueMirror = fixedValue;
     return fixedValueMirror += 1;
}

console.log(fixedValue);              // -> 4
console.log(incrementer(fixedValue)); // -> 5
