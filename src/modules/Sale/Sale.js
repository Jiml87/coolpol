import React, { Component } from 'react';
import styles from './Sale.module.scss';


class Sale extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Sale</span>
      </div>
    );
  }
}

export default Sale