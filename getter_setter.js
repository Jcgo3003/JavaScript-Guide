console.log('\- Getters and setters -')// --- Getters and Setters ---
// - CONTROLAR el acceso a un objeto.
// Se puede obtener y modificar el valor de una propiedad de un objeto 
// dentro del mismo objeto.

// Funciones Getter RETURN el valor de un objeto privado sin 
// accesar directamente a la variable privada.

// Funciones Setter - MODIFICAR el valor de una variable privada 

// Objetos privados
// Se utilizan para esconder detalles de las implementaciones internas

class Book {
    constructor(author) {
        this._author = author;
    }
   get writer() {			            // Getter
        return this._author;
    }
    set update_Author(updatedAuthor) {	  // Setter
        this._author = updatedAuthor;
    }
}

const novel = new Book("anonymous"); 	// Creando nueva instancia
let book = novel.writer;	  	        // GETTER        
console.log(book);                    // >> Anonymous  
novel.update_Author = "newAuthor"; 		// SETTER
console.log(novel);                   // >> Book { _author: 'newAuthor' }  

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine = new CoffeeMachine(100);	  // Creando instancia.
console.log(coffeeMachine)                    // >> CoffeeMachine { _waterAmount: 0, _power: 100 }
coffeeMachine.waterAmount = -10;			        // Modificando parametros.
console.log(coffeeMachine)                    // >> CoffeeMachine { _waterAmount: 0, _power: 100 }
coffeeMachine.waterAmount = 10;              // Modificando parametros.
console.log(coffeeMachine)                    // >> CoffeeMachine { _waterAmount: 10, _power: 100 }
 
// Las propiedades protegidas tienen el prefijo de subrayado _ 
// antes del nombre de la variable privada, _author o _waterAmount.
