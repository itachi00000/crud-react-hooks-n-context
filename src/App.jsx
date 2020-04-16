import React from 'react';
// import { Route } from 'react-router';

// comp
import Header from './components/Header';
import Table from './components/Table';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Table />
      </div>
    </>
  );
}
