////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('- Currying y aplicacion parcial -');// Introducción al currying y aplicación parcial  																  //
// -------------------------------------------------------------------------------------------------------------- //
// - La aridad de una función es el número de argumentos que requiere. 
// - Currizar una función significa convertir una función de N aridad en N funciones de aridad
// - Es útil en su programa si no puede proporcionar todos los argumentos a una función a la vez.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Uncurried - funcion sin currizar
console.log('- Uncurried -');

function unCurried(x, y) {
  return x + y;
}
console.log(unCurried(1, 2));

// Curried - Funcion currizada
console.log('\n- Curried -');
function curried(x) {
	return function(y){
    	return x + y;
	}
}

console.log(curried(1, 2));		// -> [Function (anonymous)]
console.log(curried(1)(2));		// -> 3

// Curried arrow row
console.log('\n- Curried arrow row -');
curried = x => y => x + y;
console.log(curried(1, 2));		// -> [Function (anonymous)]
console.log(curried(1)(2));		// -> 3
 
// Usos
console.log('\n- Usos -');// Se utilizan para llaman una funcion cuando todos los argumentos estan disponibles
// - GUARDAR cada llamada de función en una variable

var funcForY = curried(1); 		// GUARDANDO la primer funcion con su argumento 
console.log(funcForY(2));       // INVOCANDO la variable que guarda la funcion mas es segundo argumento

// - Aplicacion parcial -
console.log('\n- Aplicacion parcial -');
// - Sirve para aplicar algunos argumentos a una función a la vez y devolver otra función que se aplica a más argumentos.
// - El método bind() crea una nueva función que, cuando se llama, tiene su palabra clave this 
//   establecida en el valor proporcionado, con una secuencia dada de argumentos que preceden a 
//   los proporcionados cuando se llama a la nueva función.

function impartial(x, y, z) {
  return x + y + z;
}

let partialFn = impartial.bind(this, 2, 3); //
console.log(partialFn(1));					// -> 6

console.log('\n- bond -');
let mod = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

let unboundGetX = mod.getX;    		// GUARDANDO la funcion en una variable
console.log(unboundGetX);	   		// -> [Function: getX ] 	INVOCANDO a lo que se guardo
console.log(unboundGetX());    		// -> undefined  		    INVOCANDO la funcion 
console.log(unboundGetX());    		// -> undefined  		    INVOCANDO la funcion 
console.log(unboundGetX.bind(mod)); // -> [Function: bound getX] CREANDO un vinculo con mod
console.log(unboundGetX.bind(mod)());// -> 42

let boundGetX = unboundGetX.bind(mod);// GUARDANDO la variable no vinculada, y vinculandola con mod
console.log(boundGetX()); 			 // -> 42

let res = mod.getX();
 		   // GUARDANDO el resultado de la funcion en una variable
console.log(res);	   		   // -> 42			RESULTADO
// console.log(unboundGetX2()); TypeError: unboundGetX2 is not a function