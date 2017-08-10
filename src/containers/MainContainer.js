import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';
import {showCustomGameDialog} from '../redux/actions/game';

class MainContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired,
    newGameDialogShown: PropTypes.bool.isRequired,
    gameInProgress: PropTypes.bool.isRequired,
    showCustomGameDialog: PropTypes.func.isRequired
  };

  render() {
    const {sortedData, initMatrix, isGameOver, newGameDialogShown, gameInProgress, showCustomGameDialog} = this.props;

    return (
      <Main
        sortedData={sortedData}
        initMatrix={initMatrix}
        isGameOver={isGameOver}
        newGameDialogShown={newGameDialogShown}
        gameInProgress={gameInProgress}
        showCustomGameDialog={showCustomGameDialog}
        />
    );
  }
}

const mapStateToProps = ({cells, game}) => {
  return {
    sortedData: cells.sortedData,
    isGameOver: game.isGameOver,
    newGameDialogShown: game.newGameDialogShown,
    gameInProgress: game.gameInProgress
  };
};

const mapDispatchToProps = {
  initMatrix,
  showCustomGameDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
