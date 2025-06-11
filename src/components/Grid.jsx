import React from 'react';

const Grid = ({ row, column, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${column}, 1fr)`,
    gap: '5rem',
    padding: '1rem',
  };

  return <div style={gridStyle}>{children}</div>;
};

export default Grid;



