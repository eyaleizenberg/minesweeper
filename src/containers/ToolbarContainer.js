import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Toolbar from '../components/Toolbar/toolbar';
import {showNewGame} from '../redux/actions/game';

class ToolbarContainer extends PureComponent {
  static propTypes = {
    gameInProgress: PropTypes.bool.isRequired,
    showNewGame: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
  };

  render() {
    const {gameInProgress, showNewGame, isGameOver} = this.props;

    return (
      <Toolbar gameInProgress={gameInProgress} showNewGame={showNewGame} isGameOver={isGameOver}/>
    );
  }
}

const mapStateToProps = ({game}) => {
  return {
    gameInProgress: game.gameInProgress,
    isGameOver: game.isGameOver
  };
};

const mapDispatchToProps = {
  showNewGame
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);
