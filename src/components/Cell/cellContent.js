import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cellContent.scss';
import classnames from 'classnames';

export default class CellContent extends PureComponent {
  static propTypes = {
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isKiller: PropTypes.bool
  };

  renderDemon() {
    const {isKiller, demonId} = this.props;
    return (
      <img
        className={classnames(classes.demon, {[classes.isKiller]: isKiller})}
        src={`${window.__STATICS_BASE_URL__}/assets/images/demons/${demonId}.png`}
        />
    );
  }

  renderAdjacentCount() {
    const {adjacentDemons} = this.props;

    return (
      <span title={adjacentDemons} className={classnames(classes.adjacentDemons, classes[`count${adjacentDemons}`])}>{adjacentDemons}</span>
    );
  }

  render() {
    const {isDemon, adjacentDemons} = this.props;

    if (isDemon) {
      return this.renderDemon();
    }

    if (adjacentDemons > 0) {
      return this.renderAdjacentCount();
    }

    return null;
  }
}
