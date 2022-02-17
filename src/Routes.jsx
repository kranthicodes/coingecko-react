import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CoinDetailsPage } from './pages/CoinDetails';
import { CoinListPage } from './pages/CoinList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CoinListPage} />
        <Route exact path="/:id" component={CoinDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}
