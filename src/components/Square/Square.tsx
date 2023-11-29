import React from 'react';

const Square = ({ status, theme }: { status: boolean; theme?: 'dark' | 'light' }) => {
  return (
    <div
      style={
        !status
          ? {
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
