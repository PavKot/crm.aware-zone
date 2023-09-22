import React, { useState } from "react";
import "./AddUserPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const AddUserPopup = ({ open, setOpen, filteredUsers, setFilteredUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visits: 0,
    ngo: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/addVisitor", formData)
      .then((response) => {
        console.log("User added:", response.data);
        setOpen(false);
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <>
      <div className={`add-user-popup-wrapper ${open ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Додати відвідувача</h1>
            <a href="#" onClick={() => setOpen(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="add-user-popup-wrapper-content-form">
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="times">Рази відвідування</label>
              <input
                type="number"
                name="visits"
                id="visits"
                value={formData.visits}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="ngo">Громадська організація</label>
              <input
                type="text"
                name="ngo"
                id="ngo"
                value={formData.ngo}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="city">Місто</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleSubmit}>Додати</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserPopup;
