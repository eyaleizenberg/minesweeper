import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';

class AppContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array,
    isGameOver: PropTypes.bool.isRequired
  };

  render() {
    const {sortedData, initMatrix, isGameOver} = this.props;

    return (
      <Main sortedData={sortedData} initMatrix={initMatrix} isGameOver={isGameOver}/>
    );
  }
}

const mapStateToProps = ({cells, game}) => {
  return {
    sortedData: cells.sortedData,
    isGameOver: game.isGameOver
  };
};

const mapDispatchToProps = {
  initMatrix
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
