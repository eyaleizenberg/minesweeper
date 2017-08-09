import React, {PureComponent} from 'react';
import classes from './logo.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className={classes.container}>
        <img src={`${window.__STATICS_BASE_URL__}/assets/images/logo.png`} className={classes.logo}/>
        <span className={classes.text}>MINESWEEPER</span>
      </div>
    );
  }
}
