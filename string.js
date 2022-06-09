//-------------------------------------- String --------------------------------------
console.log('- String -');
// - Los strings son inmutables

let str = 'string'; // DECLARANDO string
let rtn = '';

// Metodos
console.log('- Metodos -'); // Ningun metodo modifica el string original
str = ' ! string ! ';
rtn = str.trim();			// RETURN string con spacios ELIMINADOS antes y después del str.
console.log(rtn);			// ->! string !

rtn = str.substr(0, 4);		// EXTRAER partes de una cadena
console.log(rtn);			// -> ! s

rtn = str.slice(4, 9);		// EXTRAER un parte de una cadena
console.log(rtn);			// -> tring

rtn = str.toLowerCase();    // CREA una copia de un string en minúsculas todo
console.log(rtn);			// ->  ! string !

rtn = str.toUpperCase();	// CREA una copia de un string en mayusculas todo
console.log(rtn);			// -> ! STRING !  

rtn = str.concat("num"); 	// CONCATENAR dos strings en uno solo
console.log(rtn);			// -> ! string ! num

rtn = str + "bla"; 			// CONCATENAR dos strings en uno solo con operador +
console.log(rtn);			// -> ! string ! bla

rtn = str.replace("string", "num");// RETURN una copia de un string remplazando una parte
console.log(rtn);			// -> ! num !

rtn = str.charAt(1);		// ACCESAR a un caracter en especifico 
console.log(rtn);			// -> !

rtn = str.split("");		// RETURN lista DIVIDIDA, En este caso espacios(también acepta regex)
console.log(rtn);			// ->[' ', '!', ' ', 's', 't', 'r', 'i', 'n', 'g', ' ', '!', ' ']
rtn = str.split(/[si]/);	// RETURN lista sin lo valores REGEX 
console.log(rtn);			// ->[ ' ! ', 'tr', 'ng ! ' ] 

str = 'bla';
rtn = str.repeat(3);			// REPITE el str n cantidad de veces.
console.log(rtn);			// -> blablabla

// Transformar a String e
console.log('\n- Transformar a string -');
let m = ['a', 'b', 1, 2];
rtn = m.join(''); 			// RETURN string a partir de los elementos de una matriz.
console.log(rtn);			// -> ab12

rtn = m.toString();			// CREA un string a partir de un array, int, float, set,etc
console.log(rtn);			// -> a,b,1,2

let n = 10;
rtn = n.toString();			// int to String
console.log(n);				// -> 10 		Numero original no se modifica
console.log(rtn);			// -> 10		String nuevo

rtn = n.toString(2);		// int to String | DEC to BIN
console.log(rtn);			// -> 1010		String nuevo
rtn = n.toString(16);		// int to String | DEC to HEX
console.log(rtn);			// -> a		String nuevo

console.log('- Inversa - ');// parseInt - Acepta tanto int como strings.
rtn = parseInt(1010, 2);    // BIN to DEC
console.log(rtn);			// -> 10		

rtn = parseInt('a', 16);	// HEX to DEX
console.log(rtn);			// -> 10		


// Miscelanious
console.log('\n- Miscellaneous -');
console.log('- eval -');    // EJECUTA una operacion que este dada como string
rtn = eval('2 + 2');
console.log(rtn);			// -> 4

let op = '+';
s = '1 2 3 4 '.split(' ');
rtn = s.reduce((ac,x)=> eval(`${x} ${op} ${ac}`));
console.log(rtn);			// -> 10

n = 10.1494;
rtn = n.toFixed(2);			// FORMATEA un número usando notación de punto fijo
console.log(rtn);			// -> 10.15

str = 'hello';
rtn = str.charCodeAt(4);	// DE char a código ASCII | RECIBE como parametro el index del elemento a transformar   
console.log(rtn);			// -> 111

rtn = String.fromCharCode(80);// De código ASCII a char
console.log(rtn);			// -> P

rtn = String.fromCharCode(70, 75, 90);// fromCharCode acepta varias parametros
console.log(rtn);			// -> FKZ

rtn = 'hello world'.substring(3, 9);// Obtener un substring(como slice en matrices)
console.log(rtn);			// -> lo wor

rtn = 'hello world'.slice(3, 9);// Obtener un substring utilizando slice en matrices
console.log(rtn);			// -> lo wor
	// -> lo wor
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


