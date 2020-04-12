import React, { Component } from 'react';
import styles from './Waterproof.module.scss';


class Waterproof extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Waterproof</span>
    );
  }
}

export default Waterproof