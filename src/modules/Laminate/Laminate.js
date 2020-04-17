import React, { Component } from 'react';
import styles from './Laminate.module.scss';


class Laminate extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Laminate</span>
      </div>
    );
  }
}

export default Laminate