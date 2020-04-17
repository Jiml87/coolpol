import React, { Component } from 'react';
import styles from './ProductFilter.module.scss';


class ProductFilter extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.span}>ProductFilter</span>
      </div>
    );
  }
}

export default ProductFilter