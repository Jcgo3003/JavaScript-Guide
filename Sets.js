console.log('- Set -'); // Sets
// - Objeto que permite almacenar valores únicos de cualquier tipo.
// - Colecciones ordenadas en el orden de insecion 
// - Iterarbles

// Declarando un set 
console.log('- Declarando -');
let s = new Set([1, 2, 3, 2]);// CREAR un set con constructor Set
console.log(s);				// -> Set(3) { 1, 2, 3 } 

// const s = new Set();		// Sin importar que sea const se puede editar
// s = {};		PERO no se puede modificar la declaracion inicial solo sus elementos - TypeError: Assignment to constant variable.
// Edicion
console.log('\n- Edicion -');
console.log('- Add -');    // AGREGAR elementos
let rtn = s.add(4);		   // AGREGAR elementos || Return el set
console.log(rtn);   	   // -> Set(4) { 1, 2, 3, 4 }
s.add(5);
s.add(1);				   // AUNQUE se agregue un elemento repetido este sera ignorado
console.log(s);			   // -> Set(5) { 1, 2, 3, 4, 5 }
s.add([1, 2]);   
console.log(s);			   // -> Set(6) { 1, 2, 3, 4, 5, [ 1, 2 ] }

// Delete
console.log('- Delete - ');// BORRAR elementos
rtn = s.delete(1);		   // RETURN false o true dependiendo si logro o no borrar un elemento
console.log(rtn);		   // -> true
console.log(s);			   // -> Set(5) { 2, 3, 4, 5, [ 1, 2 ] }

rtn = s.delete(10);
console.log(rtn);		   // -> false
console.log(s);			   // -> Set(6) { 1, 2, 3, 4, 5, [ 1, 2 ] }

rtn = s.delete([1, 2]);    // Set no es bueno para guardar mas colecciones, no las lee correctamente
console.log(rtn);		   // -> false
console.log(s);			   // -> Set(6) { 1, 2, 3, 4, 5, [ 1, 2 ] }

// Metodos 
console.log('\n- Metodos -');
rtn = s.has(1);				// SABER si un dato se encuentra detro de el set
console.log(rtn);			// -> true

rtn = s.has(100);			// 
console.log(rtn);			// -> false
rtn = s.has([1, 2]);		// NO es bueno encontrando otras colectiones
console.log(rtn);			// -> false 

rtn = s.size   				// RETURN tamano del Set
console.log(rtn);			// -> 6

rtn = s.values();            // RETURN un Iterador con todos los valores en un Conjunto
console.log(rtn);			 // -> [Set Iterator] { 2, 3, 4, 5, [ 1, 2 ] }

rtn = s.keys();              // RETURN un Iterador con todos los valores en un Conjunto
console.log(rtn);			 // -> [Set Iterator] { 2, 3, 4, 5, [ 1, 2 ] }

rtn = s.entries()            // RETURN un iterador con los pares [valor,valor] 
console.log(rtn);			 // -> [Set Entries] { [ 2, 2 ], [ 3, 3 ], [ 4, ...

console.log(s.forEach(x => x))// Invoca un callback function(value, key, set) para cada elemento
console.log(rtn);			  // -> undefined 

rtn = s.clear();             // BORRA todos los elementos 
console.log(rtn);			 // -> undefined

// Trucos
console.log('\n- Trucos -'); // Trucos
let a =  [1, 2, 1, 3, 2, 4]; 
let m = [...new Set(a)];    // Crear una matriz de elementos no duplicados
console.log(m);				// -> [ 1, 2, 3, 4 ]

a =  [1, 2, 1, 3, 2, [4, 1]];// La matriz preferentemente debe ser flat 
m = [...new Set(a)];     	// 
console.log(m);				// -> [ 1, 2, 3, [4, 1] ]



