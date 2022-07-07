// Maps

// Create
console.log('- Create -');

let m = new Map();

// Agregar llaves
console.log('- Add keys -');
m.set('even', [2, 4, 6, 8, 10]);
m.set('odd', [1, 3, 5, 7, 9]);
console.log(m);		    // >> Map(2) { 'even' => [ 2, 4, 6, 8, 10 ], 'odd' => [ 1, 3, 5, 7, 9 ] }

// Accesing 
console.log('- Accesing - ');
let rtn = m.get('even');
console.log(rtn);		// >> [ 2, 4, 6, 8, 10 ]

// Editing data into the keys
m.get('even').pop()
console.log(m.get('even'));  // >> [ 2, 4, 6, 8 ]
m.get('even').push(12);
console.log(m.get('even'));  // >> [ 2, 4, 6, 12 ]

