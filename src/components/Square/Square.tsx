import { Box } from '@chakra-ui/react';
import React from 'react';

const Square = ({
  status,
  theme,
  onClick,
}: {
  status: boolean;
  theme?: 'dark' | 'light';
  onClick: () => void;
}) => {
  return (
    <Box
      onClick={onClick}
      style={
        !status
          ? {
              borderRadius: '2px',
              width: '.8rem',
              height: '.8rem',
              backgroundColor: 'transparent',
              borderRight: '1px',
              borderRightStyle: 'solid',
              borderRightColor: 'gray',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'gray',
            }
          : {
              borderRadius: '2px',
              width: '.8rem',
              height: '.8rem',
              backgroundColor: theme === 'dark' ? 'burlywood' : 'darkviolet',
              borderRight: '1px',
              borderRightStyle: 'solid',
              borderRightColor: 'gray',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'gray',
            }
      }
    />
  );
};

export default Square;
