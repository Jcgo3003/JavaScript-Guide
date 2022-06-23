console.log('- Metodos matriz -');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('- Map -');// - Array.prototype.map() 																  //
// -------------------------------------------------------------------------------------------------------------- //
// - Método que itera sobre cada elemento de una matriz y devuelve una matriz que contiene los resultados         //
//   de llamar un callback/función sobre cada elemento, sin mutar la matriz original.						      //
// - Acepta tres argumentos - map((element, index, array) 														  //
//   1 Elemento actual. 																						  //
//   2 Indice de ese elemento. 																					  //
//   3 Matriz en la que se llamó al método de mapa.																  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let l = [1, 2, 3, 4, 5];
let rtn = l.map(x => x*2);
console.log(l);					// -> [ 1, 2, 3, 4, 5 ]			Matriz original sin cambios
console.log(rtn);				// -> [ 2, 4, 6, 8, 10 ]		Matriz con cambios efectuados por la funcion interior/Callback.

// - Interando sobre matriz de dicionarios
let users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

rtn = users.map(x => x.name); // Obteniendo solo los valores de name
console.log(rtn);			  // [ 'John', 'Amy', 'camperCat' ]

console.log('\n- Index -');
rtn = l.map( ( _, index) => index );
console.log(rtn); 			 // -> [ 0, 1, 2, 3, 4 ]

console.log('\n- Muchos datos -');
// watchList contiene objetos con información sobre varias películas. 
// Use map on watchList para asignar una nueva matriz de objetos a la variable de calificaciones. 
// Cada película de la nueva matriz debe tener solo una clave de título con el nombre de la película y 
// una clave de calificación con la calificación IMDB. 

// // The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
 

// - Metodo for - Creando un objecto con expresiones Literales
rtn = [];
for(var i=0; i < watchList.length; i++){ 
  rtn.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
} 
console.log(rtn);                 // -> [ { titulo: 'Inception', rating: '8.8' }, { titulo: 'Interstellar', rating: '8.6' }, ...

// - map -
rtn = watchList.map(item => ({ 		// ES5
          title: item["Title"],
          rating: item["imdbRating"]
 }));

rtn = watchList.map(x => ({'Movie': x.Title, 'Rating':x.imdbRating })); // Creando un nuevo diccionario por cada elemento
rtn = watchList.map(({Title: titulo, imdbRating: rating }) => ({ titulo, rating })); // Usando destructuring Asignament

console.log(rtn); 			           // -> [ { titulo: 'Inception', rating: '8.8' }, { titulo: 'Interstellar', rating: '8.6' }, ...

// - Miscellanius -
console.log('- Miscellanius Map -');
// utilizando un map function para crear una Matriz con '🇨🇦'  
// 'Array.from' Tiene integrada la funcion map
// Array.from(arrayLike[, mapFn[, thisArg]])
rtn = Array.from({ length: 3 }, () => { 
  return '🇨🇦';                          
});
console.log(rtn);                 // -> [ '🇨🇦', '🇨🇦', '🇨🇦' ]

// Aplicando un Metodo directamente sobre una matriz
rtn = [1, 2, 3, 4, 5].map(String);
console.log(typeof(rtn[1]));     //-> string

rtn = '1990'.split('').map(Number);
console.log(typeof(rtn[1]));    //-> number


// https://www.samanthaming.com/tidbits/22-2-ways-to-repeat-strings/


// - Reduce -
console.log('\n- Reduce -');
// - Ejecuta una función reductora sobre cada elemento de una matriz, devolviendo como resultado un único valor.
// Map y filter se pueden derivar de Reduce
// La función "callaback" acepta cuatro argumentos (acumulador, elemento_actual, indice, matriz) 
// 1 El acumulador, al que se le asigna el valor de retorno de la función de devolución de llamada de la iteración anterior 
// 2 Elemento actual.
// 3 índice de ese elemento.
// 4 la matriz sobre la que se reduce se llama.
//    Un parámetro adicional que toma un valor inicial para el acumulador. Si no se usa este parámetro, entonces se 
//    omite la primera iteración y la segunda iteración pasa al primer elemento de la matriz como acumulador.

// La primera vez que se llama la función, valorAnterior(acumulador) y valorActual pueden tener uno de dos valores. 
// Si se proveyó un valorInicial al llamar a reduce, entonces valorAnterior será igual al valorInicial y valorActual será igual al primer elemento del array. 
// Si no se proveyó un valorInicial, entonces valorAnterior será igual al primer valor en el array y valorActual será el segundo.
// Si el array está vacío y no se proveyó un valorInicial lanzará un TypeError

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
rtn = l.reduce((acu,x) => x+acu, 0);   // Suma total de una matriz, 0 es el valor inicial del acumulador
console.log(rtn);                      // -> 55

// Creando un objeto con reduce desde adentro 
console.log('- Objectos con reduce -');
users = [            
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

let newList = users.reduce((acumulador, valorActual) => ({
  ...acumulador,             // Copiando la llave y el valor del valor anterior
  [valorActual.name]: valorActual.age, // Creando y agregando la llaves y valores del objeto actual
})                           //Al estar creando un solo objeto con las {} se pone dentro de ()
, {} ); 

console.log(newList);     // -> { John: 34, Amy: 20, camperCat: 10 }

// Easy view
newList = users.reduce((ac, x)=> ({...ac, [x.name]: x.age,}), {});
console.log(newList);     // -> { John: 34, Amy: 20, camperCat: 10 }

// Nota: Al estar creando las llave y valor una por una la sintaxis cambia de  " = " a " : ", 
// Estas poblándola desde adentro
// Aqui estoy iterando y creando la llave y valor de un solo objeto

// - Filter -
console.log('\n- Filter -');
// - Devuelve una nueva matriz que contiene SOLO los elemento que son cumplen con los estandares del callback/funcion.
// - Recibe una Callback/funcion que devuelve un boolean   
// - filtra la matriz  
// - Acepta tres argumentos  filter((element, index, array)
//    1 Elemento actual
//    2 índice  y el 
//    3 La matriz en la que se llamó al método de filtro.

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
rtn = l.filter(x => x > 5 );  // FILTRANDO elementos mayores que 5
console.log(rtn);             // -> [ 6, 7, 8, 9, 10 ]

l = [1, 2, 3, 2, 5, 1, 3, 4, 4, 2 ];
rtn = l.filter((x, i) => l.indexOf(x) === i ).sort();  // FILTRANDO elementos duplicados
console.log(rtn);            // -> [ 1, 2, 3, 4, 5 ]

// Sort
console.log('\n- Sort -')
// - En un metodo destructivo que actúa sobre la matriz .
// - El método de clasificación es por valor ASCII(admite 128 puntos de código), por lo que hay que utilizarlo segun el caso
// - Se recomienda un agregar un Callback para especificar cómo ordenar los elementos de la matriz.
// - Los elementos de la matriz se ordenan de acuerdo con el valor de retorno de compareFunction: 
//   Si compareFunction (a, b) devuelve un valor menor que 0, entonces a  vendrá antes que b

//  function compareFuntion (a, b) {
//  if (a < b) {       
//    return -1; 
//  }
//  else {
//    return 1;  
//  }
// };
let compareFuncion = (a, b) => a - b; 

// Caso numeros
console.log('- caso numeros -');
l = [10, 8, 6, 7, 9, 2, 3, 1, 4, 5];
// l.sort((a,b)=>a-b);                  
l.sort(compareFuncion);              // sort CON callback function              funciona correctamente
console.log(l);                      //-> [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]     √

l = [10, 8, 6, 7, 9, 2, 3, 1, 4, 5]; // Orden decendente modificando compareFuntion
l.sort((a,b)=>b-a);                  // sort CON callback function              funciona correctamente
console.log(l);                      //-> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]        √

l = [10, 8, 6, 7, 9, 2, 3, 1, 4, 5]; //
l.sort();                            // sort SIN callback function               NO funciona correctamente
console.log(l);                      //-> [ 1, 10, 2, 3, 4, 5,  6, 7, 8, 9 ]     ERROR!!!

console.log('- caso letras ');
// Caso letras 
l = ['c','a','A', 'B', 'C', 'b'];
l.sort(compareFuncion);              // sort CON callback function               NO Funciona correctamente
console.log(l);                      //-> [ 'c', 'a', 'A', 'B', 'C', 'b' ]       ERROR!!!

l = ['c','a','A', 'B', 'C', 'b'];
l.sort();                            // sort SIN callback function               Funciona correctamente
console.log(l);                      //-> [ 'A', 'B', 'C', 'a', 'b', 'c' ]       √

// Para matrices de NUMEROS se debe emplear un compareFunction
// Para matrices de LETRAS no se debe emplear un compareFunction
// sort realiza cambios sobre la matriz original por lo que no es Funtional programing

// Every
console.log('\n- Every -');
// - RTN bool si todos elementos del array pasa una prueba en particular en la funcion callback. 
// l = [10, 11, 12, 13, 14, 15]
l = [2, 3, 4, 5, 6, 7, 8];      
rtn = l.every(x => x >= 10);    // Todos los elementos son mayor que 10
console.log(rtn);               // -> false

l = [10, 11, 12, 13, 14, 15];
rtn = l.every(x => x >= 10);    // Todos los elementos son mayor que 10
console.log(rtn);               // -> true

// Some
console.log('\n- Some -');
// RTN true si al menos un elemento pasa una prueba particular en la funcion callback. 
l  = [10, 50, 8, 220, 110, 11];
rtn = l.some(x => x == 10);     // Si hay un elemento que sea 10
console.log(rtn);               // -> true

l  = [0, 50, 8, 220, 110, 11]; 
rtn = l.some(x => x == 10);     // Si existe un elemento que sea 10
console.log(rtn);               // -> false

// findindex() - Encuentra el index del PRIMER elemento que cumpla una funcion
console.log('\n- findIndex -');
l  = [0, 5, 10, 15, 20];        
rtn = l.findIndex(x => x > 9); 
console.log(rtn);               // -> 2

// flat  - RETURN matrices planas
l = [0, [1,2,[3] ]];            
rtn = l.flat();                 
console.log(rtn);               // -> [ 0, 1, 2, [ 3 ] ]      Tiene un limite de 3 dimensiones
console.log(l);
// flatmap - RETURN map() seguido de un flat() de profundidad 1
rtn = l.flatMap(x => x+1);                 
console.log(rtn);               // -> [ 1, '1,2,31' ]     Tiene un limite de 3 dimensiones




