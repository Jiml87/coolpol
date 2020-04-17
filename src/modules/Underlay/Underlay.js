import React, { Component } from 'react';
import styles from './Underlay.module.scss';


class Underlay extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Underlay</span>
      </div>
    );
  }
}

export default Underlay