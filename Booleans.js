///Booleanos
console.log('- Booleanos - ');
// true  = Verdadero
// false = Falso 

// Operadores Booleanos de comparacion Javascript
// ==   -  Igual con Type Coercion, es decir comparando diferentes tipos de datos con una convercion.
// ===  -  Estrictamente igual.
// !=  -  Inigualdad con Type Coercion
// !==  -  Extricta Inigualdad.


// Operadores Booleanos de comparacion
// >   -  Mayor que
// >=  -  Mayor o igual que
// <   -  menor que
// <=  -  menor o igual que

// Operaciones logicas
// &&  -  Operador and
// ||  -  Operador or
// !   -  Not

// Convert -  | 0, NaN, and  empty string ("")  = false | other values true
console.log('\n- Convert - ');
let str = 'bla';
console.log(Boolean(str));		// -> true

str = '';
console.log(Boolean(str));		// -> false

let l = [1, 2, 3];
console.log(!!l);				// -> true

// IMPORTANTE !!! Matrices vacias no equivalen a false
l = [];				
console.log(!!l); 				// -> true

// Short-circuiting
console.log('- Short-circuiting - ');
console.log('- or -');
str = '';
rtn = str || 'Empty String'; // RETURN left value if can be converted to true -
console.log(rtn); 		  	 //  -> Empty String

str = 'Hello';
rtn = str || 'Empty string'; // RETURN left value if can be converted to true -
console.log(rtn); 		   //  -> Hello

l = [1, 2, 3];
rtn = l || 'Will not be returned'; // RETURN left value if can be converted to true -
console.log(rtn); 		   //  -> [1, 2, 3]

l = [];
rtn = l || 'Will not be returned'; // RETURN left value if can be converted to true -
console.log(rtn); 		   //  -> [1, 2, 3]

console.log(null || "user") // → user 
console.log("Agnes" || "user") // → Agnes

// And
console.log('- and -');
str = 'hello';
rtn = str && 'left is true' // RETURN right value if left is true
console.log(rtn);			// -> left is true

str = '';			
rtn = str && 'left is true'
console.log(rtn);			// -> ''


rtn = l && 'Matriz'; // RETURN right value if can be converted to true -
console.log(rtn); 		   //  -> []

l = [1, 2, 3];
rtn = l && 'Matriz '; // RETURN left value if can be converted to true -
console.log(rtn); 		   //  -> [1, 2, 3]

console.log(null && "user") // → null 
console.log("Agnes" && "user") // → user
