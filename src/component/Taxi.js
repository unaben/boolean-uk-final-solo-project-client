import { useState } from "react";
import EditTaxi from "./EditTaxi";
import EditTaxiInput from "./EditTaxiInput";
import EditTaxiThead from "./EditTaxiThead";

function Taxi({ taxis, setTaxis, contacts }) {
  console.log({ taxis, contacts });
  const [editTaxiData, setEditTaxiData] = useState({
    business_name: "",
    postcode: "",
    street: "",
    phone: "",
  });
  const [editTaxiId, setEditTaxiId] = useState(null);
  const [selectedTaxi, setSelectedTaxi] = useState("");
  console.log({
    editTaxidata: editTaxiData,
    editTaxiId: editTaxiId,
    selectedTaxi: selectedTaxi,
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    const newTaxiData = { ...editTaxiData };
    newTaxiData[name] = value;
    console.log({ newTaxiData: newTaxiData });
    setEditTaxiData(newTaxiData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const taxiToUpdate = {
      business_name: editTaxiData.business_name,
      postcode: editTaxiData.postcode,
      street: editTaxiData.street,
      phone: editTaxiData.phone,
    };
    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taxiToUpdate),
    };
    const url = `${process.env.REACT_APP_FETCH_URL}/taxis/${editTaxiId}`;
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((taxiData) => {
        console.log({ InsideFetch: taxiData });

        const updatedTaxi = taxis.map((taxi) => {
          if (taxiData.data.id === taxi.id) {
            return taxiData.data;
          } else {
            return taxi;
          }
        });
        setTaxis(updatedTaxi);
        console.log({ updatedTaxi: updatedTaxi });
        setEditTaxiId(null);
      });
  };

  const handleEditClick = (event, taxi) => {
    event.preventDefault();
    console.log("Inside Click: ", taxi);
    setEditTaxiId(taxi.id);

    const formValues = {
      business_name: taxi.business_name,
      postcode: taxi.contact.postcode,
      street: taxi.contact.street,
      phone: taxi.contact.phone,
    };

    setEditTaxiData(formValues);
  };

  const handleCancelClick = () => {
    setEditTaxiId(null);
  };

  const handleDelete = (id) => {
    console.log({ handleDelete: id });

    fetch(`${process.env.REACT_APP_FETCH_URL}/taxis/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedTaxis = taxis.filter((taxi) => taxi.id !== id);
        setTaxis(updatedTaxis);
      });
  };

  const newTaxis = taxis && taxis.map((taxi) => taxi.business_name).sort();
  console.log("newTaxi :", newTaxis);

  const taxiSet = [...new Set(newTaxis)];
  console.log(taxiSet);
  return (
    <>
      <form className="trip-form">
        <select
          className="select-trip-form"
          onChange={(e) => setSelectedTaxi(e.target.value)}
          name="filter-by-buiness_name"
          id="filter-by-buiness_name"
          value={selectedTaxi}
        >
          <option value="">Filter By Business Name</option>
          {taxiSet && taxiSet.map((taxi, index) => (
            <option key={index} value={taxi}>
              {taxi}
            </option>
          ))}
        </select>
      </form>
      <table>
        <thead>
          <EditTaxiThead />
        </thead>
        <tbody>
          {taxis
            .sort()
            .filter((taxi) => {
              if (selectedTaxi === taxi.business_name || selectedTaxi === "") {
                return true;
              } else {
                return false;
              }
            })
            .map((taxi) => (
              <>
                {taxi.id !== editTaxiId && (
                  <EditTaxi
                    key={taxi.id}
                    id={taxi.id}
                    taxi={taxi}
                    contact={taxi.contact}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                  />
                )}
                {editTaxiId && taxi.id === editTaxiId && (
                  <EditTaxiInput
                    editTaxiData={editTaxiData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleEditFormSubmit={handleEditFormSubmit}
                  />
                )}
              </>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Taxi;
