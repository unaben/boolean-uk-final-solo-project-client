import React from "react";
import { Button } from "@mui/material";

function EditBookingInput({
  editTripData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter pickup-postcode..."
          name="pickup_postcode"
          value={editTripData.pickup_postcode}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter pickup-Time..."
          name="pickup_time"
          value={editTripData.pickup_time}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter dropoff-postcode..."
          name="dropoff_postcode"
          value={editTripData.dropoff_postcode}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter status..."
          name="status"
          value={editTripData.status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button type="submit" onClick={handleEditFormSubmit}>
          Update
        </Button>
        <Button type="submit" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
}

export default EditBookingInput;
