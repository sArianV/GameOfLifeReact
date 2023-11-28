import React from 'react';

import { Tablero } from '../../utils/coreGame';
import BoardRowRender from '../BoardRowRender/BoardRowRender';

const GameBoardRender = ({ board }: { board: Tablero }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {board.map((boardRow, index) => (
        <BoardRowRender key={`rowN-${index}`} boardRow={boardRow} rowNumber={index} />
      ))}
    </div>
  );
};

export default GameBoardRender;
