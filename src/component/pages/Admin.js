import { useState } from "react";

function Admin({ taxis, setTaxis }) {
  const [businessName, setBusinessName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");

  console.log({
    businessName: businessName,
    postcode: postcode,
    street: street,
    phone: phone,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const taxiToCreate = {
      business_name: businessName,
      postcode: postcode,
      street: street,
      phone: parseInt(phone),
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taxiToCreate),
    };
    const url = "http://localhost:3030/taxis";
    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((taxiData) => {
        console.log({ InsideFetch: taxiData });
        console.log("Taxi", taxis);
        setTaxis([...taxis, taxiData]);
      });
  };
  return (
    <div className="form_container">
      <form className="form-stack" onSubmit={handleSubmit}>
        <h2>Admin form</h2>
        <div>
          <label htmlFor="business_name">Business Name</label>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            id="business_name"
            name="business_name"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Postcode</label>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
        </div>
        <div>
          <input
            className="form_input"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button className="login-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Admin;
