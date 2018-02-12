import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header';
import CardCollection from './components/CardCollection';
import CheckoutModal from './components/CheckoutModal';
import './App.css';

const App = props => (
  <FlexContainer className="App">
    <Header />
    <CardCollection />
    {
      props.checkoutModal ?
        <CheckoutModal />
      :
      ''
    }
  </FlexContainer>
);

App.propTypes = {
  checkoutModal: PropTypes.bool,
};

App.defaultProps = {
  checkoutModal: false,
};

const FlexContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  filter: ${props => (props.blur ? 'blur(4px)' : '')}
`;

const mapStateToProps = state => ({
  checkoutModal: state.modals.checkoutModal,
});

export default connect(mapStateToProps)(App);
