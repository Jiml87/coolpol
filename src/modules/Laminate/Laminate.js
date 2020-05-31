import React, { Component } from 'react';
import styles from './Laminate.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Laminate extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className={cx({
        container: true,
        wrapper: true
      })}>
        <div className={styles.filter_column}>
          Filter >>>>>
        </div>
        <ul className={styles.ul_product}>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/living-6mm-laminate-flooring-light-grey-north-cape-p1562-10175_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                530 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/glossy-varnished-8mm-high-gloss-laminate-flooring-grey-wood-p1689-11172_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                560 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/sydney-7mm-laminate-flooring-grey-oak-p1025-6613_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                530 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/wood-step-8mm-laminate-flooring-snow-white-oak-p1885-9093_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                530 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/signature-8mm-herringbone-laminate-flooring-light-oak-p1772-9733_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                530 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
          <li className={styles.li_product}>
            <a className={styles.product_link} href="http://localhost:3000/product">
              <img src="https://www.discountflooringdepot.co.uk/images/premier-elite-8mm-laminate-flooring-black-smoked-oak-p1032-4701_thumb.jpg" width="340" height="340" alt="product" />
            </a>
            <div className={styles.product_details}>
              <a className={styles.product_link} href="http://localhost:3000/product">
                Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
             </a>
              <p className={styles.product_prices}>
                530 UAH
             </p>
            </div>
            <button className={styles.add_to_bascet_product}>BUY</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Laminate