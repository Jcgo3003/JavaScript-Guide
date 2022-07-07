// --------------------------- TRANSFORMACIONES ---------------------------
// - Data -
console.log('\n- Data -');
let i = 10;
let rtn = i.toString();			// INT to STRING
console.log(rtn);				// -> 10
console.log(typeof(rtn));		// -> String

console.log('- Cambiando de base con toString method -');
console.log('- Dec to Bin -');
i = 20;
let b = i.toString(2);          // INT to BIN
console.log(b);				    // -> 10100

// Negativos
n = -3;							// right logical shift | A zero fill right shift 
rtn = (n >>> 0);				// >>>   Convierte sus operandos en enteros de 32 bits con signo | Obliga a argumentos a enteros sin signo 
console.log(rtn); 				// 4294967293
console.log(typeof(rtn));		// number
rtn = rtn.toString(2);
console.log(rtn); 				// 11111111111111111111111111111101

console.log('\n- String to Int -');
str = '51';					    // STRING to INT
rtn = parseInt(str);
console.log(rtn);				// >> 51
console.log(typeof(rtn));		// -> number

str = '1234';
rtn = Number(str);
console.log(rtn);				// >> 10
console.log(typeof(rtn));		// -> number
// rtn = Number(readLine())		// Convierte en Number Object un input

// - char to ascii -
console.log('\n- char to ASCII -');// charCodeAt utiliza - UTF-16 -
str = 'bla';
rtn = str.charCodeAt(0);		// 
console.log(rtn);				// -> 98   

rtn = str.charCodeAt(1);		// 
console.log(rtn);				// -> 108

// - ascii to char - 
console.log('\n- ASCII to char');
rtn = String.fromCharCode(65);
console.log(rtn);				// -> A



// - Technical -
// charCodeAt() is UTF-16, codePointAt() is Unicode.
// charCodeAt() returns a number between 0 and 65535.
// Both methods return an integer representing the UTF-16 code of a character, 
// but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).


// // Collections
// console.log('\n- Collections -');

// console.log("\n- Lista -");
// t = (0, 1, 2, 3, 4, 5);			// TRANSFORMAR utilisando list function
// lista = list(t);					// Tuple to list
// console.log(f'Tuple {t} to {lista}');	// >> Tuple (0, 1, 2, 3, 4, 5); to [0, 1, 2, 3, 4, 5]
// s = {'uno', 'dos', 'tres'}		//	 
// lista = list(s);					// Set a list
// console.log(f'Set {s} to {lista}');	// >> Set {'tres', 'dos', 'uno'} to ['tres', 'dos', 'uno']

// str = 'abc dfg'					//
// lista = list(str);				// String to list of CHARS
// console.log(f'Str {str} to  {lista}');	// >> ['a', 'b', 'c', ' ', 'd', 'f', 'g']

// str = 'hij klm opq'				// STRING to list of words
// console.log(str.split(););				// >> ['hij', 'klm', 'opq']

// str = 'Ejemplo'					// STRING to char list
// console.log(*str);						// >> E j e m p l o


// // - Tuples -
// console.log("\n- Tuples -");
// l = [0, 1, 2, 3, 4, 5]		// TRANSFORMAR utilisando tuple function
// t = tuple(l);				// Lista a tuple
// console.log(f'lista {l} to  {t}');	// >> lista [0, 1, 2, 3, 4, 5] to  (0, 1, 2, 3, 4, 5);
// s = {'uno', 'dos', 'tres'}	// 
// t = tuple(s);				// Set a tuple
// console.log(f'Set {s} to  {t}');	// >> Set {'tres', 'dos', 'uno'} to ('tres', 'dos', 'uno');
// str = 'abc'					//
// t = tuple(str);				// String to tuple
// console.log(f'Str {str} to  {t}');	// >> Str abc to  ('a', 'b', 'c');

// console.log("\n- Set -");
// l = [0, 1, 2, 3, 4, 5]		// TRANSFORMAR utilisando tuple function
// s = set(l);					// Lista a set
// console.log(f'lista {l} to  {s}');	// >> lista [0, 1, 2, 3, 4, 5] to  {0, 1, 2, 3, 4, 5}
// t = ('uno', 'dos', 'tres');	// 
// s = set(t);					// Tuple to set
// console.log(f'Tuple {t} to  {s}');	// >> Set {'tres', 'dos', 'uno'} to ('tres', 'dos', 'uno');
// str = 'abc'					//
// s = set(str);				// String to set
// console.log(f'Str {str} to  {s}');	// >> Str abc to  ('a', 'b', 'c');