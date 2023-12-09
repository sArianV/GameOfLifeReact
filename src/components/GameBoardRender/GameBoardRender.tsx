/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAtomValue } from 'jotai';
import React from 'react';

import { gameBoardAtom } from '../../atoms/gameEngineAtom';
import { boardHeight, boardWidth, cellSize } from '../../utils/coreGame';
import BoardRowRender from '../BoardRowRender/BoardRowRender';
import { IGameBoardRenderProps } from './types';
const GameBoardRender = ({ theme = 'dark', onClick }: IGameBoardRenderProps) => {
  const board = useAtomValue(gameBoardAtom);
  return (
    <div
      style={{
        width: 'fit-content',
        display: 'grid',
        gridTemplateRows: `repeat(${boardHeight},  auto)`,
        gridTemplateColumns: `repeat(${boardWidth}, auto)`,
      }}
    >
      {board?.map((boardRow, rowNumber) => {
        return boardRow.map((cell, columnNumber) => (
          <div
            key={`row-${rowNumber}-column-${columnNumber}`}
            role="button"
            onClick={() => onClick(rowNumber, columnNumber)}
            style={
              !cell
                ? {
                    cursor: 'pointer',
                    borderRadius: '1px',
                    width: cellSize,
                    height: cellSize,
                    backgroundColor:
                      theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)',
                    marginRight: '1px',
                    marginBottom: '1px',
                  }
                : {
                    cursor: 'pointer',
                    borderRadius: '1px',
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: theme === 'dark' ? 'burlywood' : 'darkviolet',
                    marginRight: '1px',
                    marginBottom: '1px',
                  }
            }
          />
        ));
      })}
    </div>
  );
};

export default GameBoardRender;
