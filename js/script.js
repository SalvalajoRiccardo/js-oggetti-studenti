var studente = {
    nome : 'tullio',
    cognome : 'valdostana',
    eta : 16
};

for (var k in studente) {
    console.log(studente[k]);
}

var classe = [studente, studente, studente];

for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].nome);
    console.log(classe[i].cognome);
}


var newNome = prompt('immetti il tuo nome')
var newCognome = prompt('immetti il tuo cognome')
var newEta = prompt('immetti la tua eta')

var studenteNew = {
    nome : newNome,
    cognome : newCognome,
    eta : newEta,
}

classe.push(studenteNew)

console.log(classe);