console.log('\n- Estilo imperativo -');
// - Conjunto de declaraciones para realizar una tarea.
// - las declaraciones cambian el estado del programa, como actualizar variables globales
//    Ejem... loop for itera instrucciones sobre los índices de una matriz.

// Un objeto Ventana se compone de pestañas.
// Los títulos de cada sitio abierto en cada objeto de ventana se mantienen en una matriz. 
// Después de trabajar en el navegador (abrir nuevas pestañas, fusionar ventanas y cerrar pestañas), 
// desea imprimir las pestañas que aún están abiertas. 
// Las pestañas cerradas se eliminan del array/matriz y se agregan nuevas pestañas (para simplificar) al final.

// tabs is an array of titles of each site open within the window - 

const Window = function(tabs) { // tabs is an array of titles of each site open within the window
  this.tabs = tabs; };// We keep a record of the array inside the object// dentro de un array

Window.prototype.join = function(otherWindow) { // When you join two windows into one window
  this.tabs = this.tabs.concat(otherWindow.tabs); // otherWindow { tabs: [ 'Netflix', 'YouTube' ] }
  return this; };

Window.prototype.tabOpen = function(tab) {  // When you open a new tab at the end
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

Window.prototype.tabClose = function(index) { // When you close a tab
  this.tabs.splice(index, 1); // Get the tabs before the tab


return this;};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // new tab { tabs: [ 'FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab' ] }
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs);
