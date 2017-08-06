import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cell.scss';
import classnames from 'classnames';

class Cell extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired,
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired,
    revealCell: PropTypes.func.isRequired
  };

  renderDemon() {
    return <img className={classes.demon} src={`/demons/${this.props.demonId}.png`}/>;
  }

  renderAdjacentCount() {
    const {adjacentDemons} = this.props;

    return (
      <span title={adjacentDemons} className={classnames(classes.adjacentDemons, classes[`count${adjacentDemons}`])}>{adjacentDemons}</span>
    );
  }

  handleClick = () => {
    const {revealCell, id} = this.props;
    revealCell(id);
  }

  render() {
    const {isDemon, adjacentDemons} = this.props;

    return (
      <div className={classes.cell} onClick={this.handleClick}>
        {isDemon && this.renderDemon()}
        {adjacentDemons > 0 && !isDemon && this.renderAdjacentCount()}
      </div>
    );
  }
}

export default Cell;
