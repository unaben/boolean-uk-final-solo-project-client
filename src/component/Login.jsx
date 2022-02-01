import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({
  setUserId,
  authenticatedUser,
  setAuthenticatedUser,
  setLogin,
}) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    street: "",
    postcode: "",
    phone: "",
  });

  const navigate = useNavigate();

  console.log({ user, authenticatedUser });

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      // const user = JSON.parse(userAsString);

      setAuthenticatedUser(userAsString);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    };

    fetch(`${process.env.REACT_APP_FETCH_URL}/login`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        console.log("Inside Signin Fetch: ", token);

        if (token) {
          setAuthenticatedUser(token);
          const decodedToken = jwt.decode(token);
          setUserId(decodedToken.id);
          console.log("Inside TOKEN: ", decodedToken);
          localStorage.setItem("token", token);
          navigate("/bookings");
        }
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <main>
        <div className="form_container">
          <div>
            <form className="form-stack" onSubmit={handleSubmit}>
              <h2 className="login-form-text">Login Form</h2>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  className="form_input"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  className="form_input"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="login-btn">
                <div>
                  <Button variant="outlined" type="submit">
                    Login
                  </Button>
                </div>
                <div>
                  <Button variant="contained" onClick={() => setLogin(false)}>
                    Return
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-ui">
            {!authenticatedUser ? (
              <h2 className="auth-msg">Successfully logged in</h2>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
export default Login;
