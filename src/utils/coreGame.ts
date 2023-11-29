// Tamaño del tablero
const filas = 20;
const columnas = 40;

// Tipo para representar el tablero
export type Tablero = boolean[][];

// Inicializar el tablero de manera aleatoria
export function inicializarTablero(): Tablero {
  const tablero: Tablero = [];
  for (let i = 0; i < filas; i++) {
    tablero[i] = [];
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = Math.random() > 0.5; // true para célula viva, false para célula muerta
    }
  }
  return tablero;
}

// Calcular el siguiente estado del tablero según las reglas del Juego de la Vida
export function siguienteEstado(tablero: Tablero): Tablero {
  const nuevoTablero: Tablero = [];

  for (let i = 0; i < filas; i++) {
    nuevoTablero[i] = [];
    for (let j = 0; j < columnas; j++) {
      const vecinosVivos = contarVecinosVivos(tablero, i, j);

      // Aplicar reglas del juego
      if (tablero[i][j]) {
        if (vecinosVivos < 2 || vecinosVivos > 3) {
          nuevoTablero[i][j] = false; // Célula muerta por soledad o sobrepoblación
        } else {
          nuevoTablero[i][j] = true; // Célula viva sigue viva
        }
      } else {
        if (vecinosVivos === 3) {
          nuevoTablero[i][j] = true; // Célula muerta revive
        } else {
          nuevoTablero[i][j] = false; // Célula muerta sigue muerta
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

      if (
        filaVecino >= 0 &&
        filaVecino < filas &&
        columnaVecino >= 0 &&
        columnaVecino < columnas
      ) {
        contador += tablero[filaVecino][columnaVecino] ? 1 : 0;
      }
    }
  }

  // Restar la célula en la posición actual (para no contarla dos veces)
  contador -= tablero[x][y] ? 1 : 0;

  return contador;
}
