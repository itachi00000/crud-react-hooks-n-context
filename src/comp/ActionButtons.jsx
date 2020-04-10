import React from 'react';

import { connect } from 'react-redux';

// action
import { deleteItem } from '../redux/item/itemAction';

const mapDispatchToProps = dispatch => ({
  onDeleteItem: selectedId => dispatch(deleteItem(selectedId))
});

function ActionButtons({ onDeleteItem, selectedId }) {
  return (
    <>
      <button type="button" className="btn btn-info">
        Read
      </button>
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button
        type="button"
        onClick={() => onDeleteItem(selectedId)}
        className="btn btn-outline-danger"
      >
        Delete
      </button>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ActionButtons);
