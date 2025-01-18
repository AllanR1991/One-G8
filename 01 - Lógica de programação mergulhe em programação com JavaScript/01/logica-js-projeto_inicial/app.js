alert('Boas vindas ao jogo do número secreto.');


console.log(numeroSecreto);

//Permite iteragir com a tela.
let chute = prompt('Escolha um número entre 1 e 10:');
console.log('Valor do chute: ', chute);

let numeroSecreto = 9;

//Adicionado um console log para verificar a comparação entre chute e numeroSecreto.
console.log('Resultado da comparação:', chute == numeroSecreto);

//Se o chute for igual o numero secreto
if( chute == numeroSecreto ){
    alert(`Isso ai você descobriu o número secreto (${numeroSecreto}).`); //Template string.
}else{
    //Log para verifica o valor de "numeroScereto"
    console.log('Valor do número secreto: ', numeroSecreto)
    alert('O número secreto era ' + numeroSecreto);
}