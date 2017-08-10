import React, {PureComponent} from 'react';
import classes from './face.scss';
import PropTypes from 'prop-types';

export default class Face extends PureComponent {
  static propTypes = {
    isGameOver: PropTypes.bool
  }

  buildUrl() {
    const {isGameOver} = this.props;
    const baseUrl = `${window.__STATICS_BASE_URL__}/assets/images/faces/`;

    if (isGameOver) {
      return baseUrl + 'dying.gif';
    }

    return baseUrl + 'normal.gif';
  }

  render() {
    return (
      <img
        src={this.buildUrl()}
        className={classes.container}
        />
    );
  }
}
