import React from 'react';
import { connect } from 'react-redux';

// comp
import ActionButtons from './ActionButtons';

// actions
import {} from '../redux/item/itemAction';

const mapStateToProps = ({ itemsRx }) => ({
  items: itemsRx.items,
  query: itemsRx.query
});

const mapDispatchToProps = dispatch => ({
  test: () => dispatch()
});

function Table({ items, query }) {
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  const mapItems = filteredItems.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>
        <ActionButtons selectedId={item.id} />
      </td>
    </tr>
  ));
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{mapItems}</tbody>
    </table>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
