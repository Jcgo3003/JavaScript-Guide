////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('--- Funciones ---');// Funciones																												  //
// -------------------------------------------------------------------------------------------------- // 
// - Se consideran objetos de primera clase en JavaScript 																						//
// - Se pueden guardar en variables, almacenar en un objeto o pasar como argumentos de función.				//
// - Bloque de código diseñado para realizar una tarea en particular.																	//
// - La palabra clave de función se puede utilizar para definir una función dentro de una expresión. 	//
////////////////////////////////////////////////////////////////////////////////////////////////////////

function miFunc(x) {			 // DECLARANDO una función.
  return x * 2;						 // Con esta opcion la funcion se declara como var	
}

let s = miFunc(5);				 // ASIGNADO el resultado de una funcion.
console.log(s);						 // -> 10

console.log(typeof(miFunc));// -> function

miFunc = function(x) {			// DECLARAR una funcion como anonima en una variable.
	return x*x;								// NOTECE que miFunc fue declarado como funcion antes
};													// Lo que me permite reasignarla sin problemas
														// var miFunc = function(x) || miFunc = function(x)  la puedo declarar de ambas maneras

const otraFunc = function(x){ //ASIGNANDO una funcion anonima a una const
	return x*x*x;								
}
// otraFunc = function(x){	 otraFunc esta asignada a una const lo que provoca
//return x*x;}							 TypeError: Assignment to constant variable.

console.log(typeof(miFunc));	// -> number
console.log(miFunc(2)); 			// -> 4

//- Funciones anónimas 	- 
console.log('\n- Funciones anónimas -'); // Funciones que no tienen nombre
// - útiles cuando pasas una función como argumento de otra función(callback).
// - No necesitan un nombre porque no se reutilizaran de  nuevo.
// - Se  acede a ella mediante la variable donde esta almacenada.
var miFunc2 = function(x) {		// Se puede declarar una funcion como var, let, const
	return `hello world ${x}`;
};

console.log(miFunc2(10));

// Función arrow anonima - ES6 Sintaxis.
console.log('\n- Funciones arrow -');
let miFunc3 = () => {				// Funcion declarada como let
	return 'hello world';
};

s = miFunc3();
console.log(s);				// -> hello world

// Cuando la función solo regresa un dato se puede escribir en una sola linea.
miFunc3 = () => 'hello world'; // Funcion declarada como const

s = miFunc3();
console.log(s);		    // -> hello world

// Con parametros
let miFunc4 = (valor) => valor * 2;
s = miFunc4(5);
console.log(s);

// Si solo es un parámetro, se puede omitir paréntesis    
miFunc4 = valor => valor * 2;  
s = miFunc4(5);
console.log(s);

// Con dos parámetros	
const multi = (val1, val2) => val1 * val2; 
s = multi(1, 5);
console.log(s);

// Parametros predeterminados
const nombre = (country ,nom = "Juan") => "Hola " + nom + " " + country;
console.log(nombre('mx'));
console.log(nombre('mx' ,'Carlos')); // -> 

// Otras opciones
console.log('\n- Otras opciones -');
// Function() a traves de un constructor 
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(3,3));				// -> 6

// Detalles
console.log('\n- Detalles -');
console.log('- Constructores con function -');
let words = function(word){
	this.word = word;							// Lo unico que lo diferencia es que aqui se utiliza this
}
ins = new words('algo');			// CREANDO una instancia
console.log(ins);									// -> words { word: 'algo' }
console.log(ins.word);						// -> algo 
console.log(typeof(ins));					// -> object

console.log(words);							// -> [Function: word]
console.log(words('something'));// -> undefined					Llamando al constructor con un valor
console.log(words.word);				// -> undefined					Llamando a el valor dentro del constructor
console.log(typeof(words));			// -> function

words.prototype.join = function(otherword){	// AGREGANDO mas metodos al contructor
	this.word = this.word.concat(otherword);
}

ins = new words('algo mas');
console.log(ins)
ins.join(', mas aun');

console.log(ins);

// ADVERTENCIA - Evitar a costa todo lo relacionado a arrow functions y constructores
console.log('- Constructores con arrow function -'); 
words = (word) => {
	this.word = word;
}

// b = new words('algo mas');	  No es possible hacer un contructor con arrow function	
// Para eso ya existe el sintaxis class en ES6 

console.log(words);							// -> [Function: word]
console.log(words('something'));// -> undefined					Llamando a la funcion con un valor
console.log(words.word);				// -> undefined					Llamando a el valor dentro de la funcion
console.log(typeof(words));			// -> function

// ERROR !! tampoco es posible agregar mas paramentros a una funcion
// words.prototype.join = function(otherword){				// Definiendo la funcion con arrow function no permite utilizar prototype
// TypeError: Cannot set properties of undefined (setting 'join')
words.join = function(otherword){								// Pero de esta manera no hay problema.
	this.word = this.word.concat(otherword);
}
console.log(words);
ins = words('bla bla ');			// undefined 				
console.log(ins);
// console.log(ins.join('mas bla bla')); 

console.log('\n- DEEP -');
rtn = Math.min;											// GUARDAR funciones build-in en una variable

console.log(rtn(...[1,2,3,4]));			// -> 1

r = readline;												// 
print([...r(c=r())];								// IMPRIMIENDO Y EJECUNTANDO 2 funciones al mismo tiempo.


// Ver tambien 
// Sintaxis de expresion literal - Crear objetos con funciones
// Sintaxis crear un contructor 
