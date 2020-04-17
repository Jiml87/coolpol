import React, { Component } from 'react';
import styles from './AddProduct.module.scss';


class AddProduct extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>AddProduct</span>
      </div>
    );
  }
}

export default AddProduct
