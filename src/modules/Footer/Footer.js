import React, { Component } from 'react';
import styles from './Footer.module.scss';


class Footer extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Footer</span>
      </div>
    );
  }
}

export default Footer