import React, { Component } from 'react';
import styles from './Laminate.module.scss';


class Laminate extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>LAMINATE</span>
    );
  }
}

export default Laminate