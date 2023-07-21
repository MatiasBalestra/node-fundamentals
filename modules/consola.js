console.log('algo');
console.error('Algo salio mal');
console.warn('Algo salio mal');
var tabla = [{
    a: 1,   
    b: 'z'
}, {
    a: 2,
    b: 'otra',
    NOMBRE: 'Oscar'   
}]
console.table(tabla);
console.group('Comienza los ejemplos de uso de consola');

console.log('test');
console.log('test');
console.log('test');

console.groupEnd('Terminan los distintos console ejemplos')

console.log('Fin')



console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');