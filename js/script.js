var studente = {
    nome : 'tullio',
    cognome : 'valdostana',
    eta : 16
};

for (var k in studente) {
    console.log(studente[k]);
}

var classe = [studente, studente, studente];

console.log(classe);
for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].nome);
    console.log(classe[i].cognome);
}

