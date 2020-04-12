import React, { Component } from 'react';
import styles from './Footer.module.scss';


class Footer extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Footer</span>
    );
  }
}

export default Footer