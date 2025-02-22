import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  console.log("Navbar renderedd");
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">
          <User className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
