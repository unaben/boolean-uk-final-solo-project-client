import { useState, useEffect } from "react";

function Login({ authenticatedUser, setAuthenticatedUser }) {
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

    fetch("http://localhost:3030/login", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        console.log("Inside Signin Fetch: ", token);

        if (token) {
          setAuthenticatedUser(token);

          localStorage.setItem("user", token);
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
          <h2>Login Form</h2>
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
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <h3>Already registerd, login here</h3>
      {/* <div>
      {authenticatedUser ? <div>Secret</div> : null}
      </div> */}
      {/* {authenticatedUser && <div>Secret</div>} //same as above */}
    </main>
  );
}
export default Login;
