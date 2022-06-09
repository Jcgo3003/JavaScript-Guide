//////////////////////////////////////////////////////////////////////////////////////////
console.log('- Constructor -');// Constructores                                       ////
// -----------------------------------------------------------------------------------////
// - Método para crear e inicializar un objeto.                                       ////
// - Se define una función de constructor.                                            ////
// - Se utiliza 'new' para iniciar un objeto.                                         ////
// - Utiliza Concise Object Literal Declarations para declarar sus métodos.           ////
// - 'this', 'new' son palabras reservada del constructor.                            ////
// - 'class' es exclusivo de JS > ES6.                                                ////
//////////////////////////////////////////////////////////////////////////////////////////

console.log('- Object -');       // Object      Palabra reservada para crear instancias/objetos
// Si es llamado sin paramentros creará y devolverá un objeto vacío, con paramentros crea un wrapper objeto para un valor dado 
let ins = new Object({'a':1, 'b':2});// PARAMETROS deben ser expresados en un SET
console.log(ins);                // {a:1, b:2}      PARAMENTROS en set
console.log(Object.keys(ins));   // ['a', 'b']      Array de keys
console.log(Object.values(ins)); // [1, 2]          Array de values
console.log(ins.a);              // 1               Valor de key a.    

// ADVERTENCIA! SOLO ASIGNAR SET's   
ins = new Object('a', 'b', 1, 2);// De no ser asi se crea un objeto corrupto - No sirve de nada
console.log(typeof(ins));        // object
console.log(ins);                // [String: a]
console.log(Object.keys(ins));   // ['0']
console.log(Object.values(ins)); // ['a']
console.log(ins.a);              // undefined
console.log(ins.b);              // undefined
console.log(ins['0']);           // a
console.log(ins['1']);           // undefined

console.log('\n- Constructor con Function -');      
function con(name, age){         // Contructor con function ES5 
  this.name = name;              // 'this' palabra reservada para autorefenciar datos
  this.age = age;
}
console.log(typeof(con));        // -> function       Tipo de dato

con = function(name, age){       // Constructor con funcion con funcion anonima ES5
	    this.name = name;           
      this.age = age;
};

console.log(typeof(con));        // -> function       Tipo de dato

ins = new con('Candy', 10);	     // CREA una nueva instancia
console.log(ins);                // -> ejem { name: 'Candy' }
console.log(typeof(ins))         // -> object
console.log(ins.name);           // -> Candy          ACCEDER a un dato como en cualquier objeto

// Agregando metodos
console.log('\n- Metodos -');
con = function(name, age){        
  this.name = name;               // Datos a crear detro del objeto
  this.age = age;
  this.sayName = function(){      // METODO dentro del objeto
    return "Hello I'm " + this.name;// 'this'   para auto referenciar datos detro del objeto
  };
  this.sayAge = function(){        
    return "I'm " + this.age;
  }
}

console.log(con);                // -> [Function: con]
console.log(typeof(con));        // -> function       Tipo de dato

ins = new con("Mia", 2);          // CREANDO instancia
console.log(ins);                               
/* con {
      name: 'Mia',
      age: 2,
      sayName: [Function (anonymous)],
      sayAge: [Function (anonymous)] }*/

console.log(ins.age);                // -> 2                OBTENER datos
console.log(ins.sayName());          // -> Hello I'm Mia    Llamar funciones
console.log(ins.sayAge());           // -> I'm 2            
console.log(typeof(ins));            // -> object           Tipo de dato

// Agregando mas metodos post declaracion del contructor
console.log('\n- Agregando metodos post declaracion');
con.prototype.name_age = function(){
  this.name_age = `Hello I'm ${this.name} and I'm ${this.age} years old`;
  return this.name_age;
};
// ADVERTINCIA no utilizar arrowo functions para crear nuevos metodos. !!!
// con.prototype.abc = () => ({ this.age }); SyntaxError: Unexpected token '.' No
// con.prototype.abc = function(){
  // return this.age;
// }

console.log(con);                 // -> [Function: con]
ins = new con('Canelo', 6);       // Nueva instancia
console.log(ins);                 // -> con { name: 'Canel.. El nuevo metodo no aparece, aun asi EXISTE 
console.log(ins.name_age());      // -> Hello I'm Canelo and I'm 6 years old
console.log(Object.keys(ins));    // -> [ 'name', 'age', 'sayName', 'sayAge', 'name_age' ]
console.log(Object.values(ins));  // -> [ 'Canelo', 6, [Function (anonymous)], [Function (anonymous)],"Hello I'm Canelo and I'm 6 years old"


// ADVERTENCIA
console.log('\n- Advertencia -')
con.prototype.mul = function(num){
  this.mul = this.age * num;
  return this.mul;
};

ins = new con('Canelo', 6);       // Nueva instancia
/// LOS NUEVOS METODOS Y VALORES NO APARECERAN HASTA SER LLAMADOS
console.log(Object.keys(ins));    // -> [ 'name', 'age', 'sayName', 'sayAge' ]
console.log(Object.values(ins));    // -> [ 'Canelo', 6, [Function (anonymous)], [Function (anonymous)] ]
console.log(ins);                 // -> con { name: 'Canel.. Los nuevos metodos no aparecen, aun asi EXISTE 
console.log(ins.mul(3));          // -> 18
console.log(Object.keys(ins));    // -> [ 'name', 'age', 'sayName', 'sayAge', 'mul' ]
console.log(ins.name_age());      // -> Hello I'm Canel...        Parece que los metodos aparecen una vez que los utilizas.
console.log(Object.keys(ins));    // -> [ 'name', 'age', 'sayName', 'sayAge', 'name_age', 'mul' ]
console.log(Object.values(ins));    // -> [ 'Canelo', 6, [Function (anonymous)], [Function (anonymous)], 18 ]


console.log('\n- Arrow function/Sintaxis de expresión literal -')// NO es un CONSTRUCTOR! Object Property Shorthand - ES6.
let arrow = (name, age) => ({ name, age });   // CREA un objeto SENCILLO a traves de una funcion arrow usando destructuring Asignament
// arrow = (name, age) => ({ 'name':name, 'age':age });// La sintaxis sin destructuring Asignament

ins = arrow('Arenita', 5);          // CREA una objeto sin la palabra reservada new - 

console.log(arrow);                 // -> { name: 'Uno', age: 24 }  
console.log(typeof(arrow));         // -> object            
console.log(arrow.name);            // -> uno   ACCEDER a un dato

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---                                  ADVENTENCIA !                                               --- 
// ARROW FUNCTION no funciona para crear objetos o agregar metodos EVITAR A TODA COSTA. 
// ejem2 = (name, age) => ({this.name= name, this.age = age});// -> SyntaxError: Unexpected token '.'
// --- Tampoco soporta agregar mas funciones pos declaracion ---
// con.prototype.abc = () => {this.age};  //-> undefined     NO arrojara ERROR pero tampoco resultados 
// con.prototype.abc = () => ({this.age});//-> SyntaxError: Unexpected token '.'       ERROR!
// con.prototype.abc = () => { age };     //-> ReferenceError: age is not defined      ERROR!
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('\n- Class ES6 -')       // Class method
// Las clases son una plantilla para crear objetos.
// Las clases en JS se basan en prototipos, pero también 
// tienen alguna sintaxis y semántica que no se comparten con la semántica de clase ES5.

// Constructor con class
class con_class {				             // ES6.
	constructor(name, age) {	         // CONTRUCTOR se llama para crear los datos del objeto
	  this.name = name;                // this    para referirse a un dato detro de ella misma
    this.age = age;
	  }
  sayName(){                         // CREAR metodos el objeto
    return "Hello I'm " + this.name;
  }
  sayAge() {
    return "I'm " + this.age;
  }
};

// Agregando mas metodos
con_class.prototype.name_age = function(){ // AGREGANDO mas metodos
  return `Hello I'm ${this.name} and I'm ${this.age}`;
}

console.log(con_class);               // -> [class con_class]
console.log(typeof(con_class));       // -> function

ins = new con_class('Juan', 10);      
console.log(ins);                     // -> con_class { name: 'Juan', age: 10 }


console.log(ins.name)                 // -> Juan
console.log(ins.name_age())           // -> Hello I'm Juan and I'm 10

// Es posible expresarlas en una variable(como las funciones)
const Foo = class {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

// Extends - Herencias
console.log('\n- Extends -');         // HEREDAR  
class more extends con_class{
  constructor(name, age, country, color){
    super(name, age);                 // Super enlista los parametros que se heredaran(de no enlistarse no se tendran acceso a ellos)                 
    this.country = country;
    this.color = color;
  }
  all() {
    return `${this.name} ${this.country} ${this.color}`
  }
};


ins = new more('Juan', 10, 'Mx', 'green');
console.log(ins);                     // -> more { name: 'Juan', age: 10, country: 'Mx', color: 'green' }
console.log(ins.all());               // -> Juan Mx green
console.log(ins.name_age());          // -> Hello I'm JUan and I'm 10

// Metodos Contructores
console.log('\n- Metodos -');
rtn = ins.constructor;
console.log(rtn);                     // -> [class more extends con_class]      MUESTRA el nombre del constructor

// Ejemplo
console.log('\n- Ejemplo -');
function Rectangle(a, b){      
  this.height = a;          
  this.width = b;
  
  this.perimeter = function() {     
    return this.height*2 + this.width*2;
  },
  this.area = function() {
    return this.height * this.width;
  },
  this.otra = function(x) {       
    console.log(this.height * x);
  }
}

let rec = new Rectangle(2, 4);
console.log(rec);             // Rectangle { height: 2, ...
console.log(rec.height);      // 2
console.log(rec.width);       // 4
console.log(rec.perimeter()); // 12
console.log(rec.area());      // 8

// Built-in JavaScript Constructors
console.log('- Built-in JavaScript Constructors -');
// There is no reason to create complex objects, Primitive values are much faster:
// (String, Number, and Boolean).

// new String()    // A new String object
// new Number()    // A new Number object
// new Array()     // A new Array object

// new Function()  // A new Function object
// new Object()    // A new Object object
// new Set()       // A new Set object

// new Boolean()   // A new Boolean object

// new Date()      // A new Date object
// new RegExp()    // A new RegExp object

//////////////////////////////////////////////////////////////////////////////////////////
// ---                                  Conclusiones                                  --- 
// La función permite crear objetos con solo atributos.
// El constructor de ES5 revela todos los métodos de los objetos construidos.
// El constructor de ES6 revela solo los parámetros, pero no sus metodos.
//        Al declarar un objeto con ES5 o ES6 no hace diferencia al console.log()
// POR CONVENCION ES NESESARIO LLAMAR A LAS CLASES EN CAMEL CASE EMPEZANDO 
// POR MAYUSCULAS ejem.. SpaceShuttle, ZooAnimals
// En una función constructora esto no tiene valor. Es un sustituto del nuevo objeto. 
// El valor de this se convertirá en el nuevo objeto cuando se cree un nuevo objeto.