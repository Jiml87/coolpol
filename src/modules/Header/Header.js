import React from 'react'
import styles from './Header.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Laminate from '../Laminate/Laminate.js'
import Home from '../Home/Home.js'
import EngineeredWoodFlooring from '../EngineeredWoodFlooring/EngineeredWoodFlooring.js'
import Admin from '../Admin/Admin.js'
import Waterproof from '../Waterproof/Waterproof.js'
import Login from '../Login/Login.js'
import Add from '../Add/Add.js'
import VinylClickFlooring from '../VinylClickFlooring/VinylClickFlooring.js'
import Underlay from '../Underlay/Underlay.js'
import Accessories from '../Accessories/Accessories.js'
import Advice from '../Advice/Advice.js'
import Sale from '../Sale/Sale.js'

export default function Header () {
  return (
    <Router>
      <header className={styles.header}>
        {/* } <div className={styles.container}> */}
        <div className={[styles.container, styles.header_top_row].join(' ')}>
          <div className={styles.top_row_left_block}>
            <Link to='/' className={styles.logo}>COOL POL</Link>
          </div>
          <div className={styles.top_row_center_block}>
            <a href='tel: +380731111111' className={styles.callback_block}>+380731111111 - CLICK TO <span className={styles.callback_span}> REQUEST A CALLBACK</span></a>
            <form className={styles.search_form} action='#'>
              <input className={styles.search} type='search' placeholder='  What are you looking for?' />
              <button className={styles.search_button} />
            </form>
          </div>
          <div className={styles.top_row_right_block}>
            <Link to='/login' className={styles.login}>LOGIN</Link>
            <Link to='/add' className={styles.add_to_cart}>ADD</Link>
          </div>
        </div>
        <nav className={styles.head_nav_menu}>
          <ul className={[styles.head_list_menu, styles.container].join(' ')}>
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
            <li className={[styles.main_nav_item, styles.item_sale].join(' ')}>
              <Link to='/sale' className={styles.nav_item_link}>Sale</Link>
            </li>
          </ul>
        </nav>
        <div className={[styles.header_down_row, styles.container].join(' ')}>
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
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/product'>
          <Laminate />
        </Route>
        <Route exact path='/engineered-wood'>
          <EngineeredWoodFlooring />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/waterproof'>
          <Waterproof />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/add'>
          <Add />
        </Route>
        <Route exact path='/vinyl-click'>
          <VinylClickFlooring />
        </Route>
        <Route exact path='/underlay'>
          <Underlay />
        </Route>
        <Route exact path='/accessories'>
          <Accessories />
        </Route>
        <Route exact path='/advice'>
          <Advice />
        </Route>
        <Route exact path='/sale'>
          <Sale />
        </Route>
      </Switch>
    </Router>
  )
}
