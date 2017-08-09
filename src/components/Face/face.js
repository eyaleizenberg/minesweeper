import React, {PureComponent} from 'react';
import classes from './face.scss';
// import PropTypes from 'prop-types';

export default class Face extends PureComponent {
  render() {
    return (
      <img
        src={`${window.__STATICS_BASE_URL__}/assets/images/faces/normal.gif`}
        className={classes.container}
        />
    );
  }
}
