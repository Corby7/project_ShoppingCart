import { Link } from "react-router-dom";
import logo from "./../assets/images/logoipsum-350.svg";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="leftside">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="store">Store</Link>
        </div>
      </div>
      <Link to="bag">
        <ShoppingCart className="cart-icon" />
      </Link>
    </div>
  );
}
