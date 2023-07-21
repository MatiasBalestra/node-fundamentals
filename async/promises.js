function hola (nombre) {
    return new Promise(function(resolve, reject){   
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}


function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}     

function adios(nombre){
    return new Promise((resolve, reject) => {  
    setTimeout(function(){
        console.log('Adios', nombre);
        resolve('Juanchota');
    }, 1000);
}); }
// ---

hola('Carlitos')
.then(hablar)
.then(hablar)
.then(hablar)
.then(hablar)
.then(hablar)
  .then((nombre) => {
    console.log('Terminando proceso ')})
  .then(() => {
    return adios('Rusher big dick');
  })
  .then((data) => {
    console.log(data);
  });