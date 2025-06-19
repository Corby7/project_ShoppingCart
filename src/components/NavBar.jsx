import { Link } from "react-router-dom";
import logo from "./../assets/images/logoipsum-350.svg";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ cartCount }) {
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
      <Link to="bag" className="cart-link">
        <ShoppingCart className="cart-icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </div>
  );
}
