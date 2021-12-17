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
        {/* <th>
          <select
            className="selectDriver-form"
            name="driver"
            id="driver"
            value={selectedDriver}
            onChange={(event) => {
              const driverToSelect = drivers.find(
                (driver) => driver.id === parseInt(event.target.value)
              );
              setSelectedDriver(driverToSelect);
            }}
          >
            <option value="">Select a driver</option>
            {drivers.sort().map((driver) => (
              <option value={driver.id}>{driver.name}</option>
            ))}
          </select>
        </th>
        <th>
          <select
            className="selectDriver-form"
            name="status"
            id="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Display Status</option>
            {CurrentStatus.sort().map((data) => (
              <option>{data.value}</option>
            ))}
          </select>
        </th> */}
        <th>
          <h2>Buttons</h2>
        </th>
      </tr>
    </>
  );
}

export default EditBookingThead;
