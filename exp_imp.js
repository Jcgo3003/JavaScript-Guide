// ------------------------- Exportación/Importación de funciones -------------------------
console.log('Exportacion/Importacion de funciones');
//- TENER multiples archivos y EXPORTAR sus funciones.
// - Si se hacen multiples export al archivo se le llama libreria
// - Si se hace un export default al archivo se le llama modulo
//
// Default export 			Named export	
// export default x      	export x  	
// import x from ...		import {x} from ...			

//- Exportación predeterminada -
console.log('\n- Exportarcion predeterminada');
// - Una UNICA exportación predeterminada por archivo o modulo. 
// - Para hacer un respaldo del valor de un archivo(modulo).
// - No es posible utilizar exportación predeterminada con variables(var, let o const).

export default function add(x, y) { 	// EXPORTAR en una sola linea.
	return x + y;
};

export default function(x, y) {			// EXPORTAR una Function anonima.
	return x + y;
}

export default;							// EXPORTAR debe estar al final del archivo.


// Exportacion predeterminada 
console.log('\n- Exportarcion predeterminada ');

function div(x, y) => (x, y);			// Declarar una funcion 

export { div as default};				// EXPORTAR como default


// * Solo puede haber un export default por archivo.

// Exportando funciones andes de declaraciones
console.log('- Export antes de declarations -');
export const NUMBER = 10;			// EXPORTAR una constante
export let n = [1, 2, 3, 4, 5];		// EXPORTAR una matriz
const add = (x, y) => (x + y)		// EXPORTAR funciones en especifico

export class User {					// EXPORTAR una classe
  constructor(name) {
    this.name = name;
	}
}
// NO ESCRIBIR ; despues de exportar una classe o funcion

// - Exportando multiples funciones
console.log('\n- Exportando Multiples funciones en una linea-');
const sub = (x, y) => (x - y);		// EXPORTAR funciones en especifico
const mul = (x, y) => (x * y);		// EXPORTAR funciones en especifico

export { sub, mul };				// EXPORTAR multiples funciones, constantes, etc
//* Debe estar al final del archivo.

// Exportar individualmente
console.log('\n- Exportar individualmente');
export const mult = (x, y) => (x * y); 	// EXPORTAR individualmente.


// Exportar individualmente
console.log('\n- Exportar mix');
export const mult = (x, y) => (x * y); 	// EXPORTAR individualmente.

export default div = (x, y) => (x / y); // EXPORTAR por default


// Exportar con un alias
console.log('\n- Export con un alias -');

export {add as suma, mul as multi }  // EXPORTAR con un alias


// --- IMPORTAR funciones predeterminadas ---
console.log('\n- Importando funciones predeterminadas -')
import add from "./funcion"; 	// NO SE ESCRIBE { } !!! 

// Porque solo debe haber una export defaut por archivo, la funcion default se renombra cuando la importas

// Importando funciones 
console.log('\n- Importando funciones -');  // IMPORTAR las funciones de diversos archivos.

import { add, anotherOne} from "./archivo";  // IMPORTANDO funciones en especifico

add(1, 10);
anotherOne('Something');

//	./ 	- Es necesario para indicar que el archivo esta en el mismo directorio.
// NO es necesario agregar la extension del archivo Javascript  .js

// IMPORTANDO funciones como un objeto
console.log('\n- Importando funciones como un objeto')
import * as mulFunctions from "./archivo"; // Importando todas las funciones de un archivo
// - Se creara un objeto misFunciones
// - El objeto tendrá todas las funciones exportadas en "miArchivo"
// - para acceder a las funciones lo horas de la misma manera que con un objeto.

mulFunctions.add(2, 4);					 //	INVOCANDO funciones importadas como objeto

// Import as
console.log('\n- Import con un alias -');

import {add as suma, mul as multi } from './archivo'; // IMPORTAR add con un alias
suma(12, 10);
multi(2, 2);

// Import mix
console.log('\n- Importar mix -')
import {default as User, sayHi} from './archivo';     // IMPORTAR una libreria modulo con default export y export


import * as funciones from './archivo';				  // IMPORTAR un libreria como objeto
let suma = funciones.default; 						  // INVOCAR el default export



