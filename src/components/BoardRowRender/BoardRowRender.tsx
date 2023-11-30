import { Box } from '@chakra-ui/react';
import React from 'react';

import Square from '../Square/Square';

const BoardRowRender = ({
  boardRow,
  rowNumber,
  theme = 'dark',
  onClick,
}: {
  boardRow: boolean[];
  rowNumber: number;
  theme?: 'dark' | 'light';
  onClick?: (row: number, column: number) => void;
}) => {
  return (
    <Box display="flex">
      {boardRow.map((square, columnNumber) => (
        <Square
          onClick={() => {
            if (onClick) onClick(rowNumber, columnNumber);
          }}
          key={`people-${rowNumber}-${columnNumber}`}
          status={square}
          theme={theme}
        />
      ))}
    </Box>
  );
};

export default BoardRowRender;
