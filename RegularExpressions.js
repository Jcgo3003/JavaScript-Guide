//----------------------------------- Expresiones regulares -----------------------------------
console.log('- Expresiones Regulares -');
// - Son patrones que ayudan a emparejar, buscar y reemplazar texto - /patron/.
// - Las expresiones regulares también son objetos.

//Metodos 
//---------------------------------------------------------------------------------------------
console.log('--- Metodos ---');
let str = 'string';                 // String.
console.log(str);                   // >> "string"
let regex = /string/;               // Patron a encontrar.
console.log(regex);                 // >> /string/

let test = regex.test('string');    // ENCONTRAR si dentro de un string se encuentra un reGex.
console.log(test);                  // >> true

test = str.match(regex); 		    // OBTENER las coincidencias en un string, RETURN Matriz con coincidencias.
console.log(test);                  // >> ["string"]

test = str.match(/\d/);            // Se puede escribir directamente el Regex en la funcion, RETURN Matriz con coincidencias.
console.log(test);                  // >> null

test = str.replace(regex, "REMPLAZO ");  // REMPLAZAR las coincidencias en un string, RETURN str con el remplazo.
console.log(test);                  // >> "REMPLAZO"

test = str.split(/[si]/);           // RETURN lista sin lo valores regex 
console.log(test);                  // -> [ '', 'tr', 'ng' ]

regex = new RegExp(str);            // CREANDO un objeto RegExp para asignarle una variable
console.log(regex);                 // -> /string/


// Escape - Getting rid of all malicious strings that may inject ramdon code, Ruby has RegExp.escape
mal = 'SELECT * FROM table_name;'
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

regex = new RegExp(escapeRegex(mal));
console.log(regex);                 // -> /SELECT \* FROM table_name;/


//Patrones
//---------------------------------------------------------------------------------------------
//- Letras y números - 
console.log('\n--- Letras y números ---');
regex = /[a-z]/;   	            // Encontrar de la a hasta la z(minúsculas).
console.log(str.match(regex));  // >> ["s"]
regex = /[0-9]/, str = 'ab12';	// Encontrar de 0 - 9.
console.log(str.match(regex));  // >> ["1"]

// - Negated character sets -
console.log('\n--- Negated character sets ---');
regex = /[^a-z^0-9]/, str = 'a_1';//- No encontrar carácteres /negated character sets.
console.log(str.match(regex));  //>> ["_"]      * Nota  . , !, [, @, / y espacios si serán encontrados.

//- Flags -
console.log('\n--- Flags ---');
regex = /[a-z]/i, str = 'AbcD';	 // Buscar sin discriminar el case
console.log(str.match(regex));   // >> ["A"]
regex = /[a-z]/g; 		         // Buscar globalmente.
console.log(str.match(regex));   // >> ["b", "c"]

// - Wildcard/Comodines -
console.log('\n--- Wildcard ---');
regex = /.t./, str = 'str';     // Encontrar coincidencias minimas de un solo caracter.
console.log(str.match(regex));  // >> ["str"]
regex = /o+/, str = 'good';		// Encontrar caracteres consecutivos(ejem. ss, ccc).
console.log(str.match(regex));  // >> ["oo"]
regex = /ex*/, str = 'explorer';// Encontrar serie de caracteres que ocurran cero o mas veces(ejem. go, goo, gooo, g)
console.log(str.match(regex));  // >> ["ex"] - Pero tambien encontrara e en solitario(rest >> ["e"]);
regex = /colou?r/, str = 'color'; // Encontrar caracteres que pueden existir o no (En este caso u)
console.log(str.match(regex));  // >> ['color']
str = 'colour';                 // Encontrar caracteres que pueden existir o no (En este caso u)
console.log(str.match(regex));  // >> ['colour']
regex = /ti[a-z]*?c/, str ='titanic';   // Lazy matching encontrar la maxima cantidad de matches
console.log(str.match(regex));  // >> ["titanic"]

//- Especificadores de cantidad -
console.log('\n--- Especificadores de cantidad ---');
regex = /A{2}/, str = 'AAAh';   // Quantity specifiers/Encontrar un valor especifico de valores de repetidos
console.log(str.match(regex));  // >> ["AA"]
regex = /A{2,}/, str = 'AAAAh'; // Para encontrar al menos 2 valores repetidos
console.log(str.match(regex));  // >> ["AAAA"]
regex = /a{3,5}/, str = 'aaaah';// Para encontrar valores repetidos en un rango de entre 3 y 5 a's(ahhhh)
console.log(str.match(regex));  // >> ["aaaa"]   * Es importante no separar las corcheas ( {3, 5} - no funcionara).

// Clases de character
console.log('\n--- Character Classes ---');
regex = /b[au]g/, str = 'bag';  // Encontrar coincidencias Exactas.
console.log(str.match(regex));  // >> 'bag'                
str = 'beg';
console.log(str.match(regex));  // >> null
str = 'bug';
console.log(str.match(regex));  // >> 'bug'

//- Principio/Final -
console.log('\n--- Principio/Final ---');
regex = /^fa/, str = 'fa i fu ';// Encontrar un patron en al comienzo de otro(regex.test(str) > true).
console.log(str.match(regex));  // >> ["fa"]
regex = /st$/, str = '1 st';    // Encontrar un patron al final de otro(regex.test(str) > true).
console.log(str.match(regex));  // >> ["st"]

//- Caracteres -
console.log('\n--- Caracteres ---');
regex = /\w/g, str = 'abc._%123';// Encontrar Caracteres del abecedario(Mayus y minus), números y _(/[A-Za-z0-9_]/)
console.log(str.match(regex));  // >> ['a', 'b', 'c', '_', '1', '2', '3']      . No fue coincidido.
regex = /\W/g;                   // No encontrar caracteres del abecedario(Mayus y minus), números y _
console.log(str.match(regex));  // >> ['.', '%']      . Es la unica coincidencia.
regex = /\d/g;		            // Encontrar solo dígitos([0-9])
console.log(str.match(regex));  // >> ['1', '2', '3']      
regex = /\D/;		            // No encontrar dígitos([^0-9])
console.log(str.match(regex));  // >> ["."]

//- Caracteres de escape -
console.log('\n--- Caracteres de escape ---');
regex = /\s/, str = 'abc 123';  // Encontrar espacios blancos
console.log(str.match(regex));  // >> [" "]
regex = /\S/;	 	            // No encontrar espacios blancos
console.log(str.match(regex));  // >> ["a"]
regex = /\r/, str = 'ab\r 12';  // Encontrar return >> ["
console.log(str.match(regex));  //                    "]
regex = /\t/, str = 'ab\t 12';  // Encontrar tab
console.log(str.match(regex));  // >> ["  "]
regex = /\n/, str = 'ab\n 12';  // Encontrar una linea nueva 
console.log(str.match(regex));  //  >> ["\n"]
regex = /\v/, str = 'ab\v 12';  // Encontrar vertical tab
console.log(str.match(regex));  // >> [""]
regex = /\f/, str = 'ab\f 12';	// Encontrar form feed
console.log(str.match(regex));  // >> [""]

//- Operadores -
console.log("\n--- Operadores ---");
regex = /yes|no|maybe/, str = 'yes';    // Agregar mas patrones a la búsqueda
console.log(str.match(regex));          // >> ["yes"]
regex = /yes|no|maybe/, str = 'no';    // Agregar mas patrones a la búsqueda
console.log(str.match(regex));          // >> ["no"]
regex = /yes|no|maybe/, str = 'maybe';    // Agregar mas patrones a la búsqueda
console.log(str.match(regex));          // >> ["maybe"]

// NOTA Syntaxis: Al agregar el operador OR es IMPORTANTE que el string/cadena a buscar este inmediatamente despues !!!
// |test  - Correcto! 
// | test - INCORRECTO

//Lookaheads/Búsqueda anticipada
//---------------------------------------------------------------------------------------------
console.log('\n--- Lookheads ---');
//- Positive lookahead 
regex = /(?=\w)/, str = 'blabla'; // Buscará asegurarse de que el elemento en el patrón de búsqueda esté allí, pero no coincidirá con él.
console.log(regex.test(str));   // >> true
console.log(str.match(regex));  // >> ['']

//- Negative lookahead -
regex = /(?!=\w)/;              // Buscará asegurarse de que el elemento en el patrón de búsqueda no esté 
console.log(regex.test(str));   // >> true
console.log(str.match(regex));  // >> ['g']

//- Ejemplos -
str = 'blabl1';                 // Ejemplo de password
regex = /(?=\w{3,6})(?=\D*\d)/; // Verificador de contraseña(simple), busca entre 3 y 6 caracteres y al menos un número:
console.log(regex.test(str));   // >> true      - En general se utiliza para hacer testing, en match no arroja nada.
console.log(str.match(regex));  // >> ['']

// Agrupacion Mixta
//---------------------------------------------------------------------------------------------
console.log('\n--- Agrupacion Mixta ---');
regex = /P(engu|umpk)in/gi, str = 'penguin';	    // Comprobar agrupación mixta de letras.
console.log(str.match(regex));                      // >> ['penguin']
str = 'pumpkin';                                    // De igual manera tambien funcionara para 'pumpkin'
console.log(str.match(regex));                      // >> ['pumpkin']

// Grupos de captura
//---------------------------------------------------------------------------------------------
console.log('\n--- Grupos de captura ---');
regex = /(\w+) \1 \1/;      // Encontrar palabras que ocurren multiples ocaciones
                            // Se coloca el grupo de captura entre parentesis.
// - ejemplo -
str = "test test test";
regex = /(test)(\s)\1\2\1/;
console.log(regex.test(str));  // Result will match whole test test test because:
                                        //  \1 repeats (test)
                                        //  \2 repeats (\s)
                                        // >> true

// Replace method
str = 'hello world';
console.log(str.replace(/(\w+)\s(\w+)/, '$2 $1'));  // Modificar el orden de las letras, ("$2$1") 
                                            // * Es importante colocar una separación entre el orden
                                            // >> world hello

// - Recetas Regex -
console.log('\n--- Recetas Regex ---');
regex = /^\s+|\s+$/g;  		// Encontrar espacios al inicio y al final de un string
console.log(str.match(regex));
regex = /^[^aeiou]+/;  	    // Encontrar todo menos vocales.
console.log(str.match(regex));
regex = /[aeiou]/gi;	    // Encontrar varias vocales a lo largo de un string
console.log(str.match(regex));
regex = /([a-z])([A-Z])/g;	// Encontrar palabras en mayusculas y minúsculas.
console.log(str.match(regex));
regex = /(?:_|\s)+/;		// Para encontrar "_" y espacios.
console.log(str.match(regex));
regex = /\s|_|(?=[A-Z])/;  // Este regex encuentra espacios, los descarta y encuentra letras que  estén lower case o empiecen por mayusculas.
console.log(str.match(regex));
regex = /\w/ig; // Obtener una matriz de un string.
console.log(str.match(regex));

//Recursos online
//-----------------------------------------------------------------------------------------
//https://fireship.io/lessons/regex-cheat-sheet-js/
//https://regexr.com/
//
// Temas a pulir 
//-----------------------------------------------------------------------------------------
// - Look heads
// - Grupos de captura