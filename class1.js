var nombre = 'Jhan', apellido = 'Silva';
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoenMinusculas = apellido.toLowerCase();

//Seleccionar la primera letra del nombre, segùn su posiciòn.

var primeraLetraDelNombre = nombre.charAt(0);

var cantidadDeLetrasDelNombre = nombre.length

//Interpolate text

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// Common way to concatenate texts. 

//  var nombreCompleto = nombre + ' ' + apellido; 

// Comon way to look for 2 elements of an string.

var str = nombre.charAt(1) + nombre.charAt(2);

// Looking for elements with the function substr (expects 2 parameters, begin and quantity.)

var str2 = nombre.substr(1, 2);

// First test. 

alert(`La primera letra de tu nombre es ${nombre.charAt(0)}`)