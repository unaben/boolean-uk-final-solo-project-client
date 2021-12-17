import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@mui/material";

function EditTaxi({ taxi, handleEditClick, handleDelete, contact, id }) {
  return (
    <>
      <tr>
        <td>
          <h3>{taxi.business_name}</h3>
        </td>
        <td>
          <h3>{contact.postcode}</h3>
        </td>
        <td>
          <h3>{contact.street}</h3>
        </td>
        <td>
          <h3>{contact.phone}</h3>
        </td>
        <td>
          <Button onClick={(event) => handleEditClick(event, taxi)}>
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

export default EditTaxi;
