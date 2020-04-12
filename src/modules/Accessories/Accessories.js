import React, { Component } from 'react';
import styles from './Accessories.module.scss';


class Accessories extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Accessories</span>
    );
  }
}

export default Accessories