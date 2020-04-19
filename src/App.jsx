import React from 'react';
import { Switch, Route } from 'react-router-dom';

// comp
import Header from './components/Header';
import Table from './components/Table';
import ReadPage from './components/ReadPage';
import ErrorPage from './components/ErrorPage';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Table} />
          <Route exact path="/read/:id" component={ReadPage} />
          <Route exact path="/error" component={ErrorPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </>
  );
}
