
//1.Dado el siguiente objeto:

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

//Extrae la empleada Ana completa
let [{email} ,ana, ] = empleados
//console.log(email, ana)
//Extrae el email del empleado Luis --> Luis@gmail.com



//console.log()

//2. Usa destructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;

// Al final
[a, b] = [b, a]
//console.log(a, b)

//3. Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const {today: maximaHoy} = HIGH_TEMPERATURES
const {tomorrow: maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy, maximaManana)