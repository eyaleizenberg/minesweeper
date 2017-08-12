import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classes from './customGameDialog.scss';
import dialogClasses from './dialogs.scss';
import classnames from 'classnames';
import customGameFields from '../../constants/customGameFields';

class CustomGameDialog extends PureComponent {
  static propTypes = {
    initMatrix: PropTypes.func.isRequired,
  };

  renderFields() {
    return Object.keys(customGameFields).map(key => {
      const customField = customGameFields[key];
      return (
        <div key={customField.id} className={classes.fieldContainer}>
          <span className={classnames(dialogClasses.text, classes.label)}>{customField.label}</span>
          <input className={classes.input} type="text" value={customField.value}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={dialogClasses.container}>
        <span className={dialogClasses.text}>SELECT YOUR PERSONAL NIGHTMARE:</span>
        {this.renderFields()}
      </div>
    );
  }
}

export default CustomGameDialog;
