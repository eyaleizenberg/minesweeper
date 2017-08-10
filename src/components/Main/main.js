import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './main.scss';
import Matrix from '../Matrix/matrix';
import ToolbarContainer from '../../containers/ToolbarContainer';
import NewGameDialog from '../Dialogs/newGameDialog';
import CustomGameDialog from '../Dialogs/customGameDialog';
import Logo from '../Logo/logo';

class Main extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired,
    newGameDialogShown: PropTypes.bool.isRequired,
    gameInProgress: PropTypes.bool.isRequired,
    showCustomGameDialog: PropTypes.func.isRequired,
    customGameDialogShown: PropTypes.bool.isRequired
  };

  renderMatrix() {
    const {sortedData, isGameOver} = this.props;
    return <Matrix sortedData={sortedData} isGameOver={isGameOver}/>;
  }

  renderContent() {
    const {newGameDialogShown, gameInProgress, initMatrix, showCustomGameDialog, customGameDialogShown} = this.props;

    if (newGameDialogShown) {
      return <NewGameDialog initMatrix={initMatrix} showCustomGameDialog={showCustomGameDialog}/>;
    }

    if (customGameDialogShown) {
      return <CustomGameDialog initMatrix={initMatrix}/>;
    }

    if (gameInProgress) {
      return this.renderMatrix();
    }

    return <Logo/>;
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
