import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cell.scss';

class Cell extends PureComponent {
  static propTypes = {
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired,
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired
  };

  renderDemon() {
    return <img className={classes.demon} src={`/demons/${this.props.demonId}.png`}/>;
  }

  renderAdjacentCount() {
    const {adjacentDemons} = this.props;

    return (
      <span className={classes[`adjacentDemons-${adjacentDemons}`]}>{adjacentDemons}</span>
    );
  }

  render() {
    const {isDemon, adjacentDemons} = this.props;

    return (
      <div className={classes.cell}>
        {isDemon && this.renderDemon()}
        {adjacentDemons > 0 && !isDemon && this.renderAdjacentCount()}
      </div>
    );
  }
}

export default Cell;
