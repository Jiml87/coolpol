import React, { Component } from 'react';
import styles from './Header.module.scss';


class Header extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_top_row}>
            <a href="#" className={styles.logo}>Laminat na rasvat</a>
            <form className={styles.search_form} action="#">
              <input className={styles.search} type="search" placeholder="  Search..." />
              <button className={styles.search_button}></button>
            </form>
            <a href="#" className={styles.add_to_cart}></a>
          </div>
          <nav className={styles.head_nav_menu}>
            <ul className={styles.head_list_menu}>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Home</a>
              </li>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Products</a>
              </li>
            <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Services</a>
              </li>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Sale</a>
              </li>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Gallary</a>
              </li>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>About us</a>
              </li>
              <li className={styles.main_nav_item}>
                <a href="#" className={styles.nav_item_link}>Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header