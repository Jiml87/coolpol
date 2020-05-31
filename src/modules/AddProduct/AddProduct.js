import React, { Component } from 'react';
import styles from './AddProduct.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


class AddProduct extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={cx({
        container: true,
        wrapper: true
      })}>
        <p className={styles.info_basket}>Your Bag Contains: 2 Items,  TOTAL: 1090 UAH</p>
        <ul className={styles.ul_product}>
          <li className={styles.basket_contents}>
            <div className={styles.basket_content_block}>
              <img className={styles.basket_content_block_images} src="https://www.discountflooringdepot.co.uk/images/living-6mm-laminate-flooring-light-grey-north-cape-p1562-10175_thumb.jpg" width="190" height="190" alt="product" />
              <div className={styles.basket_content_block_name_text}>
                <h3 className={styles.basket_content_block_name}>Woodland Click</h3>
                <p className={styles.basket_content_block_text}>14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered</p>
              </div>
              <span className={styles.basket_content_block_price}>530 UAH</span>
              <div className={styles.basket_content_block_buttons}>
                <button className={styles.basket_content_block_product_minus_plus}>-</button>
                <span className={styles.basket_content_block_product}>1</span>
                <button className={styles.basket_content_block_product_minus_plus}>+</button>
              </div>
              <span className={styles.basket_content_block_price_sum}>530 UAH</span>
              <button className={styles.basket_content_block_product_button_trashcan}>X</button>
            </div>
          </li>
          <li className={styles.basket_contents}>
            <div className={styles.basket_content_block}>
              <img src="https://www.discountflooringdepot.co.uk/images/glossy-varnished-8mm-high-gloss-laminate-flooring-grey-wood-p1689-11172_thumb.jpg" width="190" height="190" alt="product" />
              <div className={styles.basket_content_block_name_text}>
                <h3 className={styles.basket_content_block_name}>Woodland Click</h3>
                <p className={styles.basket_content_block_text}>14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered</p>
              </div>
              <span className={styles.basket_content_block_price}>560 UAH</span>
              <div className={styles.basket_content_block_buttons}>
                <button className={styles.basket_content_block_product_minus_plus}>-</button>
                <span className={styles.basket_content_block_product}>1</span>
                <button className={styles.basket_content_block_product_minus_plus}>+</button>
              </div>
              <span className={styles.basket_content_block_price_sum}>560 UAH</span>
              <button className={styles.basket_content_block_product_button_trashcan}>X</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default AddProduct
