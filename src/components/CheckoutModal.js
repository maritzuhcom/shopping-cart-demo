import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { closeModal } from '../actions/modals';
import { removeItem } from '../actions/cart';
import CartItem from './CartItem';
import { Button, Active } from './Card';

class CheckoutModal extends Component {
  static propTypes = {
    price: PropTypes.number,
    items: PropTypes.array,
    itemCount: PropTypes.number,
    dispatchCloseModal: PropTypes.func,
    dispatchRemoveItem: PropTypes.func,
  }

  static defaultProps = {
    price: 0,
    items: [],
    itemCount: 0,
    dispatchCloseModal: () => {},
    dispatchRemoveItem: () => {},
  }

  closeModal = () => {
    this.props.dispatchCloseModal();
  }

  renderCartItems = () => this.props.items.map((item, i) => (
    <CartItem
      key={i}
      imgSrc={item.filename}
      title={item.name}
      price={item.price}
      onDelete={() => { this.props.dispatchRemoveItem(i, item.price); }}
    />
  ))

  render() {
    return (
      <ModalBody>
        <ModalContent>
          <Text>
            Your Cart
          </Text>

          <Content center={!this.props.itemCount}>
            {this.props.itemCount ?
              this.renderCartItems()
              :
              <Text>
                Nothing in your cart,
                start shopping.
              </Text>
            }
          </Content>

          <Divider />

          <FlexRow>
            <Text>
              Total
            </Text>

            <Text>
              ${(this.props.price / 100).toFixed(2)}
            </Text>
          </FlexRow>

          <Active>
            <Button onClick={this.closeModal}>
              Back
            </Button>
          </Active>
        </ModalContent>
      </ModalBody>
    );
  }
}

const ModalBody = styled.main`
  position: fixed;
  height: calc(100% - 3em);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  box-sizing: border-box;
  margin-top: 3em
`;

const ModalContent = styled.section`
  height: 20em;
  width: 14em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Content = styled.section`
  height: 100%;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')}
`;

const Text = styled.span`
  flex-shrink: 0;
  font-size: ${props => props.fontSize || '20px'};
  text-align: center;
`;

const Divider = styled.div`
  flex-shrink: 0;
  height: 2px;
  width: 100%;
  margin: 1em 0;
  background-color: rgb(40, 40, 40);
`;

const FlexRow = styled.div`
  flex-shrink: 0;
  display: flex;
  flew-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
`;

const mapStateToProps = state => ({
  ...state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchCloseModal: closeModal,
  dispatchRemoveItem: removeItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
