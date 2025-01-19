
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador)
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;
while (contador >= 0) {
    console.log(contador)
    contador--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = 0;
do {
    numero = prompt('Digite um número para contagem regressiva: ');
    if (numero >= 0) {
        while (numero >= 0) {
            console.log(numero)
            numero--;
        }
        // Restaura o valor de 'numero' para evitar loop infinito no 'do...while' após a contagem regressiva.
        numero += 1;
    }
} while (numero < 0)

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

contador = 0;
do {
    numero = prompt('Digite um número para contagem progressiva: ');
    if (numero >= 0) {
        while (contador <= numero) {
            console.log(contador)
            contador++;
        }
        // Restaura o valor de 'numero' para evitar loop infinito no 'do...while' após a contagem regressiva.

    }
} while (numero < 0)