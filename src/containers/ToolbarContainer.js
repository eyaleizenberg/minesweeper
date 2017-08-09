import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Toolbar from '../components/Toolbar/toolbar';

class ToolbarContainer extends PureComponent {
  static propTypes = {
    gameInProgress: PropTypes.bool.isRequired
  };

  render() {
    const {gameInProgress} = this.props;

    return (
      <Toolbar gameInProgress={gameInProgress}/>
    );
  }
}

const mapStateToProps = ({game}) => {
  return {
    gameInProgress: game.gameInProgress
  };
};

// const mapDispatchToProps = {
//   initMatrix
// };

export default connect(mapStateToProps)(ToolbarContainer);
