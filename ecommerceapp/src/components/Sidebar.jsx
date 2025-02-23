import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaCog,
  FaHome,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      setIsOpen(!isOpen);

      // Re-enable the button after animation completes (300ms is typical transition time)
      setTimeout(() => {
        setIsDisabled(false);
      }, 300);
    }
  };

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar");
      const toggle = document.querySelector(".sidebar-toggle");
      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Add effect to handle main content margin
  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      if (isOpen) {
        main.classList.add("sidebar-open");
      } else {
        main.classList.remove("sidebar-open");
      }
    }
  }, [isOpen]);

  const menuItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/shop", name: "Shop", icon: <FaShoppingCart /> },
    { path: "/profile", name: "Profile", icon: <FaUser /> },
    { path: "/settings", name: "Settings", icon: <FaCog /> },
  ];

  return (
    <>
      <div
        className={`sidebar-toggle ${isDisabled ? "disabled" : ""}`}
        onClick={toggleSidebar}
        style={{ pointerEvents: isDisabled ? "none" : "auto" }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>E-Shop</h2>
        </div>
        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="menu-item"
              onClick={toggleSidebar}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
