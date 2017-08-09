import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Cell from '../components/Cell/cell';
import {revealCell} from '../redux/actions/cells';
import {getCellsData} from '../redux/reducers/cells';

class CellContainer extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired,
    demonId: PropTypes.number,
    adjacentDemons: PropTypes.number.isRequired,
    revealCell: PropTypes.func.isRequired,
    isKiller: PropTypes.bool
  };

  render() {
    const {id, isDemon, isExposed, demonId, adjacentDemons, revealCell, isKiller} = this.props;

    return (
      <Cell
        id={id}
        isDemon={isDemon}
        isExposed={isExposed}
        demonId={demonId}
        adjacentDemons={adjacentDemons}
        revealCell={revealCell}
        isKiller={isKiller}
        />
    );
  }
}

const mapStateToProps = ({cells}, {id}) => {
  return {
    ...getCellsData(cells)[id]
  };
};

const mapDispatchToProps = {
  revealCell
};

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
