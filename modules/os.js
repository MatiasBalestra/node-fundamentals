const os = require('os');

console.log(os.arch());

console.log(os.platform());

console.log(os.cpus());

console.log(os.constants);

console.log(os.freemem());

const SIZE = 1024;
function kb(bytes) {
    return bytes / 1024;
}   

function mb(bytes) {
    return kb(bytes) / 1024;
}

function gb(bytes) {
    return mb(bytes) / 1024;
}

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(os.totalmem());

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());