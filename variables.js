////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('- Variables -'); // Variables
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";  			// ACTIVAR el modo ESTRICTO que destaca errores comunes y acciones inseguras.

var v = "var";			// DECLARAR variables modificables con global scope
let l = "let";			// DECLARAR variables modificables con scope local.
const C = "const";		// DECLARAR variables inmutables, MAYUSCULAS obligatorio por convencion.

// let v = "var";	    // Solo puede ser declarada una sola vez - SyntaxError: Identifier 'v' has already been declared
v = 'something';		// Aunque si es mutable, se le puede reasignar un valor

let a = 8, b = 6;	    // DECLARAR multiples variables en una sola linea.

// Destructuring asignament 
console.log('\n- Destructuring asignament -');
let [x, y] = [1, 5];       			// ASIGNANDO datos a variables con Destructuring asignament
console.log(`x ${x} y ${y}`);       // -> a 1 b 2; 

// Tipos de datos
console.log('\n- Metodos -');	      
a = 1234;
b = 'Hello';
x = true;
y = undefined;
console.log('- typeof -');
console.log(typeof(a));				// -> number
console.log(typeof(b));				// -> string
console.log(typeof(x));				// -> boolean
console.log(typeof(y));				// -> undefined

console.log('\n- isInteger -');
console.log(Number.isInteger(a));   // -> true 



