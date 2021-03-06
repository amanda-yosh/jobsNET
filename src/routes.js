import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cadastro' component={Cadastro} />
      </Switch>
    </BrowserRouter>

  );
}