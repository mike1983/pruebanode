const fs = require('fs');
const colors = require('colors');
let listarTablasColor = (base, limite) => {
    console.log('======================'.green);
    console.log(`=====Tabla de ${base}=================`.red);
    console.log('======================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}=${base * i} `)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i}=${base * i} \n`;
        }
        fs.writeFile(`tablas\\tablademul${base}.txt`, datos, (err) => {
            if (err) reject(err)
            else {
                resolve(`El archivo tablademul${base}.txt fue` + colors.rainbow(` almacenado`));
            }
        });
    });
}
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es numero`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i}=${base * i} \n`;
        }
        resolve(datos);
    });

}

module.exports = {
    crearArchivo,
    listarTabla,
    listarTablasColor
}