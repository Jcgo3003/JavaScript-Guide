// Switch javascript
console.log('\n- Switch -')
// - Evalúa el resulato de una expresión, haciendo coincidir el valor de la expresión
//   con una cláusula de caso(usando comparacion estricta '==='').
// - Ejecuta sentencias asociadas con ese caso
// - Los casos son evaluados estrictamente. 
let x = 'something';

switch (x) { 			
	case 'somenthing':	
		console.log('x < 10');
		break;
	case 'else':
		console.log('x = 10');
		break;
	case 'bla':
		console.log('x > 1000');
		break;
	default:
		console.log('default case');
		
}


// Methods for multi-criteria case
console.log('\n- Metodos multi-criteria -');
// - Tecnica llamada tambien (fall-through) 
// - Si no hay break debajo de una cláusula, continuará ejecutando la siguiente caso hasta encontrar break;.
console.log('- Multi-caso: single operation -');
var Animal = 'human';

switch (Animal) {
  case 'whale':
  case 'human':
  case 'Dog':
    console.log('Mamifero');
    break;

  case 'viper':
    console.log('Reptil');
  default:
  	console.log('Not in data base')
}

// Multi-case : chained operations
console.log('\n- Multi-case : chained operations-');
// Esto le muestra que atravesará en el orden en que coloque las cláusulas de caso, 
// y no tiene que ser numéricamente secuencial. 
// En JavaScript, incluso puede mezclar definiciones de cadenas en estas declaraciones de 
// casos también.

var foo = 6;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}



// Block-scope variables
console.log('\n- Block-scope variables -');
// - Al encerrar el statement dentro de llaves { } permite limitar el scope dentro de cada caso

const action = 'say_hello';
switch (action) {
  case 'say_hello': { 
    let message = 'hello';		// message Declarada una vez
    console.log(message);
    break;
  } 
  case 'say_hi': {
    let message = 'hi';			// message Declarada por segunda vez por el limite de scope
    console.log(message);		
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
  } // added brackets
}