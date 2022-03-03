import React, { useState } from "react";
import EditBookingInput from "./EditBookingInput";
import EditBookingThead from "./EditBookingThead";
import EditBookingTbody from "./EditBookingTbody";

function Trip({ trips, setTrips, drivers }) {
 
  const [editTripData, setEditTripData] = useState({
    pickup_postcode: "",
    pickup_time: "",
    dropoff_postcode: "",
    status: "",
  });
  const [editTripId, setEditTripId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  console.log({
    editTripData: editTripData,
    editTripId: editTripId,    
    selectedStatus: selectedStatus,
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    const newTripData = { ...editTripData };
    newTripData[name] = value;
    console.log({ newTripData: newTripData });
    setEditTripData(newTripData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const tripToUpdate = {
      pickup_postcode: editTripData.pickup_postcode,
      pickup_time: editTripData.pickup_time,
      dropoff_postcode: editTripData.dropoff_postcode,
      status: editTripData.status,
    };
    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripToUpdate),
    };
    const url = `${process.env.REACT_APP_FETCH_URL}/trips/${editTripId}`;
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((tripData) => {
        console.log({ InsideFetch: tripData });

        const updatedTrip = trips.map((trip) => {
          if (tripData.data.id === trip.id) {
            return tripData.data;
          } else if (tripData.data.id !== trip.d) {
            return <div>Loading...</div>;
          } else {
            return trip;
          }
        });
        setTrips(updatedTrip);
        console.log({ updatedTrip: updatedTrip });
        setEditTripId(null);
      });
  };

  const handleEditClick = (event, trip) => {
    event.preventDefault();
    console.log("Inside Click: ", trip.id);
    setEditTripId(trip.id);

    const formValues = {
      pickup_postcode: trip.pickup_postcode,
      pickup_time: trip.pickup_time,
      dropoff_postcode: trip.dropoff_postcode,
      status: trip.status,
    };

    setEditTripData(formValues);
  };

  const handleCancelClick = () => {
    setEditTripId(null);
  };

  const handleDelete = (id) => {
    console.log({ editTripId: id });

    fetch(`${process.env.REACT_APP_FETCH_URL}/trips/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedTrips = trips.filter((trip) => trip.id !== id);
        console.log("inside updatedTrips: ", updatedTrips);
        setTrips(updatedTrips);
      });
  };

  const tripStatus = trips && trips.map((trip) => trip.status).sort();
  console.log("tripStatus :", tripStatus);

  const tripSet = [...new Set(tripStatus)];
  console.log(tripSet);

  return (
    <>
      <form className="trip-form">
        <select
          className="select-trip-form"
          onChange={(e) => setSelectedStatus(e.target.value)}
          name="filter-by-status"
          id="filter-by-status"
          value={selectedStatus}
        >
          <option value={""}>Filter By Status</option>
          {tripSet && tripSet.map((trip, index) => (
            <option key={index} value={trip}>
              {trip}
            </option>
          ))}
        </select>
      </form>
      <table>
        <thead>
          <EditBookingThead />
        </thead>
        <tbody>
          {trips
            .sort()
            .filter((trip) => {
              if (selectedStatus === trip.status || selectedStatus === "") {
                return true;
              } else {
                return false;
              }
            })
            .map((trip) => (
              <>
                {trip.id !== editTripId && (
                  <EditBookingTbody
                    key={trip.id}
                    id={trip.id}
                    trip={trip}
                    handleEditClick={handleEditClick}
                    handleDelete={handleDelete}
                    editTripId={editTripId}
                  />
                )}
                {editTripId && trip.id === editTripId && (
                  <EditBookingInput
                    editTripData={editTripData}
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

export default Trip;
