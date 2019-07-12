const argv = require('./config/yargs').argv; // pongo el argv asi para no poner argv.argv al momento de usarlo
const colors = require('colors');
//cuando no lleva./ quiere decir que es un paquete y no un path relativo
const { crearArchivo, listarTabla, listarTablasColor } = require('./multiplicar/multiplicar'); //uso la destructuracion para seleccionar la funcion

let comando = argv._[0];
switch (comando) {
    case 'listar': //node usoYargs listar --base 10 --limite 5
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla)).catch(e => console.log(e));
        break;
    case 'crear': //node usoYargs crear --base 10
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`El archivo creado ${archivo}`)).catch(e => console.log(e));
        break;
    case 'listac':
        listarTablasColor(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}