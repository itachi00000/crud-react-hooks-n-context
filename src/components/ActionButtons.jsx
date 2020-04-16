import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

// redux action
import { deleteUser } from '../redux/usersAction';

function ActionButtons({ selectedId }) {
  const { dispatch } = useContext(GlobalContext);

  return (
    <>
      <button type="button" className="btn btn-sm btn-info" onClick={() => {}}>
        Read
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => {}}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        onClick={() => dispatch(deleteUser(selectedId))}
      >
        Delete
      </button>
    </>
  );
}

export default ActionButtons;
