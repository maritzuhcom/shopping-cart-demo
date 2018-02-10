import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { getItems } from '../actions/items';

class FeaturedCollection extends Component {
  static propTypes = {
    dispatchGetItems: PropTypes.func,
  }

  static defaultProps = {
    dispatchGetItems: () => {},
  }

  componentWillMount() {
    this.props.dispatchGetItems();
  }

  render() {
    return (
      <Container>
        <CollectionHeader>
          Shop our featured collection
        </CollectionHeader>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetItems: getItems,
}, dispatch);

export default connect(null, mapDispatchToProps)(FeaturedCollection);
