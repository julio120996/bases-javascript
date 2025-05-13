/*let nombre = "Julio Bustamante";
console.log(nombre); 

nombre = "Pedro Perez";
console.log(nombre);

nombre = "Destino Final";
console.log(nombre);

console.log(typeof nombre); //String

nombre[0] = "J"; //No se puede cambiar el valor de una cadena
console.log(nombre); //Julio Bustamante
*/


let edad = 25;
//console.log(edad); //25
edad = 30;
//console.log(edad); //30
//console.log(typeof edad); //Number
edad[0] = 2; //No se puede cambiar el valor de un número    
//console.log(edad); //30


let personaje = {
    nombre: "Julio",
    edad: 25,
    casado: false,
    hobbies: ["Leer", "Correr", "Jugar"],
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

personaje.nombre = "Pedro Perez";
console.log('nombre',personaje.nombre); //Pedro Perez
console.log('edad',personaje.edad); //25
console.log('********************************************************');
let listapersonajes = ['Devpool','Capitan Peru','sentry'];
console.log('listapersonajes',listapersonajes); //['Devpool','Capitan Peru','sentry']
listapersonajes[1] = 'Capitan Planeta';

console.log('listapersonajes',listapersonajes); //['Devpool','Capitan Planeta','sentry']