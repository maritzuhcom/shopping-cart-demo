import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartItem = ({
  imgSrc, title, price, onDelete,
}) => (
  <Container>
    <img style={{ height: '100%' }} src={imgSrc} alt="pup!" />
    <FlexCol>
      <Text marR="15px">
        {title}
      </Text>

      <Text fontSize="15px">
        ${(price / 100).toFixed(2)}
      </Text>
    </FlexCol>
    <Remove onClick={onDelete}>x</Remove>
  </Container>
);

CartItem.defaultProps = {
  imgSrc: 'https://i.imgur.com/fixCI7P.jpg',
  title: 'cloth',
  price: 0,
};

CartItem.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

const Container = styled.main`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2em;
  margin-bottom: 1em;
  overflow
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify: space-between;
`;

const Text = styled.div`
  margin-right: ${props => props.marR || '0'};
  font-size: ${props => props.fontSize || '13px'};
  text-align: end;
`;

const Remove = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 12px;
  width: 12px;
  background-color: rgb(220,220,220);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  line-height: 12px;
  font-size: 11px;
  text-align: center;
`;

export default CartItem;
