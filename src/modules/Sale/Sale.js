import React, { Component } from 'react';
import styles from './Sale.module.scss';


class Sale extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Sale</span>
    );
  }
}

export default Sale