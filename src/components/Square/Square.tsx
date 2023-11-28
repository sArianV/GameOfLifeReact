import React from 'react';

const Square = ({ status }: { status: boolean }) => {
  return (
    <div
      style={
        !status
          ? {
              width: '.8rem',
              height: '.8rem',
              backgroundColor: 'white',
              borderRight: '1px',
              borderRightStyle: 'solid',
              borderRightColor: 'lightgray',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'lightgray',
            }
          : {
              width: '.8rem',
              height: '.8rem',
              backgroundColor: 'darkviolet',
              borderRight: '1px',
              borderRightStyle: 'solid',
              borderRightColor: 'lightgray',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'lightgray',
            }
      }
    />
  );
};

export default Square;
