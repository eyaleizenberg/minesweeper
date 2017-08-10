import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './toolbar.scss';
import Face from '../Face/face';

class Toolbar extends PureComponent {
  static propTypes = {
    gameInProgress: PropTypes.bool.isRequired,
    showNewGame: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
  };

  renderIntroBox(text, handleClick) {
    return (
      <div className={classes.introBox}>
        <span className={classes.gameText} onClick={handleClick}>{text}</span>
      </div>
    );
  }

  renderIntroContent() {
    return (
      <div className={classes.content}>
        {this.renderIntroBox('NEW GAME', this.props.showNewGame)}
        <div className={classes.face}>
          <Face/>
        </div>
        {this.renderIntroBox('LOAD GAME')}
      </div>
    );
  }

  renderInProgressContent() {
    const {isGameOver} = this.props;

    return (
      <div className={classes.content}>
        {this.renderIntroBox('NEW GAME', this.props.showNewGame)}
        <div className={classes.face}>
          <Face isGameOver={isGameOver}/>
        </div>
        {this.renderIntroBox('LOAD GAME')}
      </div>
    );
  }

  render() {
    return (
      <div className={classes.container}>
        {this.props.gameInProgress ? this.renderInProgressContent() : this.renderIntroContent()}
      </div>
    );
  }
}

export default Toolbar;
