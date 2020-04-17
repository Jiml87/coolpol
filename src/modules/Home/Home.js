import React, { Component } from 'react';
import styles from './Home.module.scss';


class Home extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>Home</span>
      </div>
    );
  }
}

export default Home
