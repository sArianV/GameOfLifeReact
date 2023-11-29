import React from 'react';

import BoardRowRender from '../BoardRowRender/BoardRowRender';
import WithGameBoardEngine from '../hocs/withGameBoardEngine';
import { IGameBoardRenderProps } from './types';

const GameBoardRender = ({ board, theme = 'dark' }: IGameBoardRenderProps) => {
  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'gray',
        borderLeft: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'gray',
      }}
    >
      {board?.map((boardRow, index) => (
        <BoardRowRender
          key={`rowN-${index}`}
          boardRow={boardRow}
          rowNumber={index}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default WithGameBoardEngine(GameBoardRender);
