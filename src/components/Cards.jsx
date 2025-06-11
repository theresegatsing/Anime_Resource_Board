import React from 'react';

const Cards = ({ title, content, image, moreInfo }) => {
  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h3 style={{ margin: '0.5rem 0 0.2rem' }}>{title}</h3>
      <p style={{ margin: '0 0 0.5rem' }}>{content}</p>
      <button style={buttonStyle}>{moreInfo}</button>
    </div>
  );
};

const cardStyle = {
  backgroundColor: 'lightblue',
  borderRadius: '12px',
  padding: '1rem',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const buttonStyle = {
  backgroundColor: 'turquoise',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Cards;






