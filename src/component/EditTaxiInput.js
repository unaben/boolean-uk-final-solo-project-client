import {Button} from "@mui/material"

function EditTaxiInput({
  editTaxiData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) {
  console.log("here: ", editTaxiData);
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Busines name..."
          name="business_name"
          value={editTaxiData.business_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter postcode..."
          name="postcode"
          value={editTaxiData.postcode}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter street..."
          name="street"
          value={editTaxiData.street}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter phone..."
          name="phone"
          value={editTaxiData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <Button  type="submit" onClick={handleEditFormSubmit}>
        Update
      </Button>          
      <Button  type="submit" onClick={handleCancelClick}>
      Cancel
      </Button>
      </td>
    </tr>
  );
}

export default EditTaxiInput;
