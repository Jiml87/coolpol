/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styles from './Header.module.scss';


class Header extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <header className={styles.header}>
        {/*} <div className={styles.container}>*/}
        <div className={[styles.container, styles.header_top_row].join(' ')}>
          <div className={styles.top_row_left_block}>
            <a href="#" className={styles.logo}>COOL POL</a>
          </div>
          <div className={styles.top_row_center_block}>
            <a href="#" className={styles.callback_block}>+380731111111 - CLICK TO <span className={styles.callback_span}> REQUEST A CALLBACK</span></a>
            <form className={styles.search_form} action="#">
              <input className={styles.search} type="search" placeholder="  What are you looking for?" />
              <button className={styles.search_button}></button>
            </form>
          </div>
          <div className={styles.top_row_right_block}>
            <a href="#" className={styles.login}>LOGIN</a>
            <a href="#" className={styles.add_to_cart}>ADD</a>
          </div>
        </div>
        <nav className={styles.head_nav_menu}>
          <ul className={[styles.head_list_menu, styles.container].join(' ')}>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Engineered Wood</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Laminate</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Waterproof</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Vinyl Click</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Underlay</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Accessories</a>
            </li>
            <li className={styles.main_nav_item}>
              <a href="#" className={styles.nav_item_link}>Advice</a>
            </li>
            <li className={[styles.main_nav_item, styles.item_sale].join(' ')}>
              <a href="#" className={styles.nav_item_link}>Sale</a>
            </li>
          </ul>
        </nav>
        <div className={[styles.header_down_row, styles.container].join(' ')}>
          <div className={styles.down_row_left_block}>
            <span>BUSINESS AS USUAL</span>
          </div>
          <div className={styles.down_row_center_block}>
            <a href="#" className={styles.down_row_center_link}>
              GOT A CHEAPER PRICE? WE'LL MATCH IT !
              </a>
          </div>
          <div className={styles.down_row_right_block}>
            <a href="#" className={styles.down_row_right_link}>
              FREE FIRST CLASS SAMPLES
              </a>
          </div>
        </div>
        {/*</div>*/}
      </header>
    );
  }
}

export default Header