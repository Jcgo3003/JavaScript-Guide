// -------------------------------------- String --------------------------------------
// - Es un objeto para representar y manipular una secuencia de caracteres.
// - Es inmutable NO puede modificarse

let str = ' abc ';			// DECLARANDO un string.
console.log(str[1]);		// >> a 		ACCESANDO a un char en especifico

str[1] = 'x';				// SON INMUTABLES !!!
console.log(str);			// >>  abc

// - Metodos -
console.log('\n- Metodos -');

let r = str.trim();			// RETURN string con los ESPACIOS ELIMINADOS, antes y después del str.
console.log(r);				// >> abc

r = str.split(""); 			// RETURN una matriz del string, (En este caso espacios pero también acepta regex)
console.log(r);				// >> [ ' ', 'a', 'b', 'c', ' ' ]

r = str.repeat(3); 			// RETURN un string con # de REPETICIONES.
console.log(r);				// >>  abc  abc  abc 


// - To string -
console.log('\n- To string -');
let lista = ['uno', 'dos', 3];// MATRIZ to STRING.

r = lista.join('-'); 		// RETURN un string hecha de los elementos de una matriz, (separado por "-").
console.log(r);				// >> uno-dos-3
console.log(lista);			// >> [ 'uno', 'dos', 3 ]		La lista queda intacta





// -       Escape sequences.      -
// --------------------------------
// \0 - NUL character(\u0000)
// \0 - The NUL character (\u0000)  
// \b - Backspace (\u0008)
// \t - Horizontal tab (\u0009)
// \n - Newline (\u000A)
// \v - Vertical tab (\u000B)
// \f - Form feed (\u000C)
// \r - Carriage return (\u000D) 
// \" - Double quote (\u0022)
// \' - Apostrophe or single quote (\u0027)
// \\ - Backslash (\u005C)
// \xnn - The Unicode character specified by the two hexadecimal digits nn
// \unnnn - The Unicode character specified by the four hexadecimal digits nnnn
// \u{n} - The Unicode character specified by the codepoint n, where 
// 	n is one to six hexadecimal digits between 0 and 10FFFF (ES6)


