// Variables

console.log('\n- var -');
var x = 1;				// Declarando una variable con var 
console.log(x);			// >> 1
 

console.log('\n- let -');

let y = 2;				// DECLARAR variables modificables.
console.log(y);			// >> 2			
// let y = 10;      		// >> SyntaxError: Identifier 'y' has already been declared - *Solo puede ser declarada una sola vez.

console.log(y);    		// >> Algo
let a = 8, b = 6;	  	// DECLARAR multiples variables en una sola linea.

console.log(a);			// >> 8
console.log(b);			// >> 6

const TU_VAR = "Algo"; 	// DECLARAR variables de solo lectura inmutable.
			  			// * Se declaran en MAYUSCULAS preferentemente.
console.log(TU_VAR);	// >> Algo			  			

"use strict";  			//ACTIVAR el modo ESTRICTO que destaca errores comunes y acciones inseguras.



console.log('\n- const -');
const z = 5;			// DECLARAR variables modificables.
console.log(z);			// >> 5			
// let y = 10;   

// - Floats -
console.log('\n- Floats -');
let float = 3.1416;
let print = parseFloat(float).toFixed(0); 		// IMPRIMIR solo 2 decimales
console.log(print);

// IMPORTANTE !!!
// ¡NUNCA declarar strings, números y booleanos como objetos!
// x = new String();        
// y = new Number();        
// z = new Boolean(); 
// Complican el código y ralentizan la velocidad de ejecución.