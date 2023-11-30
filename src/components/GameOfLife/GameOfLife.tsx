import { useSetAtom } from 'jotai';

import { gameBoardAtom } from '../../atoms/gameEngineAtom';
import WrapperGameBoardEngine from '../../wrappers/WrapperGameBoardEngine';
import GameBoardRender from '../GameBoardRender/GameBoardRender';

const GameOfLife = ({ theme }: { theme: 'light' | 'dark' }) => {
  const setGameBoard = useSetAtom(gameBoardAtom);

  const handleCellClick = (row: number, column: number) => {
    setGameBoard((currentBoard) => {
      const newBoard = [...currentBoard];
      newBoard[row][column] = !newBoard[row][column];
      return newBoard;
    });
  };

  return (
    <WrapperGameBoardEngine>
      <GameBoardRender theme={theme} onClick={handleCellClick} />
    </WrapperGameBoardEngine>
  );
};

export default GameOfLife;
