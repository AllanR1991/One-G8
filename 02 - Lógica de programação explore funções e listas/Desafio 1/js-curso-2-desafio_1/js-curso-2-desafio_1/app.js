/*
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
*/

let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

function exibeMensagemConsole(){
    console.log('O botão foi clicado');
}

function exibeAlerta(){
    alert('Eu amo JS');
}

function exibeCidade(){
    let cidade = prompt('Digite o nome de uma cidade: ');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function soma(){
    let valor1 = parseInt(prompt('Digite um número inteiro: '));
    let valor2 = parseInt(prompt('Digite o segundo número inteiro: '));
    resultado = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}