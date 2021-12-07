import { useState } from "react";

function Booking({ taxis, drivers }) {
  const carClass = [
    { value: "Comfort" },
    { value: "Executive" },
    { value: "XL" },
    { value: "Mini-Van" },
    { value: "Access" },
    { value: "Assist" },
  ];

  const [selectedTaxi, setSelectedTaxi] = useState("");
  const [selectedCarClass, setSelectedCarClass] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  const [selectedPostcodeInput, setSelectedPostcodeInput] = useState("");
  console.log({
    selectedTaxi: selectedTaxi,
    CarCategory: selectedCarClass,
    selectedDriver: selectedDriver,
    selectedInput: selectedInput,
  });
  return (
    <>
      <form className="booking-form">
        <input
          id="dateTime"
          name="dateTime"
          value={selectedInput}
          type="datetime-local"
          onChange={(event) => {
            setSelectedInput(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setSelectedTaxi(event.target.value);
          }}
          name="filterSeelectedTaxi"
          id="filterSelectedTaxi"
          className=""
        >
          <option value=""> Select a taxi company</option>
          {taxis.sort().map((taxi) => (
            <option value={taxi.business_name}>{taxi.business_name}</option>
          ))}
        </select>
        <select
          name="carClass"
          id="carClass"
          value={selectedCarClass}
          onChange={(event) => {
            setSelectedCarClass(event.target.value);
          }}
        >
          <option value="">Select a car by Category</option>
          {carClass.sort().map((category) => (
            <option>{category.value}</option>
          ))}
        </select>
        <select
          name="driver"
          id="driver"
          value={selectedDriver}
          onChange={(event) => {
            setSelectedDriver(event.target.value);
          }}
        >
          <option value="">Select a driver</option>
          {drivers.sort().map((driver) => (
            <option>{driver.name}</option>
          ))}
        </select>
        <input
          id="postcode"
          name="postcode"
          value={selectedPostcodeInput}
          type="text"
          placeholder="Enter your postcode..."
          onChange={(event) => {
            setSelectedPostcodeInput(event.target.value);
          }}
        />
        <button className="booking-btn" onClick={() => {}}>
          Next
        </button>
      </form>
      <h3 className="booking-ui">{selectedTaxi}</h3>
      <h3 className="booking-ui">{selectedDriver}</h3>
      <h3 className="booking-ui">{selectedCarClass}</h3>
      <h3 className="booking-ui">{selectedInput}</h3>
      <h3 className="booking-ui">{selectedPostcodeInput}</h3>
    </>
  );
}
export default Booking;
