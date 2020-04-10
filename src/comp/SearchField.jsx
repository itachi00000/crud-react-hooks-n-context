import React from 'react';
import { connect } from 'react-redux';

// action
import { searchQuery } from '../redux/item/itemAction';

const mapDispatchToProps = dispatch => ({
  searchingItem: searchText => dispatch(searchQuery(searchText))
});

function SearchField({ searchingItem }) {
  return (
    <form>
      <input
        type="search"
        name="search"
        onChange={e => searchingItem(e.target.value)}
        placeholder="Type Name"
        className="form-control"
      />
    </form>
  );
}
export default connect(null, mapDispatchToProps)(SearchField);
