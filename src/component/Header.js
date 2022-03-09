import { Link } from "react-router-dom";
function Header() {

  const headerStyle = { 
    color: "wheat",
  };
  return (
    <section className="header_container ">
      <h1 style={{ color: "wheat" }}>TAXI-APP</h1>
      <nav>
        <ul className="ul-path">
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/bookings"></Link>
          </li>
          <li>
            <Link to="/trips"></Link>
          </li>
        </ul>
      </nav>
    </section> 
 
  );
}
export default Header;
