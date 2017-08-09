import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import classes from './newGameDialog.scss';
import classnames from 'classnames';

class NewGameDialog extends PureComponent {
  // static propTypes = {
  //   initMatrix: PropTypes.func.isRequired,
  //   sortedData: PropTypes.array,
  //   isGameOver: PropTypes.bool.isRequired
  // };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <span className={classes.text}>NEW GAME</span>
          <span className={classes.text}>CHOOSE YOUR SKILL LEVEL:</span>
        </div>
        <div className={classnames(classes.textContainer, classes.levels)}>
          <span className={classes.text}>I AM TOO YOUNG TO DIE</span>
          <span className={classes.text}>HEY, NOT TOO ROUGH</span>
          <span className={classes.text}>HURT ME PLENTY</span>
          <span className={classes.text}>ULTRA-VIOLENCE</span>
          <span className={classes.text}>YOUR PERSONAL NIGHTMARE...</span>
        </div>
      </div>
    );
  }
}

export default NewGameDialog;
