import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CellContainer from '../../containers/CellContainer';
// import classes from './matrix.scss';

class Matrix extends PureComponent {
  static propTypes = {
    sortedData: PropTypes.array.isRequired
  };

  renderCells() {
    return this.props.sortedData.map((column, columnIndex) => (
      <div key={columnIndex}>
        {
          column.map(id => <CellContainer key={id} id={id}/>)
        }
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderCells()}
      </div>
    );
  }
}

export default Matrix;
