import React, { Component } from 'react';
import styles from './Waterproof.module.scss';


class Waterproof extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Waterproof</span>
      </div>
    );
  }
}

export default Waterproof