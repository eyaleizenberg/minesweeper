import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cell.scss';
import classnames from 'classnames';
import CellContent from './cellContent';

class Cell extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired,
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired,
    revealCell: PropTypes.func.isRequired,
    isKiller: PropTypes.bool
  };

  renderDemon() {
    return <img className={classes.demon} src={`${window.__STATICS_BASE_URL__}/assets/images/demons/${this.props.demonId}.png`}/>;
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
    const {isDemon, adjacentDemons, isExposed, demonId, isKiller} = this.props;

    return (
      <div className={classnames(classes.cell, {[classes.isExposed]: isExposed})} onClick={this.handleClick}>
        {isExposed && <CellContent adjacentDemons={adjacentDemons} isDemon={isDemon} demonId={demonId} isKiller={isKiller}/>}
      </div>
    );
  }
}

export default Cell;
