/* const process = require('process');

console.log(process.arch); */


process.on('beforeExit', () => {
    console.log('El proceso esta por acabar');
})


process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
});

process.on('uncaughtRejection', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
});


process.on('exit', () => {
    console.log('El proceso acabó');
})


/* functionQueNoExiste(); */

console.log('Esto si el error no se recoje, no sale');
console.log('Esto si el error no se recoje, no sale');
console.log('Esto si el error no se recoje, no sale');
console.log('Esto si el error no se recoje, no sale');