import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articles
});

function List({ articles }) {
  return (
    <div>
      {articles.map(art => (
        <li key={art.id}>{art.title}</li>
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(List);
