import React from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #a34444',
  color: '#a34444',
  padding: '2rem',
};

const pStyle = {
  fontSize: '1.4rem',
};

const inputStyle = {
  display: 'inline-flex',
  marginTop: '2rem',
  width: '400px',
  height: '35px',
  lineHeight: '35px',
  padding: '1rem',
  fontSize: '1.2rem',
  color: '#a34444',
};

const searchForm = props => (
  <div className="container">
    <form style={formStyle}>
      <p style={pStyle}>Search github users by typing their name</p>
      <input style={inputStyle} type="text" placeholder="Github Username" />
    </form>
  </div>
);

export default searchForm;
