let rtn 

console.log('- stdout -');// IMPRIMIR SIN Breakline
process.stdout.write('aoeu');			// IMPRIMIR en consola sin linebreakers
// process.stdout.write(123); SOLO imprime Strings, throw new ERR_INVALID_ARG_TYPE(
process.stdout.write(`${1}`);			// Para imprimir variables es necesario adoptar esta notancion

lines.length

let matriz = [1, 2, 3, 4];		
console.log(`${matriz}`); 				//  IMPRIMIR sin []



rtn = parseFloat(3.123432).toFixed(2); // IMPRIMIR solo 2 decimales
console.log(rtn);					   // -> 3.13

let s = [ { titulo: 'Interstellar', rating: '8.6' },
  		  { titulo: 'The Dark Knight', rating: '9.0' },
  	      { titulo: 'Batman Begins', rating: '8.3' },
  		  { titulo: 'Avatar', rating: '7.9' }]

rtn = JSON.stringify(s);		// IMPRIMIR el resultado como stream JSON
console.log(rtn);				// -> [{"titulo":"Interstellar","rating":"8.6"},{"titul...