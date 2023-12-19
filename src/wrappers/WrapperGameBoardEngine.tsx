/* eslint-disable react/display-name */

import { useSetAtom } from 'jotai';
import { ReactElement, useEffect } from 'react';

import { gameBoardAtom } from '../atoms/gameEngineAtom';
import { generateNextBoard, initializeRandomBoard } from '../utils/coreGame';

const WrapperGameBoardEngine = ({
  children,
  speed,
  rows,
  columns,
}: {
  children: ReactElement;
  speed: number;
  rows: number;
  columns: number;
}) => {
  const setGameBoard = useSetAtom(gameBoardAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameBoard((currentBoard) =>
        !currentBoard
          ? initializeRandomBoard(rows, columns)
          : generateNextBoard(currentBoard, rows, columns),
      );
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return <div>{children}</div>;
};

export default WrapperGameBoardEngine;
