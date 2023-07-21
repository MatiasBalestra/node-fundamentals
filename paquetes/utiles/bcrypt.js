const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        console.log(res);
    });
} 
);


/* hash = $2b$05$HL7Yv1MJs8Eftt0Bd96TnuNgO5f6MKFt/TIZvjj841QafR0hU/dne;


bcrypt.compare(password, hash, function(err, res) {
    console.log(res);
}
); */