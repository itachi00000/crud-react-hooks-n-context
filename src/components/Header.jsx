import React from 'react';

// comp
import SearchField from './SearchField';

export default function Header() {
  return (
    <header className="jumbotron bg-primary text-white">
      <div className="container">
        <h1 className="display-4">Title of Page</h1>
        <p className="lead">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          veritatis.
        </p>
        <SearchField />
      </div>
    </header>
  );
}
