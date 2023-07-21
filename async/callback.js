function hola (nombre, callback) {
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        callback(nombre);
    }, 1500);

}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso');
hola( 'Rusher', function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso');
    });
});

/* hola('Rusher', function(){ });
adios('Rusher', function(){ }); */
