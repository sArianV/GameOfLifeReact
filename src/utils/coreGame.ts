// Tamaño del tablero
const columns = 170;
const rows = 70;
export const cellSize = 9;

// Tipo para representar el tablero
export type TGameBoard = boolean[][];

// Inicializar el tablero de manera aleatoria
export function initializeRandomBoard(): TGameBoard {
  const board: TGameBoard = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = Math.random() > 0.5; // true para célula viva, false para célula muerta
    }
  }
  return board;
}

// Calcular el siguiente estado del tablero según las reglas del Juego de la Vida
export function generateNextBoard(currentBoard: TGameBoard): TGameBoard {
  const newBoard: TGameBoard = [];

  for (let i = 0; i < rows; i++) {
    newBoard[i] = [];
    for (let j = 0; j < columns; j++) {
      const neighborsCount = countNeighbors(currentBoard, i, j);

      // Aplicar reglas del juego
      if (currentBoard[i][j]) {
        if (neighborsCount < 2 || neighborsCount > 3) {
          newBoard[i][j] = false; // Célula muerta por soledad o sobrepoblación
        } else {
          newBoard[i][j] = true; // Célula viva sigue viva
        }
      } else {
        if (neighborsCount === 3) {
          newBoard[i][j] = true; // Célula muerta revive
        } else {
          newBoard[i][j] = false; // Célula muerta sigue muerta
        }
      }
    }
  }
  return newBoard;
}

// Contar el número de células vivas alrededor de una posición dada
function countNeighbors(currentBoard: TGameBoard, x: number, y: number): number {
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborsRow = (x + i + rows) % rows; // Asegurar que esté en el rango [0, rows)
      const neighborsColumn = (y + j + columns) % columns; // Asegurar que esté en el rango [0, columns)

      count += currentBoard[neighborsRow][neighborsColumn] ? 1 : 0;
    }
  }

  // Restar la célula en la posición actual (para no contarla dos veces)
  count -= currentBoard[x][y] ? 1 : 0;

  return count;
}

export const boardWidth = columns;
export const boardHeight = rows;
