import React from "react";

function EditBookingThead({
  selectedDriver,
  setSelectedDriver,
  status,
  setStatus,
  CurrentStatus,
  drivers,
}) {
  return (
    <>
      <tr>
        <th>
          <h2>Pickup-Location</h2>
        </th>
        <th>
          <h2>Pickup-Time</h2>
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
