import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './toolbar.scss';

class Toolbar extends PureComponent {
  static propTypes = {
    gameInProgress: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className={classes.container}>

      </div>
    );
  }
}

export default Toolbar;
