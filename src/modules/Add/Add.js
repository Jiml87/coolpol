import React, { Component } from 'react';
import styles from './Add.module.scss';


class Add extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Add</span>
    );
  }
}

export default Add
