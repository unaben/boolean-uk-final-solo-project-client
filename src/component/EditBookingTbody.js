import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@mui/material";

function EditBookingTbody({ trip, handleEditClick, handleDelete, id }) {
  return (
    <>
      <tr>
        <td>
          <h3>{trip.pickup_postcode}</h3>
        </td>
        <td className="time">
          <h3 className="time">{trip.pickup_time}</h3>
        </td>
        <td>
          <h3>{trip.dropoff_postcode}</h3>
        </td>
        <td>
          <h3>{trip.status}</h3>
        </td>
        <td>
          <Button onClick={(event) => handleEditClick(event, trip)}>
            Edit
          </Button>
          <FaTrashAlt
            className="delete-btn"
            role="button"
            onClick={() => handleDelete(id)}
          />
        </td>
      </tr>
    </>
  );
}

export default EditBookingTbody;
