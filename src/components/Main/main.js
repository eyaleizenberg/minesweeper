import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './main.scss';

class Main extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    initMatrix: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleInitButtonClicked = this.handleInitButtonClicked.bind(this);
  }
  renderMatrix() {
    if (!this.props.width) {
      return null;
    }

    const {width, height} = this.props;
    return (
      <span>{`the size is ${width} X ${height}`}</span>
    );
  }

  handleInitButtonClicked() {
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
