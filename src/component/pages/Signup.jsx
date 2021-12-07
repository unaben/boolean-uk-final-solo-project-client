import { useState, useEffect } from "react";

export default function Signup({ authenticatedUser, setAuthenticatedUser }) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    street: "",
    postcode: "",
    phone: "",
  });

  console.log({ user, authenticatedUser });

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      const user = JSON.parse(userAsString);

      setAuthenticatedUser(user);
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

    fetch("http://localhost:3030/signup", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        console.log("Inside Signup Fetch: ", token);

        if (token) {
          setAuthenticatedUser(token);

          localStorage.setItem("user: ", token);
        }
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <main>
      <div className="form_container">
        <form className="form-stack" onSubmit={handleSubmit}>
          <h2>Signup Form</h2>
          <div>
            <label htmlFor="first_name">First Name</label>
          </div>
          <div>
            <input
              className="form_input"
              type="text"
              id="first_name"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div>
            <input
              className="form_input"
              type="text"
              id="last_name"
              name="last_name"
              onChange={handleChange}
            />
          </div>
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
          <div>
            <label htmlFor="password">Postcode</label>
          </div>
          <div>
            <input
              className="form_input"
              type="text"
              id="postcode"
              name="postcode"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" type="submit">
            Signup
          </button>
        </form>
      </div>
      <div className="signup-ui">{authenticatedUser ? <div>Successful signed up</div> : null}</div>
    </main>
  );
}
