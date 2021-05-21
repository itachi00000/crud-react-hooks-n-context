import React from 'react';

export default function Alert({ alerts: { alertMsg, alertType } }) {
  return (
    // alert-type = danger, warning, success, info
    <div className={`text-center alert alert-${alertType}`}>
      {alertMsg || 'There must be AlertMsg here'}
    </div>
  );
}
