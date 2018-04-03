import * as React from 'react';
import styled from 'styled-components';
const H2 = styled.h2`
  font-size: 30px;
  color: navy;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
`;
const logo = require('../logo.svg');

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h2
          style={{
            fontSize: '30px',
            color: 'aquamarine',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textDecoration: 'underline'
          }}
        >
          inLine Style Project
        </h2> */}
        <H2>Styled-Components Style Project </H2>
      </header>
    );
  }
}

export default Header;
