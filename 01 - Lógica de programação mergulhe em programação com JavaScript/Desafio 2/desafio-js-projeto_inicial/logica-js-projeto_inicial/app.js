//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Digite o dia da semana: ');

if(diaDaSemana == 'Domingo' || diaDaSemana == 'Sábado'){
    alert('Bom fim de semana!')
}else{
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um numero');

if(numero>0){
    alert('Número digitado é positivo.');
}else{
    alert('Número digitado é negativo.');
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 90;

if(pontuacao>=100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 5000;
alert(`O saldo da conta é ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome: ');
alert(`Bem vindo(a), ${nome}!`);