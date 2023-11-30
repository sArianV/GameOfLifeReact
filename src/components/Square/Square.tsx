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
              cursor: 'pointer',
              borderRadius: '2px',
              width: '.8rem',
              height: '.8rem',
              backgroundColor:
                theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              marginRight: '1px',
              marginBottom: '1px',
            }
          : {
              cursor: 'pointer',
              borderRadius: '2px',
              width: '.8rem',
              height: '.8rem',
              backgroundColor: theme === 'dark' ? 'burlywood' : 'darkviolet',
              marginRight: '1px',
              marginBottom: '1px',
            }
      }
    />
  );
};

export default Square;
