import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './main.scss';
import Matrix from '../Matrix/matrix';

class Main extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired
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

  render() {
    return (
      <div className={classes.main}>
        <span>This is the main component</span>
        <div className={classes.bigButton} onClick={this.handleInitButtonClicked}>New Game</div>
        {this.renderMatrix()}
      </div>
    );
  }
}

export default Main;
