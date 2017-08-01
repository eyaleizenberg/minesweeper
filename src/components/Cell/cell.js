import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cell.scss';

class Cell extends PureComponent {
  static propTypes = {
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired
  };

  renderDemon() {
    return <img className={classes.demon} src="/demons/cacodemon.png"/>;
  }
  render() {
    return (
      <div className={classes.cell}>
        {this.props.isDemon && this.renderDemon()}
      </div>
    );
  }
}

export default Cell;
