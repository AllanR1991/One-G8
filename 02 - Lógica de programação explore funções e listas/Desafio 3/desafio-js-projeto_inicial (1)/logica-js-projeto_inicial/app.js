/**
 * Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 */

function calculaIMC(alturaMetro, pesoQuilogramas){
    let imc = pesoQuilogramas / (alturaMetro*pesoQuilogramas);
    console.log(imc);
}

calculaIMC(1.80,120);

function calcularFatorial(numeroInteiro){
    if(numeroInteiro==0 || numeroInteiro ==1){
        return 1;
    }else{
        return numeroInteiro * calcularFatorial(numeroInteiro-1);
    }
}

console.log(calcularFatorial(5))

function conversaoDolarParaReais(dolar){
    let cotacao = 4.80
    return dolar*cotacao.toFixed(2);
}

console.log(conversaoDolarParaReais(5))

function calculoAreaPermitroRetangular(base, altura){
    let area = base*altura;
    let perimetro = 2*(base+altura);
    alert(`Dado base ${base} e altura ${altura}, a area é igual a ${area} e o perimetro é ${perimetro} `);
}

calculoAreaPermitroRetangular(7,3)

function calculaAreaPermitroCircular(raio){
    area = Math.PI * raio**2;
    perimetro = 2*Math.PI * raio;
    alert(`Dado o raio ${raio}, a area é igual a ${area} e o perimetro é ${perimetro} `);
}

calculaAreaPermitroCircular(3)

function exibeTabuada(multiplicando){
    let multiplicador = 1
    do{
        alert(produto = multiplicando * multiplicador);
        multiplicador++
    }while(multiplicador<=10)
}

exibeTabuada(10);