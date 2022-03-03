import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Signup({
  authenticatedUser,
  setAuthenticatedUser,
  setIsLoggedin,
}) {
  const [users, setUsers] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    street: "",
    postcode: "",
    phone: "",
  });

  console.log({ users, authenticatedUser });

  const navigate = useNavigate();

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      const user = JSON.parse(userAsString);

      setAuthenticatedUser(user);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...users }),
    };

    fetch(`${process.env.REACT_APP_FETCH_URL}/signup`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        console.log("Inside Signup Fetch: ", token);

        if (token) {
          setAuthenticatedUser(token);

          localStorage.setItem("token", token);
          navigate("/bookings");
        }
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUsers({ ...users, [name]: value });
  };

  return (
    <>
      <main>
        <div className="main-container">
          <div>
            <div className="form_container">
              <form className="form-stack" onSubmit={handleSubmit}>
                <h2 className="signup-form">Registration Form</h2>
                <div className="reg_column">
                  <div>
                    <label htmlFor="first_name">First Name</label>
                    <div>
                      <input
                        className="form_input"
                        type="text"
                        id="first_name"
                        name="first_name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name">Last Name</label>
                  
                  <div>
                    <input
                      className="form_input"
                      type="text"
                      id="last_name"
                      name="last_name"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                </div>
                <div className="reg_column">
                  <div>
                    <label htmlFor="email">Email</label>
                 
                  <div>
                    <input
                      className="form_input"
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                  
                  <div>
                    <input
                      className="form_input"
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                </div>
                <div className="reg_column">
                  <div>
                    <label htmlFor="password">Postcode</label>
                  
                  <div>
                    <input
                      className="form_input"
                      type="text"
                      id="postcode"
                      name="postcode"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                  <div>
                    <label htmlFor="street">Street</label>
                  
                  <div>
                    <input
                      className="form_input"
                      type="text"
                      id="street"
                      name="street"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                </div>
                <div className="reg_column">
                <div>
                  <label htmlFor="phone">Phone</label>
               
                <div>
                  <input
                    className="form_input last_form_input"
                    // className="last_form_input"
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="signup_btn_contanier">
                <Button variant="contained" type="submit">
                  Signup
                </Button>
                </div>
                </div>
                <h3 className="signup-msg">Create a free account</h3>
                <h3 className="setLogin-click">
                  Already registered?
                  <span onClick={() => setIsLoggedin(true)} >click to login</span>
                </h3>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
