import React, { Component } from 'react';
import styles from './Accessories.module.scss';


class Accessories extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Accessories</span>
      </div>
    );
  }
}

export default Accessories