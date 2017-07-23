import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

class AppContainer extends PureComponent {
  render() {
    return (
      <div>Hello!</div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapping state', state);
  return {};
};

const mapDispatchToProps = dispatch => {
  console.info('dispatch', dispatch);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
