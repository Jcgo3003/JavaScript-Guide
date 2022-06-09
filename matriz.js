//-------------------------------------- Matriz --------------------------------------
// - Colección de elementos de cualquier tipo(strings, int, bool, objetos)
// - Una matriz puede "mutar"/Modificar sus elementos
// - Las matrices son un tipo especial de objetos
// - Los arreglos usan números para acceder a sus elementos


// Acciones generales
console.log('\n- Acciones generales -');
console.log('\- Declarar -');
let matriz = [ ];				// DECLARANDO una matriz vacia.
matriz = ["a", "b", "c"];		// ASIGNANDO valores una matriz.
console.log(matriz);			// >> [ 'a', 'b', 'c' ]
matriz[3] = "d";
matriz[4] = "e";
matriz[5] = "f";
console.log(matriz);			// >> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

matriz = new Array(1, 2, 3, 4);	// CREANDO una matriz con el contructor matriz.
console.log(matriz);			// >> [ 1, 2, 3, 4 ]

// IMPORTANTE!!! new ¨Array(10)	- Si Array solo recibe un solo numero como argumento, creara un lista vacia [ <10 empty items> ]
// NO asi si el paramentro es un string new Array('bla'); >> [ 'bla' ]

let rtn = matriz[0];		  	// ACCESANDO el primer valor
console.log(rtn);				    // >> 1
rtn = matriz[matriz.length - 1];// ACCESANDO el ultimo valor
console.log(rtn);				    // >> 4


// - Edicion -	
console.log('- Edición - Destructivo.-'); // Edición - Destructivo.
matriz[1] = "str";				// ASIGNADO/MODIFICANDO un valor en una matriz.
console.log(matriz);			// >> [ 1, 'str', 3, 4 ]


// Agregar
console.log('\- Agregar -');
rtn = matriz.push("final");		  	// AGREGAR un elemento al FINAL ||>> RETURN tamaño final array. 
console.log(rtn);					// >> 5
console.log(matriz);				// >> [ 1, 'str', 3, 4, 'final' ]
rtn = matriz.unshift("inicio"); 	// AGREGAR un elemento al PRINCIPIO ||>> RETURN tamaño final array.
console.log(rtn);					// >> 6
console.log(matriz);				// >> [ 'inicio', 1, 'str', 3, 4, 'final' ]	

// TIP: AGREGAR mas de un elemento a la vez - matriz.unshift("I", 2, "three"); | matriz.push(7,"VIII", 9);

// Eliminar
console.log('\n- Eliminar -');
rtn =matriz.pop(); 				// ELIMINAR el ULTIMO elemento |>> RETURN elemento eliminado
console.log(matriz);			// >> [ 'inicio', 1, 'str', 3, 4 ]
console.log(rtn);				// >> final
rtn = matriz.shift();			// ELIMINAR el PRIMER elemento |>> RETURN elemento eliminado
console.log(matriz);			// >> [ 1, 'str', 3, 4 ]
console.log(rtn);				// >> inicio

console.log('\n- Splice -');	// ELIMINAR/AGREGAR elementos sucesivos de una matriz
matriz = [0, 1, 2, 3, 4, 5];    // Recibe 3 parámetros: Indice comenzo, NUMERO elementos a ELIMINAR, AGREGAR Elementos  
rtn = matriz.splice(1, 4); 		// REMOVER elementos consecutivos |>> RETURN Elementos eliminados
console.log(rtn);				// >> [ 1, 2, 3, 4 ]		Elementos con eliminados eliminados
console.log(matriz);			// >> [ 0, 5 ]				Matriz modificada
rtn = matriz.splice(1, 0, 4, 3, 2, 1)  
console.log(rtn);				// >> [ ]					
console.log(matriz);			// >> [ 0, 4, 3, 2, 1, 5 ]	Matriz con elementos agregados

console.log('\n- Sort -');					// Sort - Ordena los elementos de una matriz en su lugar ||>> RETURN matriz ordenada
matriz = [1, 30, 4, 21, 100000];			// Recibe 2 paramentros: Primer elemento de comparacion, Segundo elemento de comparacion.
rtn = matriz.sort();						// IMPORTANTE: Sort convierte los elementos en strings y compara sus secuencias en UTF-16, por lo que  [1, 30, 4, 21, 100000]  -> [1, 100000, 21, 30, 4]
console.log(matriz);						// >>  [ 1, 100000, 21, 30, 4 ]       La matriz original es modificada.
console.log(rtn);							// >>  [ 1, 100000, 21, 30, 4 ]	|| >> RETURN una matriz ordernada comparando sus secuencias de código UTF-16

matriz = [4, 2, 5, 1, 3];					// Ordenado correctamente agregando paramentros
matriz.sort((a, b) => a - b);				// Se tiene que agregar una funcion a sort para que pueda ordenar correctamente una serie de numeros
console.log(matriz);						// >> [ 1, 2, 3, 4, 5 ]

console.log('\n- Reverse -');				// INVIERTE los elementos de una matriz ||>> RETURN matriz invertida
rtn = matriz.reverse();						// 
console.log(matriz);						// >> [ 5, 4, 3, 2, 1 ]
console.log(rtn);							// >> [ 5, 4, 3, 2, 1 ]

// No destructivo.
console.log('\n- Metodos no destructivos -');
console.log('- Slice -');
// slice () - RETURN una COPIA de una matriz o de un número determinado de elementos en una nueva matriz.
// Recibe 2 parámetros:  índice de comenzo ,índice en el que detener la extracción(
matriz = [0, 1, 2, 3, 4, 5];
let otra_Matriz = matriz.slice (1, 3); 	// La extracción ocurrirá hasta un numero antes(sin incluir el elemento en este índice).
console.log(otra_Matriz);				// >> [ 1, 2 ] 					3 - 1 da el numero de elementos extraidos
console.log(matriz);				  	// >> [ 0, 1, 2, 3, 4, 5 ] 		Matriz original esta intacta.


matriz = ['red','green', 'blue', 0, 1];
rtn = matriz.indexOf('green');				// VERIFICAR la presencia de un elemento || >> RETURN índice del elemento(-1 si el elemento no existe).
console.log(rtn);							// >>  1		Recibe un solo parametro: Elemento a encontrar.
console.log(matriz.indexOf('yellow'));		// >> -1		Si el elemento no existe || >> RETURN -1		

// length
console.log(matriz.length);		 			// >> 5 		|| >> RETURN el numero de elementos en el array.

// Includes
console.log(matriz.includes('blue'));     // -> true
console.log(matriz.includes('black'));    // -> false

// isArray
rtn = Array.isArray(matriz);              // RETURN true si es una matriz
console.log(rtn);                         // -> true

// concat
console.log('\n- Concat -');				// Concatenar
let matriz1 = [1, 2, 3, 4];						// || Return 	matriz concatenada de dos matricez
let matriz2 = [5, 6, 7, 8];						// 
matriz = matriz1.concat(matriz2);			// 
console.log(matriz);						// >> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4   5,6,7,8			Las matrices permanecen sin cambios

// Spread Operador | Operador de propagación 
console.log('\n- Spread Operador | Operador de propagación -');
let viejaMatriz = [1, 2, 3, 4];
let nuevaMatriz = [...viejaMatriz]; // COPIAR todos los elementos de una matriz.
console.log(matriz);

// Concat matrices con el operador Spread, en donde sea
matriz = ['albahaca', 'cilantro', ...nuevaMatriz, 'cilantro'];
console.log(matriz);				// [ 'albahaca', 'cilantro', 1, 2, 3, 4, 'cilantro' ].

// - Copiar -
console.log('\n- Copiar -');
console.log('- Puntero -');
matriz1 = [1, 2, 3];					
matriz2 = matriz1;							// Para copiar no solo basta copiar la matriz
console.log(`${matriz1}   ${matriz2}`);		// >>  1,2,3   1,2,3  
matriz2.splice(3, 0, 4, 5, 6);				// Esto crea un puntero, lo que ocurra con una, ocurrira en la otra
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4,5   1,2,3,4,5 

console.log('- Array.from() -');
matriz1 = [1, 2, 3, 4];						// 
matriz2 = Array.from(matriz1)				// 
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4   1,2,3,4
matriz2.splice(5, 0, 5);					// Ambas matrices son independientes
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4   1,2,3,4,5

console.log('- Slice -');
matriz2 = matriz1.slice();					// CLONAR con slice - ES5
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4   1,2,3,4
matriz2.splice(4, 0, 5, 6);					// CLONAR una matriz, ambas matrices son independientes
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4   1,2,3,4,5,6

console.log('- Spread -');
matriz1 = [...matriz2];						// CLONAR con Spread Operador - ES6 - Shallow Copy
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4,5,6   1,2,3,4,5,6
matriz2.splice(7, 0, 7, 8);					// CLONAR una matriz, ambas matrices son independientes
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4,5,6   1,2,3,4,5,6,7,8


// IMPORTANTE Spread solo va un nivel de profundidad al copiar una matriz. NO FUNCIONA correctamente en matrices multidimensionales
console.log('- Shallow copy -');
matriz1 = [[1,2], [3,4],[5,[6]]];			// Shallow Copy
matriz2 = [...matriz1];						// 
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4,5,6   1,2,3,4,5,6
matriz2[1].splice(6, 0, 'Error');			// Las matrices NO son independientes!!!
console.log(`${matriz1}   ${matriz2}`);		// >> 1,2,3,4,Error,5,6   1,2,3,4,Error,5,6

// Objeto Array
console.log('\n- Array -');
rtn = Array(5);             // CREA un objeto tipo matriz/Array, utilizando metodos
console.log(rtn);           // -> [ <5 empty items> ]

// Metodos
console.log('- Metodos Array');
// Fill - MODIFICA una matriz, cambiando los valores con uno en particular; 
rtn = Array(3).fill(1);     // fill(value, start, end)  
console.log(rtn);           // [ 1, 1, 1, 1, 1 ]

// from()
// CREA una nueva instancia de Array de copia superficial a partir de un objeto iterable o similar a una matriz.
//                        map function  
// Array.from(arrayLike, (element, index) => { /* ... */ } )
rtn = Array.from('bla');
console.log(rtn);            // -> [ 'b', 'l', 'a' ]

rtn = Array.from({length:3}, (x, i) => i);//  El segundo paramentro es una funcion Map 
console.log(rtn);            // -> [ 0, 1, 2 ]

rtn = Array.from({length:3}, () => 'X');//  Utilizando un map sin paramentros, vacio.u 
console.log(rtn);            // ->[ 'X', 'X', 'X' ]

let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
console.log(range(0, 10, 2)); // -> [ 0, 2, 4, 6, 8, 10 ]
 
// Join
rtn = Array(3).join('X');   // RELLENANDO y juntando una Matriz con 'X' en un string
console.log(rtn);           // -> XX


// - Trucos -
console.log('\n- Trucos -');
matriz = [...Array(5).keys()];	// >> CONSTRUIR una lista de numeros susesivos
console.log(matriz);			// >> [ 0, 1, 2, 3, 4 ]

let numero_especifico = matriz.splice(matriz.indexOf(3), 1); // ELIMINAR un elemento en especifico. 
console.log(numero_especifico); // >> [ 3 ]
console.log(matriz);			// >> [ 0, 1, 2, 4 ]

// Accesando datos(complejo)
console.log('\n- Accesando datos(complejo) -');
const users = [							// una matriz de objetos
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

console.log(users[2]); 					// -> { name: 'camperCat', age: 10 }
console.log(users[2]["name"]); 			// -> camperCat


// Otros mas
console.log('\n- Otros -');
l = [2,3,4,5];
console.log(l.at(1));         // -> 3 ,  returns you the element with index 1.


console.log(l.includes(5));               // ->true , returns true if an array contains a specified value. / false if not found

console.log(l.find((x) => x > 4 ))        // -> 5 , returns the value of the first element that passes a test.

console.log(l.findIndex((x) => x > 4 ));  // 2 ,  returns the index of a first array element that satisfies the provided condition.


console.log(l.reverse());     // -> [5,4,3,2] , reverses the array | EDIT mode

console.log(l.fill(1));       // -> [1,1,1,1] , fills all the array values. | EDIT mode








