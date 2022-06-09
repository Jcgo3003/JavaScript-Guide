//////////////////////////////////////////////////////////////////////////////////////////
console.log('- Objetos -');  //   Objetos                                             ////
// -----------------------------------------------------------------------------------////
// - Colecciones de pares clave-valor(key-value).                                     ////
// - Las funciones dentro de los objetos se conocen como metodos.                     ////
// - No mantienen un orden en especifico.                                             ////
// - 'this', 'new' son palabras reservada para autoreferir datos.                     ////
//////////////////////////////////////////////////////////////////////////////////////////

console.log('\n- Declaracion -'); // Declaracion 
console.log('- new -');           // new palabra reservada utilizando un contructor 
let obj = new Object();           // DECLARANDO un nuevo objeto 
console.log(obj);                 // -> {}
let rtn = Object.keys(obj);       //  Obteniendo las llaves
console.log(rtn);                 // -> []

obj = new Object({'a':1,'b':2});  // DECLARANDO un nuevo objeto con un set
console.log(obj);                 // >> { a: 1, b: 2 }
console.log(obj['b']);            // >> 2
rtn = Object.keys(obj);           //  Obteniendo las llaves
console.log(rtn);                 // -> [ 'a', 'b' ]

// ADVERTENCIA! SOLO ASIGNAR SET's   
console.log('- Advertencia -');  
obj = new Object('a', 'b', 1, 2);// De no ser asi se crea un objeto corrupto - No sirve de nada
console.log(obj);                 // -> [String: 'a']
console.log(obj[String]);         // -> undefined
console.log(obj['0']);            // -> a
console.log(obj.z);               // -> undefined
//console.log(obj[a]);            // -> ReferenceError: a is not defined
rtn = Object.keys(obj);           //  Obteniendo las llaves
console.log(rtn);                 // -> ['0']

console.log('\n- Full declaration -'); // DECLARANDO un objeto; elemento por elemento + metodos
obj = {
    nombre: "Juan",                 // DECLARANDO elementos
    color: "green",
    code: true,
    show: function(){               // DECLARANDO metodos utilizando una function anonimal
        return `nombre: ${this.nombre} color: ${this.color}`; // this se utiliza para que la funcion utilice datos de detro del objeto
      }, // Sin 'this' se obtendria  ReferenceError: code is not defined

    // ADVERTENCIA no se puede declarar metodos con Arrow functions 
    // showCode: (x) => ({return this.code}) - SyntaxError: Unexpected token 'this'
    // showCode: (x) => {return this.code}      // -> undefined
    // showCode: (x) => (this.code)             // -> undefined
};

console.log(obj);                   // -> { nombre: 'Juan', color: 'green', ...
console.log(obj.show());            // -> nombre: Juan color: green
console.log(Object.keys(obj));      // -> [ 'nombre', 'color', 'code', 'show', 'showCode' ]
// console.log(obj.showCode());     // Si invocas un metodo inexitente ocurre un TypeError: obj.showCode is not a function

// Declarar métodos concisos 
console.log('\n- Declaracion de metodos ES5/ES6 -');
// - ES5
var person = {
  name: "Juan",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`; 
  } // En una definición de función, esto se refiere al "propietario" de la función.
};

console.log(person);           // -> { name: 'Juan', sayHello: [Function: sayHello] }
console.log(person.name);      // -> Juan
console.log(person.sayHello());// -> Hello! My name is Juan. 

// - ES6 -
person = {
    name: "Spike",
    sayHi() {
        return `Hi! My name is ${this.name}.`; 
    }
};

console.log(person);        // -> { name: 'Juan', sayHello: [Function: sayHello] }
console.log(person.name);   // -> Spike
console.log(person.sayHi());// -> Hi! My name is Juan. 

// Acceder elementos
console.log('\n- Acceder a parametros/metodos -');
rtn = obj.nombre; 	  // ACCEDER a elemento con . .|>> RETURN valor.
console.log(rtn);     // -> Juan
rtn = obj['code'];	  // ACCEDER a elemento con [].|>> RETURN valor. * Requerida si la propiedad tiene un espacio, o si se quiere utilizar una Variable.
console.log(rtn);     // -> true

// Metodos - importante agregar () al final de la invocacion.
rtn = obj.show();             // ACCEDER a un metodo con . .|>> RETURN valor.
console.log(rtn);             // -> nombre: Juan color: green
let showCode = obj['show'](); // ACCEDER a metodo con []().|>> RETURN valor.
console.log(showCode);        // -> nombre: Juan color: green

// Edición - Destructivo.
console.log('\n- Edicion Destructiva -');
obj = {
    nombre: "Juan",
    num: 10,
    show: function(){
        return `nombre: ${this.nombre} num: ${this.num}` // this se utiliza para que la funcion utilice datos de detro del objeto
    }
};

console.log('\- Agregar -');
rtn = obj.country = "Mx";  // AGREGAR/MODIFICAR elementos con . .|>> RETURN valor asignado.
console.log(obj);          // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx' }
console.log(rtn);          // -> Mx

obj['age'] = 12;		       // AGREGAR/MODIFICAR elementos con [].|RETURN valor asignado.
console.log(obj);          // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12 }

obj.mul = function(){     // AGREGAR metodos ES6
return this.age*2;}    
console.log(obj);          // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12,  mul: [Function (anonymous)}
console.log(obj.mul());    // -> 24

// ADVERTENCIA no utilizar jamas Arrow function para DECLARAR metodos
obj.mul = (x) => this.age*x;// AGREGAR metodos 
console.log(obj);          // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12,  mul: [Function (anonymous)}
rtn = obj.mul(2);          
console.log(rtn);          // -> NaN       El metodo siempre sale corrupto

// Delete 
console.log('\n- Eliminar -');
// - Solo es efectivo en las propiedades de un objeto, no tiene efecto en los nombres de variables o funciones.
// - ||>>RETURN true si removio la propieda, si no es falso
// - Si itentas borrar una propiedad que no existe, puede que delete RETURN true
// - No puede borrar un propiedad declarada con var.

rtn = delete obj.algo;	  // ELIMINAR elemento|>> RETURN true o false
console.log(rtn);         // -> true           INCLUSO si no existe ese parametro ha devuelto true
console.log(obj);         // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12,  mul: [Function (anonymous)}

// Para eliminar metodos
rtn = delete obj.show();  // intentar ELIMINAR un metodo de un objeto NO SE ELIMINA CON ESA SINTAXIS
console.log(rtn);         // -> true
console.log(obj.show());  // -> nombre: Juan num: 10      EL metodo sigue FUNCIONANDO y tambien dentro del objeto
console.log(obj);         // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12}

rtn = delete obj.show;    // ELIMINAR CORRECTAMENTE.
// console.log(obj.show());-> nombre: Juan num: 10 TypeError: obj.show is not a function
console.log(rtn);         // -> true 
console.log(obj);         // -> { nombre: 'Juan', number: 10, country: 'Mx', age: 12}

// IMPORTANTE Python vs JS    
rtn = delete obj;          // NO ES POSIBLE ELIMINAR un objeto de esta manera(como si lo es con una lista es Python).
console.log(rtn);          // -> false               
console.log(obj);          // -> { nombre: 'Juan', number: 10, show: [Function: show], country: 'Mx', age: 12}

// Objetos anidados
console.log('\n- Objetos anidados -');
let nestedObjec = {           // Un objeto puede tener multiples tipos de datos anidados
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

console.log(nestedObjec);     // >> { id: 28802695164, date: 'December 31, 2016', data: { totalUsers: 99, online: 80, onlineStatus: { active: 67, away: 13, busy: 8 } } }
rtn = nestedObjec.data;       // ACCEDIENDO a un objeto anidado
console.log(rtn);             // >> { totalUsers: 99, online: 80, onlineStatus: { active: 67, away: 13, busy: 8 } }

rtn = nestedObjec.data.online;// ACCEDIENDO a un objeto en especifico
console.log(rtn);             // >> 80

const users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// ACCEDIENDO a un dato anidado
console.log(users.Alan);       // >> { age: 27, online: false }

// ACCEDIENDO a un dato en especifico
console.log(users.Alan.age);   // >> 27 

// Methods 
console.log('\n- Metodos  -');

rtn = obj.hasOwnProperty("id");	// REVISAR si una propiedad existe|RETURN true o false. 
console.log(rtn);               // >> false

// Methods Object
console.log('\n- Metodos Object -');
rtn = Object.keys(obj);		    // OBTENER matriz llaves de un objeto||>> RETURN matriz con las llaves del objeto.
console.log(rtn);             // >> [ 'nombre', 'number', 'show', 'country', 'age' ]
rtn = Object.values(obj);     // OBTENER matriz valores de las llaves de un objeto||>>RETURN matriz con las llaves del objeto.
console.log(rtn);             // >> [ 'Juan', 10, [Function: show], 'Mx', 12 ]

// Object.freeze(objeto);	        // EVITAR mutaciones en objetos.
// rtn = delete objeto.nombre;    // 
// console.log(rtn);              // >> false

// - Methods a traves del objeto -
console.log('\n- Metodos a traves de objeto -');
// -Se pueden invocar metodos de cualquier tipo a traves de el objeto, ejem.
obj.lista = [1, 2, 3];
obj.lista.push(4);       // Interactuando con datos dentro de el objeto
obj.lista.push(5);       //
console.log(obj.lista);  // >> [ 1, 2, 3, 4, 5 ]


console.log('\n- In deep -');
console.log('- Object Property shourthand ES6');
// Concise Object Literal Declarations with Object Property Shorthand de ES6
// Consiste en declarar las llaves de un objeto utilizando un arrow function
let name = 'Juan', age = 32, team = 'uno';

let user = {                // DECLARANDO un objeto utilizando Object Property Shorthand
    name, age, team
}
console.log(user);          // -> { name: 'Juan', age: 32, team: 'uno' } 

user = (name, age, team) => ({name, age, team}); // USANDO Arrow function/Sintaxis de expresión literal y destructuring Asignament.
console.log(user);          // -> { name: 'Juan', age: 32, team: 'uno' }

user = (name, age, gender) => { // Equivalente al de arriva
  return {
    name: name,
    age: age,
    team: team
  };
};

let uno = user('Juan', 32, 'M');// Utilizando la funcion para crear un objeto

console.log(uno);             // -> {name: 'Juan', age:32; team:'uno'}
console.log(uno.constructor); // -> [Function: Object]  Al no haber sido creado por un contructor solo lo mostrara como Object
// constructor - muestra el nombre del constructor
console.log(typeof(user));    // -> function     user es una funcion 
console.log(typeof(uno));     // -> object       uno es un objeto

