let contador = 1;

while (contador <= 100) {
    console.log(contador)
    contador++;
}

contador = 10;
while (contador >= 0) {
    console.log(contador)
    contador--;
}

let numero = 0;
do {
    numero = prompt('Digite um número para contagem regressiva: ');
    if(numero>=0){
        while (numero >= 0) {
            console.log(numero)
            numero--;
        }
        // Restaura o valor de 'numero' para evitar loop infinito no 'do...while' após a contagem regressiva.
        numero+=1;
    }
} while (numero < 0)