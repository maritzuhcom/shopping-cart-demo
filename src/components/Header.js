import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { openModal } from '../actions/modals';

class Header extends Component {
  static defaultProps = {
    count: 0,
    dispatchOpenModal: () => {},
  }

  static propTypes = {
    count: PropTypes.number,
    dispatchOpenModal: PropTypes.func,
  }

  cartHandler = () => {
    this.props.dispatchOpenModal();
  }

  render() {
    return (
      <ShoppingHeader>
        <FlexRow>
          <i className="material-icons">shopping_cart</i>
          <Text
            fontWeight="900"
            fontSize="20px"
            marginRight="1em"
            marginLeft="0.3em"
          >
            Cart.ly
          </Text>

          <Hover>
            <Text
              fontWeight="100"
              fontSize="17px"
            >
              Shop
            </Text>
          </Hover>
        </FlexRow>

        <FlexRow>
          <Hover>
            <Text
              fontWeight="500"
              marginLeft=".3em"
              marginRight=".3em"
              onClick={this.cartHandler}
            >
              Your Cart
            </Text>
          </Hover>
          <CartCount>
            {this.props.count}
          </CartCount>
        </FlexRow>
      </ShoppingHeader>
    );
  }
}

const ShoppingHeader = styled.header`
  width: 100%;
  height: 3em;
  background-color: rgb(13,0,202);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-sizing: border-box;
  padding: 0 1em;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.span`
  font-weight: ${props => props.fontWeight || '100'};
  font-size: ${props => props.fontSize || '15px'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  line-height: 3em;
`;

const Hover = styled.div`
  ${Text}:hover {
    text-decoration: underline;
    cursor: pointer
  }
`;

const CartCount = styled.div`
  background-color: white;
  height: 1.1em;
  width: 2em;
  color: rgb(13,0,202);
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 2px;
  line-height: 1em;
`;

const mapStateToProps = state => ({
  count: state.cart.itemCount,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchOpenModal: openModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
