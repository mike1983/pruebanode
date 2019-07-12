const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea un archivo de de texto introduciendo un valor base y un limite a multiplicar', opc)
    .command('listac', 'imprime en consola la tabla de multiplicar con colores en consola', opc)
    .help()
    .argv;
module.exports = {
    argv
}