import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';

class AppContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired,
    newGameDialogShown: PropTypes.bool.isRequired
  };

  render() {
    const {sortedData, initMatrix, isGameOver, newGameDialogShown} = this.props;

    return (
      <Main sortedData={sortedData} initMatrix={initMatrix} isGameOver={isGameOver} newGameDialogShown={newGameDialogShown}/>
    );
  }
}

const mapStateToProps = ({cells, game}) => {
  return {
    sortedData: cells.sortedData,
    isGameOver: game.isGameOver,
    newGameDialogShown: game.newGameDialogShown
  };
};

const mapDispatchToProps = {
  initMatrix
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
