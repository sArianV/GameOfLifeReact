const filas: number = 40;
const columnas: number = 80;

// Tamaño del tablero
// Tipo para representar el tablero
export type Tablero = number[][];

// Inicializar el tablero de manera aleatoria
export function inicializarTablero(): Tablero {
    const tablero: Tablero = [];
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = Math.random() > 0.5 ? 1 : 0; // 1 para célula viva, 0 para célula muerta
        }
    }
    return tablero;
}

// Imprimir el tablero en la consola
export function imprimirTablero(tablero: Tablero): void {
    for (let i = 0; i < filas; i++) {
        console.log(tablero[i].join(' '));
    }
}

// Calcular el siguiente estado del tablero según las reglas del Juego de la Vida
export function siguienteEstado(tablero: Tablero): Tablero {
    const nuevoTablero: Tablero = [];

    for (let i = 0; i < filas; i++) {
        nuevoTablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            const vecinosVivos = contarVecinosVivos(tablero, i, j);

            // Aplicar reglas del juego
            if (tablero[i][j] === 1) {
                if (vecinosVivos < 2 || vecinosVivos > 3) {
                    nuevoTablero[i][j] = 0; // Célula muerta por soledad o sobrepoblación
                } else {
                    nuevoTablero[i][j] = 1; // Célula viva sigue viva
                }
            } else {
                if (vecinosVivos === 3) {
                    nuevoTablero[i][j] = 1; // Célula muerta revive
                } else {
                    nuevoTablero[i][j] = 0; // Célula muerta sigue muerta
                }
            }
        }
    }

    return nuevoTablero;
}

// Contar el número de células vivas alrededor de una posición dada
function contarVecinosVivos(tablero: Tablero, x: number, y: number): number {
    let contador = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const filaVecino = x + i;
            const columnaVecino = y + j;

            if (filaVecino >= 0 && filaVecino < filas && columnaVecino >= 0 && columnaVecino < columnas) {
                contador += tablero[filaVecino][columnaVecino];
            }
        }
    }

    contador -= tablero[x][y];

    return contador;
}
