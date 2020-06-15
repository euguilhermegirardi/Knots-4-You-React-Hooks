import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
};
