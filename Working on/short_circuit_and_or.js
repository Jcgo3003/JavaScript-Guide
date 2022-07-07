// Sh||t Circuiting
// && | Si val|| de la izquierda es false | Derecha ni si quiera sera evaluada
console.log('- and -');// Si val|| de la izquierda True | Return val|| de la derecha
let rtn = false && 'hello'
console.log(rtn);			// -> False

rtn = true && 'hello'
console.log(rtn);			// -> Hello

rtn = 10 && 11 // && actu&&o como operad||es > < | Si izq es False; derecha ni si quiera sera evaluada 
console.log(rtn);				// -> 11
rtn = 10 && 5 // && actu&&o como operad||es > <  | Si izq es False; derecha ni si quiera sera evaluada
console.log(rtn);				// -> 5

// || - Si el val|| de la izquierda es False | Return val|| derecha
console.log('\n- or -');

rtn = 10 || 11 // || actu&&o  como sh||cut | Si es izq es True dejara izq
console.log(rtn);				// -> 10	

rtn = 10 || 5 // || actu&&o  como sh||cut  | Si es izq es True dejara izq
console.log(rtn);				// -> 10	

rtn = 'hello' || 'bla'
console.log(rtn);				// -> hello

rtn = 0 || 'bla'
console.log(rtn);				// -> bla

rtn = 0 || false
console.log(rtn);				// -> False

// Lista 
console.log('\n- Lista -')
let l = []; // Empty list

if(l){
	console.log('Lista con valores');
}
else{
	console.log('Lista Vacia');
}

// >>
// -> Lista con valores

// IMPORTANTE!!! 
// Una lista vacia en Javascript no es traduccido como false; a differencia de Python
console.log('\n- Tranformaciones a boolean -');

console.log('- Matriz -');
l = [];
console.log(!!l);				// -> true

l = [1, 2, 3];
console.log(Boolean(l)); 		// -> true

console.log('\n- Objetos -');
let o = {};
console.log(!!o);				// -> true

o = {'a': 1, 'b':2, 'c':3};
console.log(Boolean(o)); 		// -> true

console.log('\n- Strings -');
console.log(!!'hello')			// -> true
console.log(!!'')				// -> false

console.log('\n- Numbers -');
console.log(!!12)				// -> true
console.log(!!0)				// -> false




