console.log('- One liners -');
console.log('- suma/statement one line');
let char = 'e';
let word = 'welcome';
let sol = [...word].reduce((acu,x,i) => acu+= x ==char ? i :0 ,0);
console.log(sol);


console.log('\n- if/else ');	// condition ? true_expression : false_expression
let x = 10;
sol = false;
if(x == 10? sol = true: sol = false)
console.log(sol);

console.log('- asignar valores en el lugar de los paramentros -')
// for(d of readline(p=1))p*=d Producto de todos los digitos en un numero()
p = 1;
for(d of '1234')p*=d 	// Producto de todos los digitos en un numero()
console.log(p);
// Conclusiones
// readline(p=1) -> Se puede asignar valores en el lugar de los paramentros 