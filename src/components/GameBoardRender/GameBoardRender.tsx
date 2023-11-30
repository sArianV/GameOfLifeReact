import { useAtomValue } from 'jotai';
import React from 'react';

import { gameBoardAtom } from '../../atoms/gameEngineAtom';
import BoardRowRender from '../BoardRowRender/BoardRowRender';
import { IGameBoardRenderProps } from './types';

const GameBoardRender = ({ theme = 'dark', onClick }: IGameBoardRenderProps) => {
  const board = useAtomValue(gameBoardAtom);
  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {board?.map((boardRow, index) => (
        <BoardRowRender
          onClick={onClick}
          key={`rowN-${index}`}
          boardRow={boardRow}
          rowNumber={index}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default GameBoardRender;
