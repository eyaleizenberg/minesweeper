import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';

class AppContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initMatrix();
  }

  render() {
    return (
      <Main/>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapping state', state);
  return {};
};

const mapDispatchToProps = {
  initMatrix
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
