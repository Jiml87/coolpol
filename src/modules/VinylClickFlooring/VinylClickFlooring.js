import React, { Component } from 'react';
import styles from './VinylClickFlooring.module.scss';


class VinylClickFlooring extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>VinylClickFlooring</span>
    );
  }
}

export default VinylClickFlooring