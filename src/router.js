import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './modules/Header/Header.js'
import Laminate from './modules/Laminate/Laminate.js'
import Home from './modules/Home/Home.js'
import EngineeredWoodFlooring from './modules/EngineeredWoodFlooring/EngineeredWoodFlooring.js'
import Admin from './modules/Admin/Admin.js'
import Waterproof from './modules/Waterproof/Waterproof.js'
import AddUser from './modules/AddUser/AddUser.js'
import AddProduct from './modules/AddProduct/AddProduct.js'
import VinylClickFlooring from './modules/VinylClickFlooring/VinylClickFlooring.js'
import Underlay from './modules/Underlay/Underlay.js'
import Accessories from './modules/Accessories/Accessories.js'
import Advice from './modules/Advice/Advice.js'
import Sale from './modules/Sale/Sale.js'

export default function router () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={Laminate} />
        <Route path='/engineered-wood' component={EngineeredWoodFlooring} />
        <Route path='/admin' component={Admin} />
        <Route path='/waterproof' component={Waterproof} />
        <Route path='/login' component={AddUser} />
        <Route path='/add-product' component={AddProduct} />
        <Route path='/vinyl-click' component={VinylClickFlooring} />
        <Route path='/underlay' component={Underlay} />
        <Route path='/accessories' component={Accessories} />
        <Route path='/advice' component={Advice} />
        <Route path='/sale' component={Sale} />
      </Switch>
    </Router>
  )
}
