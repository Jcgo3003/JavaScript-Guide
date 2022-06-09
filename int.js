// Ints in Javascript 
console.log('--- Int ---');
// Declarando
console.log('Declarando');
let i = 3;				// DECLARANDO un float
console.log(i);			// -> 3.1416


// Metodos 
console.log('\n- Metodos No destructivos -');

let r = parseInt(1.1);		// CONVERTIR un numero a Int o cambiarlo a base 10
console.log(r);				// -> 1
r = parseInt('15,123', 10);	// TRANSFORMAR de decimal a int
console.log(r);				// -> 15

r = parseInt('0xF', 16);	// TRANSFORMAR de base 16 a int
console.log(r);				// -> 15
r = parseInt('A', 16);		// TRANSFORMAR de base 16 a int
console.log(r);				// -> 10
r = parseInt('111', 2);		// TRANSFORMAR de bin a int
console.log(r);				// -> 7



console.log('\n- Metodos Number -');
console.log(Number.isNaN(1)); 		// -> false
console.log(Number.isNaN('1b')); 	// -> false
console.log(Number.isNaN(NaN)); 	// -> true			isNaN no es confiable 



r = i.toFixed(3);		// RETURN una aproximacion hacia un numero	
console.log(r);			// -> 3.000

// Miscelanious
console.log('\n- Miscellaneous -');
let n = 10;				
r = n.toString(2);			// Int to bin
console.log(r);				// -> 1010	String nuevo Bin
r = n.toString(16);			// Int to bin
console.log(r);				// -> a		String nuevo base 16

n = 10.1494;
rtn = n.toFixed(2);			// FORMATEA un número usando notación de punto fijo.
console.log(rtn);			// -> 10.15


