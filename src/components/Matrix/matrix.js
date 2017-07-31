import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import classes from './matrix.scss';

class Matrix extends PureComponent {
  static propTypes = {
    sortedData: PropTypes.array.isRequired
  };

  renderCells() {
    this.props.sortedData.map((column, columnIndex) => {
      debugger
    })
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
