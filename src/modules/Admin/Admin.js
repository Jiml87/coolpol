import React, { Component } from 'react';
import styles from './Admin.module.scss';


class Admin extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Admin</span>
      </div>
    );
  }
}

export default Admin
