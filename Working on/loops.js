// Loops
// - Sirven para iterar sobre objetos iterables(array, etc.);

// - For -
console.log('- For -');// Iterar un numero de veces
console.log('- for classic -');
for(var i = 0; i < 3; i++){
	console.log(i);
}

// Quick for
console.log('- Quick for - ');
let counter = 5;
for(;counter-->0;)console.log(counter)
// -> 4					Pemite hacer un for loop hasta alcanzar un estado en particular
// -> 3					counter va a ser restado | al mismo tiempo que si counter > que 0
// -> 2					Se ejecutara el codigo for

// - - - IMPORTANTE - - - 
// My view is to ALWAYS use ++ and -- by themselves on a SINGLE LINE, as in:
// i++;
// array[i] = foo;
//
// - - instead of - -
//
// array[++i] = foo;
//

console.log('- for anidado - ');
let m = [
  [1,2], [3,4], [5,6]
];

for (var i=0; i < m.length; i++) {
  for (var j=0; j < m[i].length; j++) {
    console.log(m[i][j]);
  }
};


// for...in - ITERA itera sobre las propiedades enumerables de un objeto.
console.log('\n- for...in -');// for classico ES6 en arrays
let arr = ['a', 'b', 'c', 'd']

for(let i in arr){		// 
	console.log(i);		// -> 0
}						// -> 1	...

// ADVERTENCIA!!! i en este caso es un char, NO SE PUEDE SUMAR COMO UN INT 

// for...of  - ITERA sobre los VALORES que el objeto iterable.
console.log('\n- for...of -');// ITERAR sobre los elementos 
arr = ['a', 'b', 'c', 'd']

for(let i of arr){		// 
	console.log(i);		// -> a
}						// -> b ...

// for each ejecuta una función proporcionada una vez para cada elemento de la matriz.
console.log('\n- for each -');//
arr.forEach(x => console.log(x.toUpperCase()))// ITERAR sobre los elementos directamente
						// -> A
						// -> B ...



// While
console.log('\n- While loops- ');

var cuentaRegresiva = [];	//Variable para capturar una cuenta regresiva.
i = 10;			        //Variable de control
while (i > 0 ) {	
	cuentaRegresiva.push(i);//Agregando números
	i--;	  				// Variable de control.
};

console.log(cuentaRegresiva);//-> [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

// Do while | Garantiza que siempre se correra al menos una vez el código en su interior.
console.log('\n- do while -');

m = [];
i = 0;
do {					// Codigo a ejecutar
  m.push(i);	 		// agregando numeros
  i++;					// variable de control
} while (i < 5);		// Condicion

console.log(m); 		// -> [ 0, 1, 2, 3, 4 ]


// Programacion Funcional
console.log('\n- Programacion Funcional -');
console.log('\n- map -');
console.log('\n- filter -');
console.log('\n- reduce -');
// map
// reduce
// filtel