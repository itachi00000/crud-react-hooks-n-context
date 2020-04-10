import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../js/actions/index';

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

class Post extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return null;
  }
}

export default connect(null, mapDispatchToProps)(Post);
