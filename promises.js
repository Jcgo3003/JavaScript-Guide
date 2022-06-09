// ------------------------------------- Promesas -------------------------------- 
console.log('- - - Promesas - - -');
// - Es un objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
// - Se utilizan para RETURN un resultado al final de un proceso.
// - Para crear una promesa se utiliza new Promise, las promesas son constructores.
// - Cuando el proceso se complete puedes cumplir o no la promesa.
// - Toma una funcion como su argumento, con los parámetros resolve y reject.
// - resolve reject son métodos para RETURN resultado de la promesa.
// - Una promesa tiene 3 estados: pending, fulfilled, rejected.
// - resolve sirve para MOSTRAR que tu promesa se cumplió.
// - reject sirve para MOSTRAR fue rechazada respectivamente.

// - Syntaxis -
console.log('Syntaxis');

let p = new Promise(function(resolve, reject){ // Definiendo nueva promesa
    if(true) {
      resolve("- Fulfilled -");
    }
    else {
      reject("Promesa rota!");
    } 
});
console.log(p); // Promise { '- Fulfilled -' }

const print = (x) => {  // Funcion para imprimir
  for(var i = 1; i <= 3 ; i++){
    i % 2 == 0? console.log('-'+ x): console.log(x + '-');
  }
};

  // p.then(
  //   function(value){
  //     print('x');
  //   },
  //   function(error){  // Error se ejecuta cuando hay un error
  //     print('error');
  //   }).catch(         // CATCH se ejecuta cuando hay un error, aqui no se ejecuta porque error function se ejecto antes.
  //     function(value){
  //       print('catch')
  //     }
  //   );
  


// --- Metodo then ---]
console.log('- then/catch -');
// - Se utilizan cuando hay un proceso que lleva una cantidad de tiempo desconocida(asincrónico).
// - El método then se ejecuta inmediatamente después de que su promesa se cumpla con resolver.
// - El metodo catch se ejecuta en caso de que haya un error.

const boo = () => {
   let date_r = new Date(Date.now()).getMinutes();
   let ran = Math.ceil(Math.random() * 60);
   return date_r > ran ? true: false;
}

let p2 = new Promise((resolve, reject) => {  // Redefiniendo la promesa.
   let boolean = boo();
   // console.log(boolean);
   boolean? resolve(100): reject(0);
});

let val = p2;
console.log(val);           // Promise { <rejected> 0 } - Promise { 100 }
console.log(`val ${val}`);  // val [object Promise]

val = p2.then(() => {console.log('then ok')},
).catch(() => {console.log('Catch' )});      // El resultado proviene del argumento dado al método de resolución.

console.log(val);         // Promise { <pending> }
console.log(`val then ${val}`); // val then [object Promise]
// then ok - Catch
