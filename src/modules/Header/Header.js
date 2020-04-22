import React, { Component } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import {
  Link
} from 'react-router-dom'

const cx = classNames.bind(styles)

class Header extends Component {
  state = {
    data: []
  };
  render() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}
      <div className={cx({
        container: true,
        header_top_row: true
      })}
      >
        <div className={styles.top_row_left_block}>
          <Link to='/' className={styles.logo}>COOL POL</Link>
        </div>
        <div className={styles.top_row_center_block}>
          <a href='tel: +380731111111' className={styles.callback_block}>+380731111111 - CLICK TO 
            <span className={styles.callback_span}> REQUEST A CALLBACK</span>
          </a>
          <form className={styles.search_form} action='#'>
            <input className={styles.search} type='search' placeholder='  What are you looking for?' />
            <button className={styles.search_button} />
          </form>
        </div>
        <div className={styles.top_row_right_block}>
          <Link to='/login' className={styles.login}>LOGIN</Link>
          <Link to='/add-product' className={styles.add_to_cart}>Add</Link>
        </div>
      </div>
      <nav className={styles.head_nav_menu}>
        <ul className={cx({
          head_list_menu: true,
          container: true
        })}
        >
          <li className={styles.main_nav_item}>
            <Link to='/engineered-wood' className={styles.nav_item_link}>ENGINEERED WOOD</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/product' className={styles.nav_item_link}>Laminate</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/waterproof' className={styles.nav_item_link}>Waterproof</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/vinyl-click' className={styles.nav_item_link}>Vinyl Click</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/underlay' className={styles.nav_item_link}>Underlay</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/accessories' className={styles.nav_item_link}>Accessories</Link>
          </li>
          <li className={styles.main_nav_item}>
            <Link to='/advice' className={styles.nav_item_link}>Advice</Link>
          </li>
          <li className={cx({
            main_nav_item: true,
            item_sale: true
          })}
          >
            <Link to='/sale' className={styles.nav_item_link}>Sale</Link>
          </li>
        </ul>
      </nav>
      <div className={cx({
        header_down_row: true,
        container: true
      })}
      >
        <div className={styles.down_row_left_block}>
          <span>BUSINESS AS USUAL</span>
        </div>
        <div className={styles.down_row_center_block}>
          <Link to='/price-promise-guarantee' className={styles.down_row_center_link}>
              GOT A CHEAPER PRICE? WE'LL MATCH IT !
          </Link>
        </div>
        <div className={styles.down_row_right_block}>
          <Link to='/ffcs' className={styles.down_row_right_link}>
              FREE FIRST CLASS SAMPLES
          </Link>
        </div>
      </div>
      {/* </div> */}
    </header>

  )
}
}
export default Header