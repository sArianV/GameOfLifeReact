import { useAtomValue, useSetAtom } from 'jotai';

import { boardConfigAtom, gameBoardAtom } from '../../atoms/gameEngineAtom';
import WrapperGameBoardEngine from '../../wrappers/WrapperGameBoardEngine';
import CanvasBoardRender from '../CanvasBoardRender/CanvasBoardRender';

const GameOfLife = () => {
  const setGameBoard = useSetAtom(gameBoardAtom);
  const { speed, cellBorderWidth, cellSize, rows, columns } =
    useAtomValue(boardConfigAtom);

  const handleCellClick = (row: number, column: number) => {
    setGameBoard((currentBoard) => {
      if (!currentBoard) return currentBoard;
      const newBoard = [...currentBoard];
      newBoard[row][column] = !newBoard[row][column];
      return newBoard;
    });
  };

  return (
    <WrapperGameBoardEngine speed={speed} columns={columns} rows={rows}>
      <CanvasBoardRender cellSize={cellSize} cellBorderWidth={cellBorderWidth} />
      {/* <GameBoardRender theme={theme} onClick={handleCellClick} /> */}
    </WrapperGameBoardEngine>
  );
};

export default GameOfLife;
