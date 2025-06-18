import { Link } from "react-router-dom";
import logo from "./../assets/images/logoipsum-350.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="shopping">Shopping</Link>
      </div>
    </div>
  );
}
