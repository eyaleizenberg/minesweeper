import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './cellContent.scss';
import classnames from 'classnames';

export default class CellContent extends PureComponent {
  static propTypes = {
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired,
    isDemon: PropTypes.bool.isRequired
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

  render() {
    const {isDemon} = this.props;

    if (isDemon) {
      return this.renderDemon();
    }

    return this.renderAdjacentCount();
  }
}
