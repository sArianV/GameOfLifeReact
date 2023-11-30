/* eslint-disable react/display-name */

import { useSetAtom } from 'jotai';
import { ReactElement, useEffect } from 'react';

import { gameBoardAtom } from '../atoms/gameEngineAtom';
import { generateNextBoard } from '../utils/coreGame';

const WrapperGameBoardEngine = ({ children }: { children: ReactElement }) => {
  const setGameBoard = useSetAtom(gameBoardAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameBoard((currentBoard) => generateNextBoard(currentBoard));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <div>{children}</div>;
};

export default WrapperGameBoardEngine;
