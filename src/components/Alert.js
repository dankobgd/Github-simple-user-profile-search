import React from 'react';

const alertStyle = {
  backgroundColor: '#a34444',
  border: '1px solid #fff',
  color: '#fff',
  padding: '0.5rem',
  margin: '1rem auto 0 auto',
  width: '300px',
  textAlign: 'center',
  fontSize: '1rem',
  fontWeight: '600',
};

const Alert = ({ message }) => (
  <div style={alertStyle}>
    <span>{message}</span>
  </div>
);

export default Alert;
