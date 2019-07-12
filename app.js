//requires
/*const fs = require('fs');
let base = 2;
let datos = '';
for (let i = 1; i <= 10; i++) {
    datos += `${base} * ${i}=${base * i} \n`;
}
fs.writeFile(`tablas\\tablademul${base}.txt`, datos, (err) => {
    if (err) throw err;
    console.log(`El archivo tablademul${base}.txt fue almacenado`);
});*/
const { crearArchivo } = require('./multiplicar/multiplicar'); //uso la destructuracion para seleccionar la funcion
let argv = process.argv; // process con el argumento argv es para obtener los árametros desde linea de comandos para este caso se ejcuta node app base=5
let parametro = argv[2];
let base = parametro.split('=')[1]; // split para combertir una cadena en un arreglo especificando el separadaro y despues le digo que quiero el elemento 1

//let base = 'c';
crearArchivo(base).then(archivo => console.log(`El archivo creado ${archivo}`)).catch(e => console.log(e));