import React from 'react';

function ActionButtons({ onDeleteItem, selectedId }) {
  return (
    <>
      <button type="button" className="btn btn-sm btn-info">
        Read
      </button>
      <button type="button" className="btn btn-sm btn-primary">
        Edit
      </button>
      <button
        type="button"
        onClick={() => onDeleteItem(selectedId)}
        className="btn btn-sm btn-outline-danger"
      >
        Delete
      </button>
    </>
  );
}

export default ActionButtons;
