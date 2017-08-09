import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './main.scss';
import Matrix from '../Matrix/matrix';
import ToolbarContainer from '../../containers/ToolbarContainer';
import NewGameDialog from '../NewGameDialog/newGameDialog';

class Main extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired,
    newGameDialogShown: PropTypes.bool.isRequired
  };

  renderMatrix() {
    const {sortedData, isGameOver} = this.props;
    if (!sortedData.length) {
      return null;
    }

    return <Matrix sortedData={sortedData} isGameOver={isGameOver}/>;
  }

  handleInitButtonClicked = () => {
    this.props.initMatrix();
  }

  renderContent() {
    if (this.props.newGameDialogShown) {
      return <NewGameDialog/>;
    }

    return null;
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
