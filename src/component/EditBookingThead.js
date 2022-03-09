import React from "react";

function EditBookingThead() {
  return (
    <>
      <tr>
        <th>
          <h2>Pickup-Location</h2>
        </th>
        <th className="time">
          <h2 className="time">Pickup-Time</h2>
        </th>
        <th>
          <h2>Dropoff-Location</h2>
        </th>
        <th>
          <h2>Status</h2>
        </th>
        <th>
          <h2>Buttons</h2>
        </th>
      </tr>
    </>
  );
}

export default EditBookingThead;
