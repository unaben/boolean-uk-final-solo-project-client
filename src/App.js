import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Map from "./component/Map";
import Booking from "./component/Booking";
import Admin from "./component/Admin"
import Trip from "./component/Trip";
import { Auth } from "./component/Auth";
import Taxi from "./component/Taxi";
import jwt from "jsonwebtoken";

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [taxis, setTaxis] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [trips, setTrips] = useState([]);
  const [userId, setUserId] = useState(null);
  const [login, setLogin] = useState(false);
  console.log({
    auth: authenticatedUser,
    taxi: taxis,
    driver: drivers,
    contact: contacts,
    trips: trips,
    userId: userId,
  });

  function getSignup() {
    const url = `${process.env.REACT_APP_FETCH_URL}/signup`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ Signup: data });
        setAuthenticatedUser(data);
      });
  }

  function getLogin() {
    const url = `${process.env.REACT_APP_FETCH_URL}/login`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ login: data });
        setAuthenticatedUser(data);
      });
  }

  function fetchTaxi() {
    const url = `${process.env.REACT_APP_FETCH_URL}/taxis`;
    fetch(url)
      .then((res) => res.json())
      .then((taxiData) => {
        // console.log({ taxiData: taxiData });
        setTaxis(taxiData);
      });
  }

  function getDrivers() {
    const url = `${process.env.REACT_APP_FETCH_URL}/drivers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ diverData: data });
        setDrivers(data);
      });
  }

  function getContacts() {
    const url = `${process.env.REACT_APP_FETCH_URL}/contacts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log({ contactData: data });
        setContacts(data);
      });
  }

  function getTrips() {
    const url = `${process.env.REACT_APP_FETCH_URL}/trips`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrips(data);
      });
  }
  useEffect(() => {
    getContacts();
    getDrivers();
    fetchTaxi();
    getSignup();
    getLogin();
    getTrips();
    if (authenticatedUser) {
      const token = localStorage.getItem("user");
      if (token) {
        const decodedToken = jwt.decode(token);
        console.log("decoded: ", decodedToken);
        setUserId(decodedToken.id);
      }
    }
  }, []);

  return (
    <>
        <div className="app-container">      
      <header>
        <Header />
          <nav>
            <ul className="ul-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/trips">Trips</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>       
      </header>
      <main>
        <Routes>
          <Route exact path="/bookings/map" element={<Map />} />
          <Route
            exact
            path="/bookings"
            element={
              <Booking
                taxis={taxis}
                drivers={drivers}
                trips={trips}
                setTrips={setTrips}
                userId={userId}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Auth
                authenticatedUser={authenticatedUser}
                setAuthenticatedUser={setAuthenticatedUser}
                setUserId={setUserId}
                login={login}
                setLogin={setLogin}
              />
            }
          />
          <Route
            exact
            path="/trips"
            element={
              <Trip trips={trips} setTrips={setTrips} drivers={drivers} />
            }
          />
          <Route
            exact
            path="/admin"
            element={<Admin taxis={taxis} setTaxis={setTaxis} />}
          />
          <Route
            exact
            path="/admin/edit"
            element={
              <Taxi taxis={taxis} setTaxis={setTaxis} contacts={contacts} />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </>
  );
};

export default App;
