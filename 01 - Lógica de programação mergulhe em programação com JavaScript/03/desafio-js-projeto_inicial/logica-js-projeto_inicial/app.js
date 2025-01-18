let diaDaSemana = prompt('Digite o dia da semana: ');

if(diaDaSemana == 'Domingo' || diaDaSemana == 'Sábado'){
    alert('Bom fim de semana!')
}else{
    alert('Boa semana!');
}

let numero = prompt('Digite um numero');

if(numero>0){
    alert('Número digitado é positivo.');
}else{
    alert('Número digitado é negativo.');
}

let pontuacao = 90;

if(pontuacao>=100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}

let saldo = 5000;
alert(`O saldo da conta é ${saldo}`);

let nome = prompt('Digite seu nome: ');
alert(`Bem vindo(a), ${nome}!`);