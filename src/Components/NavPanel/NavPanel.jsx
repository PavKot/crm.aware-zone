import React, { useState } from "react";
import "./NavPanel.css";
import { FaUsers } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiSignOutFill } from "react-icons/pi";
import logo from "../../Images/logo.png";

const NavPanel = ({ useActiveItem }) => {
  const [activeItem, setActiveItem] = useState(useActiveItem);
  const [open, setOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="nav-menu-mobile-icon">
        <a href="#" onClick={handleMenuClick}>
          {open ? (
            <AiOutlineClose fontSize={36} />
          ) : (
            <BiMenuAltLeft fontSize={36} />
          )}
        </a>
      </div>

      <nav className={open ? "nav-panel open" : "nav-panel"}>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <a href="/">
            <h1>aWARe Zone</h1>
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="/users"
              className={`nav-link ${activeItem === "Users" ? "active" : ""}`}
              onClick={() => handleItemClick("Users")}
            >
              <FaUsers />
              Відвідувачі
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/calendar"
              className={`nav-link ${
                activeItem === "Calendar" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Calendar")}
            >
              <AiOutlineCalendar />
              Календар
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/settings"
              className={`nav-link ${
                activeItem === "Settings" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Settings")}
            >
              <AiFillSetting />
              Налаштування
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/login"
              className={`nav-link ${
                activeItem === "Sign Out" ? "active" : ""
              }`}
              onClick={() => {
                handleItemClick("Sign Out");
                window.localStorage.removeItem("token");
              }}
            >
              <PiSignOutFill />
              Вийти
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavPanel;
