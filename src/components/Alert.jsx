import React from 'react';

export default function Alert({ alerts: { alertMsg, alertType } }) {
  return (
    <div className={`text-center alert alert-${alertType}`}>
      {alertMsg || 'There must be AlertMsg here'}
    </div>
  );
}
