import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Booking({ taxis, drivers, trips, setTrips, userId }) {
  const [selectedTaxi, setSelectedTaxi] = useState("");
  const [selectedDriver, setSelectedDriver] = useState({});
  const [selectedDateTimeInput, setSelectedDateTimeInput] = useState("");
  const [selectedPickupPostcode, setSelectedPickupPostcode] = useState("");
  const [selectedDropoffPostcode, setSelectedDropoffPostcode] = useState("");
  const [status, setStatus] = useState("");

  console.log({
    selectedTaxi: selectedTaxi,
    selectedDriver: selectedDriver,
    selectedInput: selectedDateTimeInput,
    status: status,
    selectedPickupPostcode: selectedPickupPostcode,
    selectedDropoffPostcode: selectedDropoffPostcode,
    Booking: drivers,
  });

const navigate =useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const tripToCreate = {
      pickup_postcode: selectedPickupPostcode,
      pickup_time: selectedDateTimeInput,
      dropoff_postcode: selectedDropoffPostcode,
      status: status,
      // userId: userId,
      driverId: selectedDriver.id,
    };
    const token = localStorage.getItem("token")

    console.log("USERID: ", token);
    const fetchOptions = {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripToCreate),
    };
    const url = `${process.env.REACT_APP_FETCH_URL}/trips`;
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((tripData) => {
        console.log({ InsideFetch: tripData });
        console.log("Trip", trips);
        setTrips([...trips, tripData]);
        navigate("/bookings/advert")
      });
  }
  return (
    <div className="bookingForm-container">
      <div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div>
            <select
              className="bookingForm-dropdown"
              name="status"
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">Display Status</option>
              {trips.sort().map((data) => (
                <option>{data.status}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(event) => {
                setSelectedTaxi(event.target.value);
              }}
              name="filterSeelectedTaxi"
              id="filterSelectedTaxi"
              className="bookingForm-dropdown"
            >
              <option value=""> Select a taxi company</option>
              {taxis.sort().map((taxi) => (
                <option value={taxi.business_name}>{taxi.business_name}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="bookingForm-dropdown"
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
              <option value="">Select a vehicle</option>
              {drivers.sort().map((driver) => (
                <option value={driver.id}>{driver.car_category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="bookinginput" htmlFor="pickup_postcode">
              Pickup Postcode
            </label>
          </div>
          <input
            className="bookinginput"
            id="pickup_postcode"
            name="pickup_postcode"
            value={selectedPickupPostcode}
            type="text"
            placeholder="Enter your postcode..."
            onChange={(event) => {
              setSelectedPickupPostcode(event.target.value);
            }}
          />
          <div>
            <label className="bookinginput" htmlFor="dropoff_postcode">
              Dropoff Postcode
            </label>
          </div>
          <input
            className="bookinginput"
            id="dropoff_postcode"
            name="dropoff_postcode"
            value={selectedDropoffPostcode}
            type="text"
            placeholder="Enter your postcode..."
            onChange={(event) => {
              setSelectedDropoffPostcode(event.target.value);
            }}
          />
          <div>
            <label className="bookinginput" htmlFor="dropoff_postcode">
              Select Time
            </label>
          </div>
          <input
            className="bookinginput"
            id="dateTime"
            name="dateTime"
            value={selectedDateTimeInput}
            type="datetime-local"
            onChange={(event) => {
              setSelectedDateTimeInput(event.target.value);
            }}
          />
          <div>
            <button className="booking-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>     
    </div>
  );
}
export default Booking;
