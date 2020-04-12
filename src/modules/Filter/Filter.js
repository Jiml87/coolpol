import React, { Component } from 'react';
import styles from './Filter.module.scss';


class Filter extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <span className={styles.span}>Filter</span>
    );
  }
}

export default Filter