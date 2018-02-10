import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import './App.css';

const App = () => (
  <FlexContainer className="App">
    <Header />
  </FlexContainer>
);

const FlexContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
