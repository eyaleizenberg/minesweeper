import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './newGameDialog.scss';
import dialogClasses from './dialogs.scss';
import classnames from 'classnames';
import DEFAULT_GAME_LEVELS from '../../constants/defaultGameLevels';

class NewGameDialog extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    showCustomGameDialog: PropTypes.func.isRequired
  };

  handleClick = event => {
    const {width, height, totalDemons} = DEFAULT_GAME_LEVELS[event.target.dataset.levelid];
    this.props.initMatrix({width, height, totalDemons});
  }

  handleCustomDialogClick = () => {
    this.props.showCustomGameDialog();
  }

  render() {
    return (
      <div className={dialogClasses.container}>
        <div className={classes.textContainer}>
          <span className={dialogClasses.text}>NEW GAME</span>
          <span className={dialogClasses.text}>CHOOSE YOUR SKILL LEVEL:</span>
        </div>
        <div className={classnames(classes.textContainer, classes.levels)}>
          {Object.keys(DEFAULT_GAME_LEVELS).map(key => {
            const gameLevel = DEFAULT_GAME_LEVELS[key];
            return (
              <span
                key={gameLevel.id}
                data-levelId={gameLevel.id}
                className={classnames(dialogClasses.text, classes.text)}
                onClick={this.handleClick}
                >
                {gameLevel.text}
              </span>
            );
          })}
          <span onClick={this.handleCustomDialogClick} className={classnames(dialogClasses.text, classes.text)}>YOUR PERSONAL NIGHTMARE...</span>
        </div>
      </div>
    );
  }
}

export default NewGameDialog;
