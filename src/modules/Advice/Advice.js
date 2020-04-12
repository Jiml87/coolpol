import React, { Component } from 'react';
import styles from './Advice.module.scss';


class Advice extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Advice</span>
    );
  }
}

export default Advice