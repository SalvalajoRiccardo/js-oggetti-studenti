var studente = {
    nome : 'tullio',
    cognome : 'valdostana',
    eta : 16
};

for (var k in studente) {
    console.log(studente[k]);
}

var classe = [
    {
        studente
    },

    {
        studente
    },

    {
        studente
    }

];

for (var i = 0; i < classe.length; i++) {
    for (k in classe[i]){
        console.log(classe[i][k]);
    }
}

