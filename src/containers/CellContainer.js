import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Cell from '../components/Main/main';

class AppContainer extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isDemon: PropTypes.bool.isRequired,
    isExposed: PropTypes.bool.isRequired
  };

  render() {
    // const {sortedData, initMatrix} = this.props;

    return (
      <span>{`[ ${this.props.isDemon ? 'X' : '  '} ]`}</span>
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

export default connect(mapStateToProps)(AppContainer);
