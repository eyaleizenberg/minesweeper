import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../components/Main/main';
import {initMatrix} from '../redux/actions/cells';

class AppContainer extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
    sortedData: PropTypes.array
  };

  render() {
    const {sortedData, initMatrix} = this.props;

    return (
      <Main sortedData={sortedData} initMatrix={initMatrix}/>
    );
  }
}

const mapStateToProps = ({cells}) => {
  return {
    sortedData: cells.sortedData
  };
};

const mapDispatchToProps = {
  initMatrix
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
