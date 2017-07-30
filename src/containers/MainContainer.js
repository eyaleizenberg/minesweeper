import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';

class AppContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };

  render() {
    const {width, height, initMatrix} = this.props;

    return (
      <Main width={width} height={height} initMatrix={initMatrix}/>
    );
  }
}

const mapStateToProps = ({cells}) => {
  return {
    width: cells.width,
    height: cells.height
  };
};

const mapDispatchToProps = {
  initMatrix
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
