import React, { Component } from 'react';
import styles from './Advice.module.scss';


class Advice extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Advice</span>
      </div>
    );
  }
}

export default Advice