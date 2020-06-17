import React, { Component } from 'react';
import styles from './Laminate.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const data = [
  {
    id: 1,
    key: 1,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/living-6mm-laminate-flooring-light-grey-north-cape-p1562-10175_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  },
  {
    id: 2,
    key: 2,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/glossy-varnished-8mm-high-gloss-laminate-flooring-grey-wood-p1689-11172_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  },
  {
    id: 3,
    key: 3,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/sydney-7mm-laminate-flooring-grey-oak-p1025-6613_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  },
  {
    id: 4,
    key: 4,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/wood-step-8mm-laminate-flooring-snow-white-oak-p1885-9093_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  },
  {
    id: 5,
    key: 5,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/signature-8mm-herringbone-laminate-flooring-light-oak-p1772-9733_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  },
  {
    id: 6,
    key: 6,
    name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
    img_url: 'https://www.discountflooringdepot.co.uk/images/premier-elite-8mm-laminate-flooring-black-smoked-oak-p1032-4701_thumb.jpg',
    url: 'http://localhost:3000/product',
    price: '530',
    type: 'Product'
  }
]

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
          {data.map(el => {
            return (
              <li className={styles.li_product}>
                <a className={styles.product_link} href={el.url}>
                  <img className={styles.product_img} src={el.img_url} alt="product" />
                </a>
                <div className={styles.product_details}>
                  <a className={styles.product_link} href={el.url}>
                    Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered
              </a>
                  <p className={styles.product_prices}>
                    {el.price} UAH
              </p>
                </div>
                <button className={styles.add_to_bascet_product}>BUY</button>
              </li>
            )
          }
          )}
        </ul>
      </div>
    );
  }
}

export default Laminate