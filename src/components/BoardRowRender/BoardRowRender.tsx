import React from 'react';

import Square from '../Square/Square';

const BoardRowRender = ({
  boardRow,
  rowNumber,
  theme = 'dark',
}: {
  boardRow: boolean[];
  rowNumber: number;
  theme?: 'dark' | 'light';
}) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {boardRow.map((square, columnNumber) => (
        <Square
          key={`people-${rowNumber}-${columnNumber}`}
          status={square}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default BoardRowRender;
