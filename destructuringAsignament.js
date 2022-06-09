// Destructuring asignament
console.log('---------- Destructuring asignament ----------');

// Matrices 
let [a, b] = [1, 2, 3, 4, 5];       // Asignando datos a variables con Destructuring asignament
console.log(`a ${a} b ${b}`);       // Mostrando datos por medio de ` 
// >> a 1 b 2; 

let [c, _, ,,d] = [1, 2, 3, 4, 5, 6]; // Agregando comas se puede NAVEGAR en el arreglo -
console.log(`c ${c} d ${d}`);         // >> c 1 d 5;

// REASIGNANDO valores -
console.log('\n--- Reasignando valores ---');
[a, b] = [b, a];
console.log(`a ${a} b ${b}`);         // >> a 6 b 8

// RECOLECTANDO el resto del arreglo con un operador Spread -
console.log('\n--- Operador Spread ---');
const [e, f, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(`e ${e} f ${f} arr ${arr}`);
// >> a 1 b 2 arr [3, 4, 5, 7];

//Objetos  
console.log('\n--- Objetos ---');
//-----------------------------------------------------------------------------------
let user = { name: "John Doe", age: 21};
// Normamente se asigna
// const name = user.name;
// const edad = user.age;

// Asignación destructurada 
console.log('--- Asignacion destrurcturada ---');
let {name, age} = user;
console.log(`name ${name} age ${age}`);

// Asignado nuevos nombres a variables -
console.log('\n--- Asignado nuevos nombres a var ---')
//    user.nombre.     user.edad
const { name: userNom, age: userEdad} = user;
console.log(`userNom ${userNom} userEdad ${userEdad}`);
// Equivale a:
//const userNom = user.nombre;
//const userEdad = user.edad;

// *IMPORTANTE el tipo de dato tiene que coicidir con su sintaxis.
// {} = Objeto
// [] = Matriz

// ejemplo con map, Reasignado el valor a una nueva variable
const ratings = watchList.map( ({ Title: title, imdbRating: rating }) => ({title, rating}));
console.log(ratings);
// > [ { title: 'Inception', rating: '8.8' },
//   { title: 'Interstellar', rating: '8.6' },
//   { title: 'The Dark Knight', rating: '9.0' },
//   { title: 'Batman Begins', rating: '8.3' },
//   { title: 'Avatar', rating: '7.9' } ]


// Asignamiento destructurado anidado 
console.log('\n--- Asignamiento destructurado anidado ---');
user = { johnDoe: {
	gender: 'M',
	email: "johnDoe@bla.com"
	},
    janeDoe: {
        gender: 'F',
        email: "janeDoe@bla.com"
        }
};

// Extraer datos en objetos anidados -
console.log('--- Extraer datos en objetos anidados ---');
let { johnDoe: { gender, email} } = user;
console.log(`Age John Doe ${gender}`);
console.log(`email John Doe ${email}`);

// Equivale a:
//const gender = johnDoe.gender;
//const email = johnDoe.email;

// Asignar valores a variables con otros nombres -
console.log('\n--- Asignar valores a variables con otros nombres ---');
let { johnDoe: { age:userAge, email: userEmail}} = user;
console.log(`John Doe userAge ${userAge}`)
console.log(`John Doe useremail ${userEmail}`)
// Equivale a:
// const userAge = johnDoe.age;
// const userEmail = johnDoe.email;

// Ejemplos utiles -
console.log('\n--- Ejemplos utiles ---');
const example = {
    name: 'Juan', 
    age: 32,
    gender: 'M',
    nationality: 'Mx',
    location: 'Fr'
};
// Creando una funcion para procesar el objeto
console.log('--- Creando una funcion que procesa el objeto ---');
const profilUpdate = (example) => {
    const { name, age, _, nationality, location } = example;
    console.log(`name ${name}, age ${age}, nationality ${nationality}`)
	return location;
};

console.log(`profil update ${profilUpdate(example)}`);
//const profileUpdate = ({ name, age,  nationality, location}) => { 
//	return name;
//};
