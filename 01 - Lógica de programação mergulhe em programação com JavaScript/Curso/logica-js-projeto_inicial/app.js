alert('Boas vindas ao jogo do número secreto.');

let chute;
let tentaivas = 1;
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );

//Enquato
while (chute != numeroSecreto) {
    //Permite iteragir com a tela.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

    //Se o chute for igual o numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentaivas++;
    }
}

let palavraTentativas = tentaivas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai você descobriu o número secreto (${numeroSecreto}) com ${tentaivas} ${palavraTentativas}.`); //Template string.



// if(tentaivas>1){
//     alert(`Isso ai você descobriu o número secreto (${numeroSecreto}) com ${tentaivas} tentivas.`); //Template string.
// }else{
//     alert(`Isso ai você descobriu o número secreto (${numeroSecreto}) com ${tentaivas} tentiva.`); //Template string.

// }