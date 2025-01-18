alert('Boas vindas ao jogo do número secreto.');

let chute;

let numeroSecreto = 5;

//Enquato
while (chute != numeroSecreto) {
    //Permite iteragir com a tela.
    chute = prompt('Escolha um número entre 1 e 10:');

    //Se o chute for igual o numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai você descobriu o número secreto (${numeroSecreto}).`); //Template string.
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }
}