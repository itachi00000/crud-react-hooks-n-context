import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

// comps
import Header from './components/Header';
import Table from './components/Table';
import Alert from './components/Alert';

// pages
import ReadPage from './pages/ReadPage';
import ErrorPage from './pages/ErrorPage';

// context, redux
import { GlobalContext } from './context/GlobalState';

// main
export default function App() {
  const { alerts } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <div className="container-fluid">
        {alerts.alertMsg ? (
          <Alert alerts={alerts} />
        ) : (
          // spacer
          <div style={{ height: '67px' }} />
        )}

        <div className="row justify-content-md-center">
          <Switch>
            <Route exact path="/" component={Table} />
            <Route exact path="/read/:id" component={ReadPage} />
            <Route exact path="/error" component={ErrorPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
      {/* spacer */}
      <div style={{ height: '300px' }} />
    </>
  );
}
