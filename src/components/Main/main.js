import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './main.scss';
import Matrix from '../Matrix/matrix';
import ToolbarContainer from '../../containers/ToolbarContainer';
import NewGameDialog from '../NewGameDialog/newGameDialog';
import Logo from '../Logo/logo';

class Main extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired,
    newGameDialogShown: PropTypes.bool.isRequired,
    gameInProgress: PropTypes.bool.isRequired,
    showCustomGameDialog: PropTypes.func.isRequired
  };

  renderMatrix() {
    const {sortedData, isGameOver} = this.props;
    return <Matrix sortedData={sortedData} isGameOver={isGameOver}/>;
  }

  renderContent() {
    const {newGameDialogShown, gameInProgress, initMatrix, showCustomGameDialog} = this.props;

    if (!newGameDialogShown && !gameInProgress) {
      return <Logo/>;
    }

    if (newGameDialogShown) {
      return <NewGameDialog initMatrix={initMatrix} showCustomGameDialog={showCustomGameDialog} />;
    }

    return this.renderMatrix();
  }

  render() {
    return (
      <div className={classes.main}>
        <div className={classes.content}>
          {this.renderContent()}
        </div>
        <ToolbarContainer/>
      </div>
    );
  }
}

export default Main;
