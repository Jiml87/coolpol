import React, { Component } from 'react';
import styles from './AddUser.module.scss';


class AddUser extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Login</span>
      </div>
    );
  }
}

export default AddUser
