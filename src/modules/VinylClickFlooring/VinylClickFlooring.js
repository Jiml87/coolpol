import React, { Component } from 'react';
import styles from './VinylClickFlooring.module.scss';


class VinylClickFlooring extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>VinylClickFlooring</span>
      </div>
    );
  }
}

export default VinylClickFlooring