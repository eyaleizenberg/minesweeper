import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CellContainer from '../../containers/CellContainer';
import classes from './matrix.scss';
import classnames from 'classnames';

class Matrix extends PureComponent {
  static propTypes = {
    sortedData: PropTypes.array.isRequired,
    isGameOver: PropTypes.bool.isRequired
  };

  renderCells() {
    return this.props.sortedData.map((column, columnIndex) => (
      <div className={classes.column} key={columnIndex}>
        {
          column.map(id => <CellContainer key={id} id={id}/>)
        }
      </div>
    ));
  }

  render() {
    return (
      <div className={classnames(classes.container, {[classes.gameOver]: this.props.isGameOver})}>
        {this.renderCells()}
      </div>
    );
  }
}

export default Matrix;
