// - Prototyping -
// - Agregar mas funciones a los Objetos(En JS todo es un objeto!!!).

// Ejem Implementar mapa en un prototipo

let l = [ 1, 2, 3, 4, 5 ];

Array.prototype.myMap = function(callback) {// AGREGA un nuevo metodo al objeto Array myMap 
  let newArray = [];
  console.log(this);						// -> [ 0, 1, 2, 3, 4, 5 ]    this proporciona acceso al objeto 

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));   	// Callback/funcion es aplicado a cada uno de los elementos del objeto
  }					  											
  return newArray;			  
};

let rtn = l.myMap(x => x*x);
console.log(rtn);


