import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Cell from '../components/Cell/cell';

class CellContainer extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired
  };

  render() {
    const {isDemon, isExposed} = this.props;

    return (
      <Cell isDemon={isDemon} isExposed={isExposed}/>
    );
  }
}

const mapStateToProps = ({cells}, {id}) => {
  return {
    ...cells.data[id]
  };
};

// const mapDispatchToProps = {
//   initMatrix
// };

export default connect(mapStateToProps)(CellContainer);
