// ------------------------- Spread Operador | Operador de propagación --------------------------
console.log('Spread Operator/ Parametros Rest');

console.log('- Strings -');
let str = 'hello';					
console.log([...str]);				//-> [ 'h', 'e', 'l', 'l', 'o' ] 	CONVERTIR string en una matriz.


console.log('\n- Copiar -');
let viejaMatriz = [1, 2, 3];			
let nuevaMatriz = [...viejaMatriz];	// Permite COPIAR todos los elementos de una matriz.
console.log(nuevaMatriz);			// >> [ 1, 2, 3 ]

console.log('\n- Concat -');
// Concat matrices con el operador Spread, en donde sea
let esteArray = [ 'Hierbabuena', 'Epazote'];
let aquelArray = [ 'albahaca', ...esteArray, 'cilantro'];
console.log(aquelArray);			// >> [ 'albahaca', 'Hierbabuena', 'Epazote', 'cilantro' ]

// Parametros Rest - func(...args).
console.log('\n- Parametros Rest -'); 
function ejem1(...arg){			// Permite OBTENER un numero indefinido de argumentos.
	console.log(arg.length);
};

ejem1(1, 2, 3, 4, 5); 			// >> 5			
ejem1(1);			 			// >> 1

// - Combinacion con paramentros -
console.log('\n- Combinacion con parametros -');
function ejem2(a, ...args){		// Se pueden obtener paramentros posicionales y multiples parmentros.
	console.log(a);
	console.log(args);
};
ejem2(10, 1, 2, 3, 4, 5);		// >> 10
								// >> [ 1, 2, 3, 4, 5 ]

// Métodos disponibles en parámetros rest:
// map()
// filter()
// reduce()
