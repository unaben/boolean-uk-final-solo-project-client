import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Map from "./component/Map";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
import Booking from "./component/Booking";
import Admin from "./component/pages/Admin";
const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [taxis, setTaxis] = useState([]);
  const [contacts, setContact] = useState([]);
  console.log({
    auth: authenticatedUser,
    taxi: taxis,
    driver: drivers,
    contact: contacts,
  });

  function getSignup() {
    const url = "http://localhost:3030/signup?";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ Signup: data });
        setAuthenticatedUser(data);
      });
  }
  useEffect(() => {
    getSignup();
  }, []);

  function getAuthenticatedUsers() {
    const url = "http://localhost:3030/login?";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ login: data });
        setAuthenticatedUser(data);
      });
  }
  useEffect(() => {
    getAuthenticatedUsers();
  }, []);

  function fetchTaxi() {
    const url = "http://localhost:3030/taxis?";
    fetch(url)
      .then((res) => res.json())
      .then((taxiData) => {
        // console.log({ taxiData: taxiData });
        setTaxis(taxiData);
      });
  }

  useEffect(() => {
    fetchTaxi();
  }, []);

  function getDrivers() {
    const url = "http://localhost:3030/drivers?";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ taxiData: data.data });
        setDrivers(data);
      });
  }
  useEffect(() => {
    getDrivers();
  }, []);

  function getContacts() {
    const url = "http://localhost:3030/contacts?";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ contactData: data });
        setContact(data);
      });
  }
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <Header />
      <Map />
      <Booking taxis={taxis} drivers={drivers} />
      <Signup
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
      />
      <Login
        authenticatedUser={authenticatedUser}
        setAuthenticatedUser={setAuthenticatedUser}
      />
      <Admin taxis={taxis} setTaxis={setTaxis} />
      <Footer />
    </>
  );
};

export default App;
