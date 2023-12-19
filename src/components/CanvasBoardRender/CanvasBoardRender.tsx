import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { gameBoardAtom } from '../../atoms/gameEngineAtom';

const CanvasBoardRender = ({
  cellSize,
  cellBorderWidth,
}: {
  cellSize: number;
  cellBorderWidth: number;
}) => {
  const board = useAtomValue(gameBoardAtom);
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(
    null,
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(
    function drawBoard() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      if (board) {
        const deathCellColor = 'rgba(255, 255, 255, 0.1)'; // Color de las celdas muertas
        const liveCellColor = 'burlywood'; // Color de las celdas vivas
        // Calcular el ancho y la altura del canvas en función del tamaño de la celda y la cantidad de filas y columnas
        const canvasWidth = board[0].length * cellSize;
        const canvasHeight = board.length * cellSize;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        for (let row = 0; row < board.length; row++) {
          for (let col = 0; col < board[row].length; col++) {
            const cellValue = board[row][col];

            // Color de las celdas (por ejemplo, blanco para celdas vivas y negro para celdas muertas)
            context.fillStyle = cellValue ? liveCellColor : deathCellColor;

            // Dibujar la celda con borde en la posición (col * cellSize, row * cellSize)
            context.fillRect(
              col * cellSize,
              row * cellSize,
              cellSize - cellBorderWidth,
              cellSize - cellBorderWidth,
            );

            // Dibujar el borde alrededor de la celda
            context.strokeStyle = 'transparent';
            context.lineWidth = cellBorderWidth;
            context.strokeRect(
              col * cellSize + cellBorderWidth / 2,
              row * cellSize + cellBorderWidth / 2,
              cellSize - cellBorderWidth,
              cellSize - cellBorderWidth,
            );
          }
        }
      }

      setCanvasContext(context);
    },
    [board, cellBorderWidth, cellSize],
  );

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasBoardRender;
