import React, { Component } from 'react';
import styles from './Underlay.module.scss';


class Underlay extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Underlay</span>
    );
  }
}

export default Underlay