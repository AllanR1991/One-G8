/*
Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function exibeOlaMundo(){
    console.log('Olá mundo!');
}

function exibeOla(nome){
    console.log(`Olá, ${nome}`);
}

function exibeODobro(numero){
    return numero*2;
}

function media(num1,num2,num3){
    return (num1+num2+num3)/3;
}

function numeroMaior(num1, num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

function multicacaoPorEleMesmo(num1){
    return num1*num1;
}

exibeOlaMundo();
exibeOla();
console.log(exibeODobro(2));
console.log(media(5,5,5));
console.log(numeroMaior(10,60));
console.log(numeroMaior(60,10));
console.log(multicacaoPorEleMesmo(6));