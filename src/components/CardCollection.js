import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { getItems } from '../actions/items';

import Card from './Card';

class FeaturedCollection extends Component {
  static propTypes = {
    products: PropTypes.array,
    dispatchGetItems: PropTypes.func,
  }

  static defaultProps = {
    products: [],
    dispatchGetItems: () => {},
  }

  componentWillMount() {
    this.props.dispatchGetItems();
  }

  clickHandler = (data) => {
    console.log(data);
  }

  render() {
    return (
      <Container>
        <CollectionHeader>
          Shop our featured collection
        </CollectionHeader>
        <FlexGrid>
          {this.props.products.map((data, i) => (
            <Card
              key={i}
              name={data.name}
              price={data.price}
              src={data.filename}
              onClick={() => { this.clickHandler(data); }}
            />
            ))
          }
        </FlexGrid>
      </Container>
    );
  }
}

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
`;

const CollectionHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: rgb(64,64,64);
`;

const FlexGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const mapStateToProps = state => ({
  products: [...state.items.products],
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetItems: getItems,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCollection);
