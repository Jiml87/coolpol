import React, { Component } from 'react';
import styles from './Admin.module.scss';


class Admin extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Admin</span>
    );
  }
}

export default Admin
