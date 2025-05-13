function saludar() {
    console.log("Hola, soy Julio");
    //const numeros = [1, 2, 3];
    //console.log(numeros); // [1, 2, 3]
    //return numeros;
}

//saludar();
var saludar = 1;
//console.log(saludar); //Hola, soy Julio

const saludar2 = function() {
    console.log("Hola desde saludar2");
}

//saludar2();


const saludar3 = () => {
    console.log("Hola desde saludar3");
}

//saludar3();

function sumar(a, b) {
    console.log(a + b);
}
//sumar(1, 2);


const sumar2 = function(a, b) {
    const resultado = a + b;
    console.log(resultado);
}

sumar2(1, 2);

const getAleatorio = () => Math.random() * 100;{
}

