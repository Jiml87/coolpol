import React, { Component } from 'react';
import styles from './Home.module.scss';


class Home extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>HOME</span>
    );
  }
}

export default Home
