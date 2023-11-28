import React from 'react'
import BoardRowRender from '../BoardRowRender/BoardRowRender';
import { Tablero } from '../../utils/coreGame';

const GameBoardRender = ({
  board,
}: {
  board: Tablero
}
) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {
        board.map((boardRow, index) => (
          <BoardRowRender
            key={`rowN-${index}`}
            boardRow={boardRow}
            rowNumber={index}
          />
        ))
      }
    </div>
  )
}

export default GameBoardRender