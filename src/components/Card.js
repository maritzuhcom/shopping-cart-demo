import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemCard = props => (
  <CardInteractions>
    <Card>
      <ContentContainer>
        <img style={{ height: '100%' }} src={props.src} alt="pup!" />
      </ContentContainer>

      <ContentContainer padding=".5em 0 0 0">
        <Text fontSize="15px">
          {props.name}
        </Text>

        <Text fontSize="30px">
            ${(props.price / 100).toFixed(2)}
        </Text>

        <Active>
          <Button
            onClick={props.onClick}
          >
              Add to cart
          </Button>
        </Active>
      </ContentContainer>
    </Card>
  </CardInteractions>
);

ItemCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};

ItemCard.defaultProps = {
  src: 'https://i.imgur.com/fixCI7P.jpg',
  name: 'cool clothes',
  price: 999,
  onClick: () => {},
};

export default ItemCard;

const Card = styled.div`
  height: 15em;
  width: 15.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1em 1em 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  transition: box-shadow 0.3s;
  border: 1px solid rgb(218,207,207);
  overflow: hidden;
`;

const CardInteractions = styled.section`
  ${Card}:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const ContentContainer = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.padding || '0'}
`;

const Text = styled.span`
  color: rgb(110, 100, 100);
  font-weight: 100;
  font-size: ${props => props.fontSize || '10px'}
`;

export const Button = styled.button`
  color: rgb(110, 100, 100);
  border: 1px solid rgb(218,207,207);
  font-size: 14px;
  border-radius: 4px;
  padding: .4em 1em;
`;

export const Active = styled.div`
  ${Button}:active {
    background-color: rgb(190, 170, 170)
  }
`;
