// Math 
console.log("---------- Math -----------");
let rtn = 0;
let x = 0;
let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Buil-in
console.log('- Buil-in -');
x = 10.14923; 
rtn = x.toFixed(2);			// FORMATEA un número usando notación de punto fijo
console.log(rtn);			// -> 10.15

// modulo % 	
console.log('\n- Modulo -'); // Muestra el resto de lo que quedo de una division
console.log(5 % 3);		     // -> 2          Es el residuo de 5/3
console.log(6 % 3); 		 // -> 0 		  Es el residuo de 6/3		  
console.log(6 % 7);		     // -> 6          Es el residuo de 6/7          

console.log((2 % 2));		 // -> 0      	  Al ser par, el resultado es 0 -> false
console.log(2 % 2 == false)  // -> true	      Si el resulatdo es false -> 0   
console.log(2 % 2 === 0)	 // -> false      Si el resultado es 0 -> True
console.log(2 % 2 !== 0)	 // -> true		  Si el resultado no es 0 -> false


// - Metodos Math -
console.log('\n- Math -');
console.log('- Minimo - ');//OBTENER el numero mas pequeño(pasar los argumentos directamente o una lista con Destructuring asignament)  
rtn = Math.min(...l) 	// 
console.log(rtn);		// -> 1

console.log('- Maximo - ');// Truncar numeros
rtn = Math.max(...l) 	// OBTENER el numero mas grande.
console.log(rtn);		// -> 10 

console.log('- truncate - ');// Truncar numeros
rtn = Math.trunc(5.23); 
console.log(rtn);		// -> 5

console.log('- round - ');
rtn = Math.round(0.9);		// REDONDEAR un float
console.log(rtn);			// -> 1

console.log('- PI - ');		// π number
rtn = Math.PI;
console.log(rtn);			// -> 3.141592653589793

console.log('- Raiz cuadrada - ');// Raiz cuadrada 
rtn = Math.sqrt(16);
console.log(rtn);			// -> 4

console.log('- Pow - ');	// Potencia 
rtn = Math.pow(2, 3);	
console.log(rtn);			// -> 8

console.log('- numero absoluto - ');
rtn = Math.abs(-10);	
console.log(rtn);			// -> 10

// Metodos Number
console.log('\n- Metodos Number -')
console.log('- isInteger -');
rtn = 10;
console.log(Number.isInteger(rtn));   // -> true 
rtn = 'bla';
console.log(Number.isInteger(rtn));   // -> bla 


// # Operaciones entre tipos distitos
// print('\n- Operaciones entre distintos tipos -') # NO SE PARA QUE SIRVE O SI QUIERA COMO FUNCIONA!!!!!!!!! 
// print([-1, 3][True])		# >> 3
// print([3, -1][True])		# >> -1 	
// # print([True][3, -1])		# >> TypeError: list indices must be integers or slices, not tuple
// print()
// print([-1, 3][False])		# >> -1
// print([3, -1][False])		# >> 3 	
